/** Resolve a public-folder path with the Vite base URL (e.g. /portfolio/). */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`
}
