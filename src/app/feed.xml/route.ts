import { Feed } from "feed";

import { getAllArticles } from "@/lib/articles";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const siteUrl = getSiteUrl();

  let author = {
    name: "Justin Moore",
    email: "justin@red-arrow.io",
  };

  let feed = new Feed({
    title: author.name,
    description: "The ramblings of a madman",
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  });

  let articles = await getAllArticles();

  for (let article of articles) {
    let url = `${siteUrl}/articles/${article.slug}`;

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: article.description,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    });
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "content-type": "application/xml",
      "cache-control": "s-maxage=31536000",
    },
  });
}
