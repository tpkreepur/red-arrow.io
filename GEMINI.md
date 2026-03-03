# Gemini Context: red-arrow.io

This project is a personal portfolio and blog for Justin Moore, built with modern web technologies and a focus on performance and developer experience.

## Project Overview

*   **Type:** Next.js Static Website
*   **Owner:** Justin Moore
*   **Core Tech Stack:** Next.js 14 (App Router), React 18, Tailwind CSS 4, MDX, TypeScript.
*   **Deployment:** Static export deployed to GitHub Pages via the `gh-pages` branch.

## Building and Running

*   **Development Server:** `npm run dev`
*   **Production Build:** `npm run build`
*   **Static Export:** `npm run export` (Generates a static site in the `out/` directory).
*   **Deployment:** `npm run deploy` (Runs build, export, and pushes to GitHub Pages).
*   **Linting:** `npm run lint`

## Project Structure

*   `src/app/`: Contains the application routes and layout.
    *   `src/app/articles/`: MDX-based blog posts. Each article is a directory containing a `page.mdx`.
    *   `src/app/layout.tsx`: Root layout with global providers and metadata.
*   `src/components/`: Reusable React components (Button, Card, Container, etc.).
*   `src/lib/`: Utility libraries, including `articles.ts` for dynamic fetching of MDX content.
*   `src/styles/`: Global styles, including `tailwind.css` (Tailwind 4 configuration).
*   `src/images/`: Static image assets and logos.

## Development Conventions

### Articles (MDX)
*   Articles are stored in `src/app/articles/[slug]/page.mdx`.
*   Each `page.mdx` file **must** export an `article` object containing metadata:
    ```typescript
    export const article = {
      author: 'Justin Moore',
      date: '2023-12-25',
      title: 'Title of the Article',
      description: 'A brief summary of the post.',
    }
    ```
*   The `getAllArticles` utility in `src/lib/articles.ts` dynamically discovers these files using `fast-glob`.

### Styling
*   Uses **Tailwind CSS 4** with the new CSS-first configuration found in `src/styles/tailwind.css`.
*   Custom typography settings are defined in `typography.ts` and imported into the Tailwind CSS configuration.
*   Supports light and dark modes via `next-themes`.

### Static Export
*   The project is configured for static export in `next.config.mjs` (`output: 'export'`).
*   Images are unoptimized (`unoptimized: true`) to support static hosting environments like GitHub Pages.
*   `basePath` and `assetPrefix` are dynamically set based on the `NODE_ENV`.

### Code Quality
*   **TypeScript:** Strictly typed for better maintainability.
*   **Linting:** ESLint with `eslint-config-next`.
*   **Formatting:** Prettier with `prettier-plugin-tailwindcss` for consistent class ordering.
