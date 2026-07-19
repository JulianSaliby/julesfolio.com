# Julian Saliby — Portfolio

Custom Astro portfolio. Spec: `../spec.md`.

## Run it

```bash
cd "projects/portfolio/code"
rm -rf node_modules   # once — this folder got corrupted during the sandboxed build
npm install
npm run dev           # → http://localhost:4321
```

`npm run build` outputs to `dist/` (a pre-built copy is already there —
`npm run preview` serves it without installing anything... after install).

## Structure

- `src/styles/global.css` — design tokens (dark Apple-refined, single type family)
- `src/components/blocks/` — the layout-block kit (HeroFullBleed, Diptych, GalleryGrid, VideoFeature…)
- `src/content/projects/*.mdx` — one file per project; bespoke layout composed from blocks
- `src/assets/` — images pulled from the old Adobe Portfolio (1920w variants); swap in originals anytime; `manifest.json` maps them to source pages
- Videos still embed from Adobe CCV — migrate to self-hosted/YouTube before cancelling Adobe

## Adding a project

1. Drop images in `src/assets/<slug>/` (01.jpg, 02.jpg…)
2. Create `src/content/projects/<slug>.mdx` with frontmatter + blocks
3. Done — galleries and home pick it up by discipline + weight
