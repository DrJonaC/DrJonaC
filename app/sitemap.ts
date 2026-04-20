import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/work", "/projects", "/research", "/contact"];

  return routes.map((route) => ({
    url: `${siteMeta.siteUrl}${route}`,
    lastModified: new Date("2026-04-20")
  }));
}
