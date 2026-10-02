// Generates web-sized WebP copies of photos-original/ into public/assets/img/.
// For every source image: <name>.webp (long edge 2048) and <name>-thumb.webp (long edge 800).
import { readdir, mkdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SRC = 'photos-original'
const OUT = 'public/assets/img'
const SIZES = [
  { suffix: '', width: 2048, quality: 80 },
  { suffix: '-thumb', width: 800, quality: 72 },
]

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(p)
    else if (/\.(jpe?g|png)$/i.test(entry.name)) yield p
  }
}

async function isFresh(out, srcMtime) {
  try {
    return (await stat(out)).mtimeMs >= srcMtime
  } catch {
    return false
  }
}

let made = 0
const sizes = {}
for await (const file of walk(SRC)) {
  const rel = path.relative(SRC, file).replace(/\.[^.]+$/, '')
  const { mtimeMs } = await stat(file)
  await mkdir(path.join(OUT, path.dirname(rel)), { recursive: true })

  for (const { suffix, width, quality } of SIZES) {
    const out = path.join(OUT, `${rel}${suffix}.webp`)
    if (await isFresh(out, mtimeMs)) continue
    await sharp(file)
      .rotate()
      .resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
      .webp({ quality })
      .toFile(out)
    made++
  }

  const meta = await sharp(path.join(OUT, `${rel}.webp`)).metadata()
  sizes[`/assets/img/${rel.split(path.sep).join('/')}.webp`] = [meta.width, meta.height]
}

await writeFile('src/data/image-sizes.json', JSON.stringify(sizes, Object.keys(sizes).sort(), 0) + '\n')

// Portrait: crop out the upscaler watermark in the bottom-left corner.
const portrait = sharp(path.join(SRC, 'prof_pic_2.jpg')).extract({ left: 112, top: 140, width: 1120, height: 1300 })
await portrait.clone().resize({ width: 720 }).webp({ quality: 80 }).toFile(path.join(OUT, 'portrait.webp'))
await portrait.clone().resize({ width: 720 }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(OUT, 'portrait.jpg'))

console.log(`optimized ${made} files`)
