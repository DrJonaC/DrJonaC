import type { MetadataRoute } from "next";

const basePath =
  process.env.GITHUB_ACTIONS === "true"
    ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "DrJonaC"}`
    : "";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jianan Chen",
    short_name: "Jianan Chen",
    description:
      "Personal portfolio for Jianan Chen, focused on LLM agent systems, memory privacy, and trustworthy AI.",
    start_url: basePath ? `${basePath}/` : "/",
    display: "standalone",
    background_color: "#f5f5f7",
    theme_color: "#f5f5f7",
    icons: [
      {
        src: `${basePath}/icon`,
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: `${basePath}/apple-icon`,
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
