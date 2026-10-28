import type { MetadataRoute } from "next";

import { portfolioData } from "@/data/portfolio";

import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = portfolioData.projects.map(
    (project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    }),
  );

  return [...staticRoutes, ...projectRoutes];
}
