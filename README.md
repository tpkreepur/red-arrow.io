# red-arrow.io

Personal portfolio and blog for Justin Moore.

## Overview

- Framework: Next.js 16 App Router
- Runtime: React 19 + TypeScript
- Styling: Tailwind CSS v4 + `@tailwindcss/typography`
- Content: MDX articles with `remark-gfm` and `rehype-prism`
- Deployment: Static export (`output: 'export'`) to GitHub Pages

## Requirements

- Node.js 20+
- npm

## Local development

Install dependencies:

```bash
npm ci
```

Start the dev server:

```bash
npm run dev
```

Open <http://localhost:3000>.

## Commands

- `npm run dev` — start local development server
- `npm run build` — create production static export in `out/`
- `npm run typecheck` — run TypeScript checks (`tsc --noEmit`)
- `npm run lint` — run ESLint

## Deployment

Deployment is handled by `.github/workflows/static.yml`.

On push to `main`, the workflow:

1. Checks out the repo
2. Sets up Node 20 with npm cache
3. Runs `npm ci`
4. Runs `npm run typecheck`
5. Runs `npm run build` with `NEXT_PUBLIC_SITE_URL=https://www.red-arrow.io`
6. Uploads `out/` and deploys to GitHub Pages

The site targets the custom-domain root `https://www.red-arrow.io` (no repo subpath).

## Content model (articles)

Each article lives in `src/app/articles/[slug]/` and uses:

- `content.mdx` for article body content plus `article` metadata export
- `page.tsx` as a server wrapper for route metadata and `ArticleLayout`

`content.mdx` must export an `article` metadata object:

```typescript
export const article = {
  title: "Article Title",
  description: "Brief description",
  author: "Justin Moore",
  date: "2026-03-03",
};
```

The article index is built from `src/lib/articles.ts`, which discovers and sorts
MDX files by date.

## Project layout

- `src/app/` — routes, layouts, metadata, feed, sitemap
- `src/components/` — shared UI components
- `src/lib/` — shared utilities (`site.ts`, `articles.ts`, `formatDate.ts`)
- `src/styles/` — Tailwind and Prism styles
- `src/images/` — photos and logos

## Notes

- `src/lib/site.ts` centralizes canonical URL generation for metadata, feed,
  sitemap, and robots output.
- Images are unoptimized in `next.config.mjs` for static export compatibility.
