# ctlandu.github.io

Colin Tang's personal site. React + Vite + Tailwind, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Editing content

- Home page text (projects, experience, research, photo strip, archive list): `src/data/profile.js`. Text fields are `{ en, zh }`; UI labels live in `src/lib/i18n.jsx`.
- Photo collections: `src/data/projects.json`
- Résumé PDFs: `public/assets/pdf/`

## Photos

Full-resolution originals live in `photos-original/` (git-ignored, never deployed). After adding or replacing a photo there, run:

```bash
npm run images
```

This writes two WebP sizes into `public/assets/img/` (`name.webp`, 2048px; `name-thumb.webp`, 800px) and refreshes `src/data/image-sizes.json`. Reference the `.webp` path in `projects.json`; the gallery picks the thumbnail automatically.

## Archive

`public/archive/` holds earlier versions of the site, linked from the Archive page. It is generated, not hand-edited:

```bash
npm run archive
```

The script pulls the two Jekyll versions from old `gh-pages` deploys, rebuilds the 2025 React version from its commit, rewrites root paths to `/archive/<year>/`, strips dead third-party scripts, and re-encodes the shared photos into `public/archive/_img/`. Versions are listed at the top of `scripts/build-archive.mjs`. Cover screenshots for the Archive page are in `photos-original/archive/`.
