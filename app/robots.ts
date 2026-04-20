import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/site-data";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteMeta.siteUrl}sitemap.xml`
  };
}
