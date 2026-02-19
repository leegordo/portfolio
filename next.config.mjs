/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
// GitHub Pages: project sites (username.github.io/<repo>) need basePath; user sites (username.github.io) do not.
// Override with BASE_PATH env var in workflow if repo name differs from URL path.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isUserSite = repoName.endsWith(".github.io");
const basePath =
  process.env.BASE_PATH ??
  (isGitHubActions && !isUserSite ? `/${repoName.toLowerCase()}` : "");

const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  output: "export",
  basePath: "",
  // Ensures static assets are prefixed correctly for GitHub Pages exports.
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
