# AGENTS.md

## Project Overview

Portfolio and blog site for Justin Moore built with Next.js 16 App Router,
React 19, TypeScript, Tailwind CSS v4, and MDX.

Core characteristics:

- Static export build (`output: 'export'`) with GitHub Pages deployment
- MDX article system under `src/app/articles/*/page.mdx`
- Light/dark theme support via `next-themes`
- RSS (`/feed.xml`) and sitemap (`/sitemap.xml`) generated from shared site metadata

## Setup Commands

```bash
npm ci
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Development Workflow

- Use `npm run dev` for local work at <http://localhost:3000>
- Run `npm run typecheck` and `npm run lint` before finalizing changes
- Use `npm run build` to verify static export succeeds and writes `out/`

## Source of Truth

- Site URL: `src/lib/site.ts`
- Static export config: `next.config.mjs`
- Deployment workflow: `.github/workflows/static.yml`
- MDX discovery and ordering: `src/lib/articles.ts`
- Feed generation: `src/app/feed.xml/route.ts`
- Sitemap generation: `src/app/sitemap.ts`

## Article Conventions

Each article file (`src/app/articles/[slug]/page.mdx`) must export:

```mdx
export const article = {
  title: 'Article Title',
  description: 'Brief description',
  author: 'Justin Moore',
  date: '2026-03-03',
}
```

Articles are automatically discovered and sorted newest-first by date.

## Styling and Components

- Tailwind v4 is configured via `src/styles/tailwind.css`
- Typography config is imported from `typography.ts` through `@config`
- Shared UI components live in `src/components/`
- Prefer Server Components; add `'use client'` only when required

## File and Import Patterns

- Pages: `page.tsx` or `page.mdx`
- Components: `PascalCase` files with named exports
- Utilities: `camelCase` files in `src/lib/`
- Use `@/` import alias for `src/`
- Use `type` imports where applicable

## Deployment Model

GitHub Actions deploys on pushes to `main`:

1. `npm ci`
2. `npm run typecheck`
3. `npm run build` with `NEXT_PUBLIC_SITE_URL=https://www.red-arrow.io`
4. Upload `out/`
5. Deploy to GitHub Pages

Production target is the root custom domain `https://www.red-arrow.io`.

## Change Guidelines for Agents

- Keep edits surgical and aligned with existing architecture
- Do not introduce repository subpath assumptions in routes/URLs
- Preserve static-export compatibility for new pages/features
- Update docs when commands, architecture, or deployment behavior changes
