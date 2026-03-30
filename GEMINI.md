# Gemini Context: red-arrow.io

## Snapshot

- Project type: static-export Next.js site
- Owner: Justin Moore
- Stack: Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, MDX
- Deploy target: GitHub Pages + custom domain `https://www.red-arrow.io`

## Commands

- `npm ci` — install dependencies
- `npm run dev` — local development server
- `npm run typecheck` — TypeScript checks
- `npm run lint` — ESLint checks
- `npm run build` — production static export to `out/`

## Deployment model

- Deployment is workflow-based (`.github/workflows/static.yml`), not script-based.
- Pushes to `main` trigger Pages deployment.
- Build uses `NEXT_PUBLIC_SITE_URL=https://www.red-arrow.io`.

## Project structure

- `src/app/` — App Router routes, feed, sitemap, robots
- `src/components/` — shared UI components
- `src/lib/` — shared utilities including `site.ts` and `articles.ts`
- `src/styles/` — Tailwind v4 and Prism styles
- `src/images/` — photos and logos

## Content conventions

- Articles live under `src/app/articles/[slug]/` as `content.mdx` plus a `page.tsx` server route wrapper.
- `content.mdx` exports `article` metadata (`title`, `description`, `author`, `date`).
- `src/lib/articles.ts` discovers and sorts articles via `fast-glob`.

## Configuration notes

- Static export is enabled with `output: 'export'` in `next.config.mjs`.
- Images are unoptimized (`images.unoptimized: true`) for static hosting.
- Canonical URL logic is centralized in `src/lib/site.ts` and reused by layout,
  feed, sitemap, and robots outputs.
