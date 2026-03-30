import { type Metadata } from "next";

import { ArticleLayout } from "@/components/ArticleLayout";

import Content, { article } from "./content.mdx";

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
};

export default function Page() {
  return (
    <ArticleLayout
      article={{
        ...article,
        slug: "creating-a-tribal-data-classification-system",
      }}
    >
      <Content />
    </ArticleLayout>
  );
}
