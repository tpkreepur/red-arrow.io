# AGENTS.md

## Project Overview

This is a personal portfolio website built with Next.js 14 using the App Router, configured for static export and GitHub Pages deployment. The site features:

- **MDX-based articles** with syntax highlighting and typography styling
- **Dark/light theme support** via next-themes
- **Static export** for GitHub Pages hosting
- **Clean, professional design** built with Tailwind CSS v4
- **RSS feed generation** for articles
- **Responsive design** with mobile-first approach

### Key Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4 with @tailwindcss/typography
- **Content**: MDX with remark-gfm and rehype-prism
- **Theme**: next-themes for dark/light mode
- **Deployment**: GitHub Pages via GitHub Actions
- **Language**: TypeScript

## Setup Commands

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build

# Generate static export (for GitHub Pages)
npm run export

# Lint code
npm run lint

# Deploy to GitHub Pages (build + export + deploy)
npm run deploy
```

## Development Workflow

### Local Development

1. **Start development server**: `npm run dev`
   - Runs on <http://localhost:3000>
   - Hot reload enabled for all files
   - MDX files are processed in real-time

2. **Environment considerations**:
   - Development uses local paths (no basePath)
   - Production uses `/red-arrow.io` basePath for GitHub Pages
   - Images are unoptimized due to static export requirements

### Adding New Articles

1. Create directory: `src/app/articles/[slug]/`
2. Add `page.mdx` with required article metadata:

   ```mdx
   export const article = {
     title: 'Article Title',
     description: 'Brief description',
     author: 'Author Name',
     date: '2025-01-01',
   }
   ```

3. Include images in the same directory if needed
4. Articles automatically appear on `/articles` page via dynamic import system

### Theme System

- Uses `next-themes` with class-based strategy
- Theme state managed in `src/app/providers.tsx`
- Custom CSS variables in `tailwind.config.ts` support theme switching
- Dark/light mode toggle available in header

## Code Style Guidelines

### File Naming Conventions

- **Pages**: `page.tsx` or `page.mdx` (Next.js App Router)
- **Components**: PascalCase files with named exports (`ArticleLayout.tsx`)
- **Utilities**: camelCase files in `src/lib/` (`formatDate.ts`)
- **Static assets**: snake_case or kebab-case

### Import Patterns

- Use `@/` alias for `src/` directory (configured in `tsconfig.json`)
- Component imports use explicit named exports, not default exports
- Type imports use `type` keyword for better tree-shaking

### Component Architecture

- **Server Components** by default (App Router)
- **Client Components** explicitly marked with `'use client'`
- Components follow atomic design principles
- Shared UI components in `src/components/`

### Styling Conventions

- Tailwind CSS with custom color system using CSS variables
- Typography handled by `@tailwindcss/typography` plugin
- Consistent spacing using Tailwind's spacing scale
- Mobile-first responsive design patterns

## Build and Deployment

### Production Build Process

```bash
# Full production build and export
npm run build && npm run export
```

**Build Configuration**:

- `output: 'export'` for static site generation
- `basePath: '/red-arrow.io'` and `assetPrefix` for GitHub Pages
- `images: { unoptimized: true }` due to static export limitations
- MDX processing with remark-gfm and rehype-prism plugins

### GitHub Pages Deployment

**Automatic deployment** via GitHub Actions (`.github/workflows/static.yml`):

1. Triggers on push to `main` branch
2. Installs Node.js 20 and dependencies
3. Runs `npm run build` with production environment
4. Uploads `.next` directory to GitHub Pages
5. Deploys automatically

**Manual deployment**:

```bash
npm run deploy  # Uses gh-pages package
```

### Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Set to '<https://www.red-arrow.io>' in production
- `NODE_ENV`: Determines basePath and assetPrefix configuration

## Project Structure Patterns

### App Router Organization

```text
src/app/
├── layout.tsx          # Root layout with providers
├── page.tsx           # Homepage
├── not-found.tsx      # 404 page
├── articles/          # Article pages
│   ├── page.tsx       # Articles index
│   └── [slug]/
│       └── page.mdx   # Individual articles
├── feed.xml/          # RSS feed route handler
└── [other-pages]/     # Static pages (about, projects, etc.)
```

### Component Patterns

- **Layout Components**: `Layout.tsx`, `ArticleLayout.tsx`, `SimpleLayout.tsx`
- **UI Components**: `Button.tsx`, `Card.tsx`, `Container.tsx`
- **Shared Components**: `Header.tsx`, `Footer.tsx`, `SocialIcons.tsx`

### Asset Management

- **Images**: Stored in `src/images/` with organized subdirectories
- **Static assets**: Favicons and manifest files in `src/app/`
- **Logos and photos**: Organized in `src/images/logos/` and `src/images/photos/`

## MDX and Content Management

### Article System

- Articles use MDX with custom component mappings (`mdx-components.tsx`)
- Metadata exported as `article` object in each MDX file
- Dynamic discovery via `src/lib/articles.ts` using `fast-glob`
- Automatic sorting by date (newest first)

### RSS Feed

- Generated at `/feed.xml` via route handler
- Uses `feed` library for RSS generation
- Automatically includes all articles with metadata
- Content processed with `cheerio` for HTML extraction

### Syntax Highlighting

- Code blocks styled with Prism.js via `@mapbox/rehype-prism`
- Custom Prism CSS in `src/styles/prism.css`
- Supports multiple programming languages

## Testing and Quality

### Linting

```bash
npm run lint  # Next.js ESLint configuration
```

### Code Formatting

- **Prettier** configured with Tailwind CSS plugin
- Configuration in `prettier.config.js`
- Automatic class sorting for Tailwind

### Performance Considerations

- Static export eliminates server-side rendering overhead
- Image optimization disabled but images manually optimized
- CSS and JS bundling via Next.js webpack configuration
- CDN delivery via GitHub Pages

## Pull Request Guidelines

- **Title format**: `[component] Brief description`
- **Required checks**: `npm run lint` and `npm run build`
- **Testing**: Verify local build and export work correctly
- **Content**: Test MDX articles render properly with all metadata

## Common Development Tasks

### Adding a New Page

1. Create `src/app/[page-name]/page.tsx`
2. Use `SimpleLayout` for basic pages or create custom layout
3. Add navigation link in `Header.tsx` if needed

### Updating Styles

1. Modify Tailwind classes directly in components
2. Add custom CSS variables in `tailwind.config.ts` for theme support
3. Use `@tailwindcss/typography` classes for content styling

### Working with Images

1. Add images to appropriate `src/images/` subdirectory
2. Import and use with Next.js `Image` component
3. Remember images are unoptimized due to static export

## Troubleshooting

### Build Issues

- **MDX compilation errors**: Check article metadata format and MDX syntax
- **Asset path issues**: Verify basePath configuration in `next.config.mjs`
- **Image optimization errors**: Ensure `unoptimized: true` is set

### Development Issues

- **Hot reload not working**: Restart dev server, check file extensions
- **Theme not switching**: Verify `ThemeProvider` setup in `providers.tsx`
- **Import errors**: Check `@/` alias configuration in `tsconfig.json`

### Deployment Issues

- **GitHub Pages 404**: Verify basePath and assetPrefix settings
- **Assets not loading**: Check production build output and paths
- **RSS feed errors**: Validate article metadata and feed generation

## Additional Notes

- This project prioritizes simplicity and maintainability over complex features
- All styling is done with Tailwind CSS - no custom CSS files except for Prism
- The site is fully static and can be served from any static hosting provider
- Dark mode state persists across sessions via localStorage
- Article system is designed for easy content creation without database dependency
