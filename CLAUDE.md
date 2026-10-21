# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio/blog for Justin Moore. Next.js 16 App Router + React 19 + TypeScript + Tailwind v4, MDX articles, statically exported to GitHub Pages at `https://www.red-arrow.io`.

## Commands

- `npm ci` — install (Node 22+)
- `npm run dev` — dev server on <http://localhost:3000>
- `npm run build` — static export to `out/` (Turbopack)
- `npm run typecheck` — `tsc --noEmit` (CI runs this before build)
- `npm run lint` — ESLint flat config (`eslint.config.mjs`, extends `next/core-web-vitals`)

There is no test suite.

## Architecture

- **Static export only**: `next.config.mjs` sets `output: 'export'` and `images.unoptimized: true`. No server runtime, no `basePath` (custom domain root). Anything needing a server (API routes, dynamic rendering, image optimization) won't work.
- **MDX articles**: each article is `src/app/articles/<slug>/page.mdx` and must `export const article = { title, description, author, date }`. Images go in the same directory. `src/lib/articles.ts` finds them with `fast-glob` (`*/page.mdx`), dynamically imports each for its `article` export, and sorts by date. This feeds the `/articles` index and the RSS feed (`src/app/feed.xml/route.ts`, built with `feed`).
- **MDX pipeline**: `next.config.mjs` passes plugins as string names (`"remark-gfm"`, `"@mapbox/rehype-prism"`) (serializable form, required by Turbopack, which handles both dev and build); keep that form. `mdx-components.tsx` maps MDX elements to components; Prism styles in `src/styles/prism.css`.
- **Canonical URL**: `src/lib/site.ts` `getSiteUrl()` (reads `NEXT_PUBLIC_SITE_URL`, defaults to the prod domain) is the single source for metadata, feed, sitemap, and robots. Don't hardcode the domain elsewhere.
- **Theming**: `next-themes` with class strategy, set up in `src/app/providers.tsx`; CSS variables in `src/styles/tailwind.css`.

## Conventions

- `@/` alias maps to `src/`.
- Components: PascalCase files in `src/components/`, named exports (default exports only for pages). Client components need `'use client'`.
- Utilities: camelCase files in `src/lib/`.

## Deployment

`.github/workflows/static.yml` deploys on push to `main`: `npm ci` → `typecheck` → `build` (with `NEXT_PUBLIC_SITE_URL=https://www.red-arrow.io`) → upload `out/` to GitHub Pages.
