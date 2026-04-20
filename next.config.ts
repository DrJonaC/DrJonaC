import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "DrJonaC";
const basePath = isGitHubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_ORIGIN: isGitHubPages ? "https://drjonac.github.io" : "http://localhost:3000"
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
