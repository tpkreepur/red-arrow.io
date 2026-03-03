import { type MetadataRoute } from "next";

import { getAllArticles } from "@/lib/articles";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const articles = await getAllArticles();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/articles",
    "/projects",
    "/speaking",
    "/thank-you",
    "/uses",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [...staticRoutes, ...articleRoutes];
}
