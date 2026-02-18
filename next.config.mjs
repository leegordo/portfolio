/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
// GitHub Pages serves this repo under /<repo>, so we only apply basePath in CI builds.
const basePath = isGitHubActions ? "/portfolio" : "";

const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  output: "export",
  basePath,
  // Ensures static assets are prefixed correctly for GitHub Pages exports.
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
