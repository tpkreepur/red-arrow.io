declare module "*.mdx" {
  import type { MDXComponents } from "mdx/types";
  import type { Article } from "@/lib/articles";

  export const article: Article;

  const MDXContent: (props: {
    components?: MDXComponents;
  }) => React.JSX.Element;
  export default MDXContent;
}
