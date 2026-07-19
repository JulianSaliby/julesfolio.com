import type { ImageMetadata } from 'astro';

// Every project image lives in src/assets/<dir>/<name>.<ext>.
// Blocks reference assets by extension-less path ("next-real-estate/01",
// "covers/photo") so the zip's mixed jpg/png extensions never matter.
const all = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpg,jpeg,png,webp,gif,JPG,PNG}',
  { eager: true }
);

export function asset(path: string): ImageMetadata {
  const hit = Object.entries(all).find(([k]) =>
    k.replace(/\.[a-zA-Z]+$/, '').endsWith(`/assets/${path}`)
  );
  if (!hit) throw new Error(`Asset not found: ${path}`);
  return hit[1].default;
}

export function hasAsset(path: string): boolean {
  return Object.keys(all).some((k) =>
    k.replace(/\.[a-zA-Z]+$/, '').endsWith(`/assets/${path}`)
  );
}

/** All images in a directory, sorted by filename (01, 02, …). */
export function assetsIn(dir: string): ImageMetadata[] {
  return Object.entries(all)
    .filter(([k]) => k.includes(`/assets/${dir}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m.default);
}
