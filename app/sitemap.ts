import type { MetadataRoute } from "next";
import { industries, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/industries", ...industries.items.map((i) => `/industries/${i.slug}`), "/work", "/about", "/contact"];
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
