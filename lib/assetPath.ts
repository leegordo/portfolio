/**
 * Prefixes asset paths (images, video) with basePath for GitHub Pages deployment.
 * When deployed at username.github.io/portfolio/, assets must be at /portfolio/images/...
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!base || !path) return path;
  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
}
