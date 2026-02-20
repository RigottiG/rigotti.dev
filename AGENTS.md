# AGENTS.md

This file provides guidance for AI agents working in this repository.

## Development Commands

```bash
pnpm dev          # Start development server (Astro)
pnpm build        # Build for production (static site)
pnpm preview      # Preview production build locally
pnpm lint         # Run ESLint
```

**Note:** This project does not have tests. No test commands are available.

## Project Overview

This is an Astro personal portfolio/blog with a macOS Terminal design theme. Uses 100% static site generation (SSG) with Content Collections for blog posts.

## Code Style Guidelines

### Formatting

- **No semicolons** (`semi: false` in Prettier config)
- **Single quotes** for strings and JSX attributes
- **2 spaces** indentation
- **Trailing commas** (ES5 style)

### Imports

- Use `@/*` path alias for imports from `src/` directory:
  ```astro
  import BaseLayout from '@/layouts/BaseLayout.astro'
  import Header from '@/components/Header.astro'
  import type { CollectionEntry } from 'astro:content'
  ```

### Astro Components

- Frontmatter script block with `---` delimiters
- Define Props interface for type safety:

  ```astro
  ---
  interface Props {
    title?: string
    description?: string
  }

  const { title, description } = Astro.props
  ---
  ```

- Destructure `Astro.props` directly, not from variable
- Use `class:list` for conditional classes
- Client-side scripts use `<script define:vars={{}}>` pattern

### TypeScript

- Strict mode enabled (`extends: "astro/tsconfigs/strict"`)
- Use type exports for reusable types
- Arrow function syntax preferred
- No explicit return types for simple functions (inference)

### Naming Conventions

- **Components**: PascalCase (`Header.astro`, `BaseLayout.astro`)
- **Functions/Variables**: camelCase (`formatDate`, `navItems`)
- **Types/Interfaces**: PascalCase (`Props`, `CollectionEntry`)

### Styling

- Tailwind CSS with Tailwind Typography plugin
- Dark mode using `dark:` prefix (automatic class-based)
- **Terminal theme colors**:
  - Green accent: `#22c55e` (dark), `#16a34a` (light)
  - Background: `#0a0a0a` (dark), `#ffffff` (light)
  - Text: Neutral grays (neutral-100 to neutral-900)
- Monospace font (`font-mono`) for UI elements
- JetBrains Mono font for code/terminal aesthetics
- Transition classes on hover states

### Content Collections

Blog posts are Markdown files in `src/content/post/` with frontmatter:

```yaml
---
title: 'Post Title'
subtitle: 'Brief description'
date: 'YYYY-MM-DD'
tags: ['tag1', 'tag2']
---
```

Use `getCollection('post')` to fetch all posts. Routes use `getStaticPaths()` for dynamic pages.

### Error Handling

- Use `isNaN(d.getTime())` for date validation
- No explicit try-catch in current codebase
- Default values in Props destructuring for safety

### Astro Patterns

- Current path: `Astro.url.pathname`
- Site URL: `Astro.site`
- Content rendering: `const { Content } = await post.render()`
- Date formatting: `Intl.DateTimeFormat('en-US', {...})`
- URL construction: `new URL(path, Astro.site)` for absolute URLs

### Blog Post Specifics

- Reading time: 200 words per minute calculation
- Date formats use `en-US` locale consistently
- Post slug: `post.slug` from CollectionEntry
- Frontmatter access: `post.data.title`, `post.data.date`, etc.
- Body content: `post.body` for reading time calculation

### Content Collection Types

- Blog posts are of type `CollectionEntry<'post'>`
- Import: `import type { CollectionEntry } from 'astro:content'`
- Access typed data via `post.data` with inferred types

### ESLint

- Extends: `next`, `prettier`, `plugin:tailwindcss/recommended`
- Run `pnpm lint` to check code

## File Structure

- `src/pages/` - Astro pages (index.astro, about.astro, blog/index.astro, blog/post/[slug].astro)
- `src/components/` - Reusable UI components
- `src/layouts/` - Layout components (BaseLayout.astro)
- `src/content/post/` - Markdown blog posts
- `src/styles/` - Global CSS with Tailwind
- `src/utils/` - Utility functions
- `public/` - Static assets

## Deployment

- **Static site**: Built as static HTML/CSS/JS
- **Adapter**: Vercel adapter configured
- **Build output**: `dist/` directory
- **Sitemap**: Auto-generated via @astrojs/sitemap integration
