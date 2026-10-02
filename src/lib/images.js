import sizes from '../data/image-sizes.json'

export { thumb } from './thumb'

export function thumbSize(src) {
  const [w, h] = sizes[src] ?? [4, 3]
  const scale = Math.min(1, 800 / Math.max(w, h))
  return { width: Math.round(w * scale), height: Math.round(h * scale) }
}
