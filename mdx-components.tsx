// mdx-components.tsx
import Image, { type ImageProps } from "next/image";
import { type MDXComponents } from "mdx/types";
import { ArticleLayout } from "@/components/ArticleLayout";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: ({ alt = "", ...props }: ImageProps) => (
      <Image alt={alt} {...props} />
    ),
    ArticleLayout,
  };
}
