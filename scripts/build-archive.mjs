// Rebuilds public/archive/ from past versions of the site stored in git.
// Jekyll versions come straight from old gh-pages deploys; the React version is rebuilt with Vite.
// Photos are shared by every version and re-encoded to web size under public/archive/_img/.
import { execSync } from 'node:child_process'
import { mkdtempSync, rmSync, readFileSync, writeFileSync, mkdirSync, existsSync, cpSync, readdirSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import sharp from 'sharp'

const OUT = 'public/archive'
const IMG = `${OUT}/_img`

const VERSIONS = [
  { slug: '2023', kind: 'jekyll', ref: '0c348d6' },
  { slug: '2024', kind: 'jekyll', ref: '23bee9c' },
  { slug: '2025', kind: 'vite', ref: 'fd41bd5' },
]

const sh = (cmd, opts = {}) => execSync(cmd, { stdio: ['ignore', 'pipe', 'inherit'], maxBuffer: 1 << 30, ...opts })
const decode = (p) => decodeURIComponent(p.replace(/&amp;/g, '&').replace(/\?.*$/, ''))

const images = new Map()

// Old versions referenced a few images that never existed; leave those broken, as they were.
function wantImage(ref, gitPath, blobRef) {
  let blob
  try {
    blob = sh(`git rev-parse --verify --quiet "${blobRef}:${gitPath}"`).toString().trim()
  } catch {
    return
  }
  const seen = images.get(ref)
  if (seen && seen.blob !== blob) throw new Error(`${ref} differs between versions`)
  if (!seen) images.set(ref, { blob })
}

function banner(slug) {
  return `<div style="position:fixed;right:16px;bottom:16px;z-index:99999;font:500 13px/1.2 system-ui,sans-serif;background:#0a3427;color:#f5f0e2;border-radius:999px;padding:10px 16px;box-shadow:0 8px 24px rgba(0,0,0,.25)">Archived ${slug} version · <a href="/" style="color:#cdb07a;text-decoration:underline">current site</a></div>`
}

function buildJekyll({ slug, ref }) {
  const tmp = mkdtempSync(path.join(tmpdir(), `archive-${slug}-`))
  sh(`git archive ${ref} ':(exclude)assets/img' | tar -x -C "${tmp}"`)

  const pages = ['index.html', 'publications/index.html', 'projects/index.html']
  for (const dir of readdirSync(path.join(tmp, 'photography'), { withFileTypes: true })) {
    if (dir.isDirectory() && dir.name !== 'example') pages.push(`photography/${dir.name}/index.html`)
  }
  pages.push('photography/index.html')

  const assets = new Set()
  for (const page of pages.filter((p) => existsSync(path.join(tmp, p)))) {
    let html = readFileSync(path.join(tmp, page), 'utf8')
      .replace(/<script[^>]*(polyfill\.io|datafa\.st)[^>]*><\/script>/g, '')
      .replace(/(\s(?:src|href|data-src|poster)=")\/(?!\/)([^"]*)"/g, (_, attr, rest) => {
        const target = decode(`/${rest}`)
        if (target.startsWith('/assets/img/')) {
          wantImage(target, target.slice(1), ref)
          return `${attr}/archive/_img/${rest.slice('assets/img/'.length)}"`
        }
        if (target.startsWith('/assets/')) assets.add(target)
        return `${attr}/archive/${slug}/${rest}"`
      })
      .replace(/<body([^>]*)>/, `<body$1>${banner(slug)}`)

    const out = path.join(OUT, slug, page)
    mkdirSync(path.dirname(out), { recursive: true })
    writeFileSync(out, html)
  }

  for (const asset of assets) {
    const src = path.join(tmp, asset)
    if (!existsSync(src)) continue
    const out = path.join(OUT, slug, asset)
    mkdirSync(path.dirname(out), { recursive: true })
    cpSync(src, out)
  }
  rmSync(tmp, { recursive: true, force: true })
}

function buildVite({ slug, ref }) {
  const tmp = mkdtempSync(path.join(tmpdir(), `archive-${slug}-`))
  sh(`git archive ${ref} package.json package-lock.json index.html vite.config.js tailwind.config.js postcss.config.js src | tar -x -C "${tmp}"`)
  const viteConfig = path.join(tmp, 'vite.config.js')
  writeFileSync(viteConfig, readFileSync(viteConfig, 'utf8').replace(/base:\s*'\/'/, `base: '/archive/${slug}/'`))
  sh('npm ci --no-audit --no-fund && npx vite build', { cwd: tmp })

  const out = path.join(OUT, slug)
  cpSync(path.join(tmp, 'dist'), out, { recursive: true })

  for (const file of readdirSync(path.join(out, 'assets')).filter((f) => f.endsWith('.js'))) {
    const p = path.join(out, 'assets', file)
    const js = readFileSync(p, 'utf8').replace(/"\/assets\/([^"]+)"/g, (_, rest) => {
      const target = `/assets/${rest}`
      if (target.startsWith('/assets/img/')) {
        wantImage(target, `public${target}`, ref)
        return `"/archive/_img/${rest.slice('img/'.length)}"`
      }
      const dest = path.join(out, target)
      mkdirSync(path.dirname(dest), { recursive: true })
      writeFileSync(dest, sh(`git show "${ref}:public${target}"`))
      return `"/archive/${slug}${target}"`
    })
    writeFileSync(p, js)
  }

  const indexPath = path.join(out, 'index.html')
  writeFileSync(indexPath, readFileSync(indexPath, 'utf8').replace(/<body([^>]*)>/, `<body$1>${banner(slug)}`))
  rmSync(tmp, { recursive: true, force: true })
}

rmSync(OUT, { recursive: true, force: true })
for (const v of VERSIONS) (v.kind === 'jekyll' ? buildJekyll : buildVite)(v)

for (const [ref, { blob }] of images) {
  const out = path.join(IMG, ref.slice('/assets/img/'.length))
  mkdirSync(path.dirname(out), { recursive: true })
  const img = sharp(sh(`git cat-file blob ${blob}`)).rotate()
  if (/\.png$/i.test(out)) await img.resize({ width: 800, withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(out)
  else await img.resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 76, mozjpeg: true }).toFile(out)
}

console.log(`archived ${VERSIONS.length} versions, ${images.size} shared images`)
