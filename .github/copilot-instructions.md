# Copilot Instructions for Red-Arrow.io

## Project Overview

This is a personal portfolio website built with Next.js 14 using the App Router, configured for static export and GitHub Pages deployment. The site features MDX-based articles, dark/light theme support, and a clean, professional design built with Tailwind CSS.

## Architecture & Key Patterns

### Static Export Configuration

- Site is configured for static export (`output: 'export'`) with GitHub Pages deployment
- Production builds use `basePath: '/red-arrow.io'` and `assetPrefix` for proper GitHub Pages routing
- Images are unoptimized (`images: { unoptimized: true }`) due to static export limitations

### MDX Article System

- Articles live in `src/app/articles/[slug]/page.mdx` following Next.js App Router conventions
- Each article exports an `article` object with metadata (title, description, author, date)
- Articles use `ArticleLayout` component for consistent styling and navigation
- `src/lib/articles.ts` dynamically imports and sorts articles by date using `fast-glob`

### Component Architecture

- Layout uses a fixed background design pattern with centered content (`max-w-7xl`)
- All components follow the pattern of exporting named functions (not default exports except for pages)
- Client components are explicitly marked with `'use client'` directive
- Shared UI components in `src/components/` follow atomic design principles

### Styling Conventions

- Tailwind CSS with custom color system using CSS variables for theming
- Dark mode support via `next-themes` with `class` strategy
- Typography handled by `@tailwindcss/typography` plugin for article content
- Consistent spacing using Tailwind's spacing scale (mt-16, lg:mt-32 patterns)

## Development Workflows

### Local Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run export       # Generate static export
npm run deploy       # Build, export, and deploy to GitHub Pages
```

### Adding New Articles

1. Create directory: `src/app/articles/[slug]/`
2. Add `page.mdx` with required `article` export object
3. Include images in the same directory
4. Articles auto-appear on `/articles` page via dynamic import system

### RSS Feed Generation

- RSS feed generated at `/feed.xml` via route handler in `src/app/feed.xml/route.ts`
- Automatically includes all articles with proper metadata extraction
- Uses `cheerio` for HTML content processing and `feed` library for RSS generation

## Key Integration Points

### Theme System

- `src/app/providers.tsx` sets up `ThemeProvider` for dark/light mode
- Theme state managed globally, affects all components
- Custom color variables in `tailwind.config.ts` support theme switching

### MDX Processing

- `next.config.mjs` configures MDX with `remark-gfm` and `rehype-prism` for syntax highlighting
- `mdx-components.tsx` provides custom component mappings for MDX content
- Prism CSS styling in `src/styles/prism.css` for code blocks

### Asset Management

- Images stored in `src/images/` with organized subdirectories (`logos/`, `photos/`)
- Static assets (favicons, etc.) in `src/app/` directory following App Router conventions
- Sharp optimizations disabled for static export compatibility

## Project-Specific Conventions

### File Naming

- Page files: `page.tsx` or `page.mdx` (Next.js App Router convention)
- Components: PascalCase files with named exports (`ArticleLayout.tsx`)
- Utilities: camelCase files in `src/lib/` (`formatDate.ts`, `articles.ts`)

### Import Patterns

- Use `@/` alias for `src/` directory (configured in `tsconfig.json`)
- Component imports use explicit named imports, not default exports
- Type imports use `type` keyword for better tree-shaking

### Responsive Design

- Mobile-first approach with Tailwind breakpoints (sm, lg, xl)
- Consistent container patterns using `Container` component
- Fixed layout with responsive sidebar navigation patterns

## Critical Dependencies

- `@next/mdx` and MDX ecosystem for article content
- `next-themes` for theme switching functionality
- `fast-glob` for dynamic article discovery
- `feed` library for RSS generation
- `@tailwindcss/typography` for article content styling
