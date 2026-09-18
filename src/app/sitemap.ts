import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/sobre`, priority: 0.6 },
    ...getCaseStudies().map((p) => ({ url: `${site.url}/projetos/${p.slug}`, priority: 0.9 })),
  ];
}
