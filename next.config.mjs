// next.config.mjs
import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["@mapbox/rehype-prism"],
  },
});

export default withMDX(nextConfig);
