/**
 * Prefixes asset paths (images, video) for GitHub Pages deployment.
 * Uses absolute URL when NEXT_PUBLIC_SITE_URL is set (avoids path resolution issues).
 */
export function assetPath(path: string): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (siteUrl) {
    return `${siteUrl.replace(/\/$/, "")}${normalizedPath}`;
  }
  if (!basePath || !path) return path;
  return path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;
}
