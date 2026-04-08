# AGENTS.md

## Commands

```bash
pnpm dev          # Astro dev server
pnpm build        # astro check && astro build — typecheck is built-in, no separate step needed
pnpm preview      # Preview production build
pnpm lint         # ESLint
npx prettier --write .  # Format (no pnpm script defined)
```

No tests exist in this project. No test runner is configured.

## Stack & Build

- **Astro 5** with `output: 'static'` (SSG), deployed to Vercel
- **Tailwind v4** via `@tailwindcss/vite` plugin in `astro.config.mjs` (not `@astrojs/tailwind`)
- **Node 24** (`.nvmrc`)
- MDX support enabled alongside Markdown
- RSS feed at `/rss.xml` via `@astrojs/rss`
- `ClientRouter` from `astro:transitions` enabled globally (View Transitions API)

## Content Collections

Blog posts use the **Astro 5 `content.config.ts`** pattern (at `src/content.config.ts`, not the old `src/content/config.ts`):

```ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const post = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/post' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
  }),
})
```

Posts live in `src/content/post/*.md`. Only `.md` is globbed (not `.mdx`).

## Styling Gotchas

- **Dark mode is class-based**, not media query: `@custom-variant dark (&:where(.dark, .dark *))` in `src/styles/global.css`
- **Theme toggle** uses `ThemeScript` (inline `<head>` script to prevent flash of wrong theme) + `ThemeToggle` (UI button). Don't replace with `prefers-color-scheme` — the toggle stores preference in `localStorage`
- Terminal theme colors are CSS custom properties (`--terminal-bg`, `--terminal-accent`, etc.) in `global.css`, not Tailwind config
- `prettier-plugin-tailwindcss` auto-sorts Tailwind classes on format
- Prose/blog styling is hand-written in `global.css` (`.prose` class), not relying on `@tailwindcss/typography` defaults

## Code Style

- No semicolons, single quotes, 2-space indent (Prettier enforced)
- `@/*` path alias maps to `./src/*`
- **Markdown frontmatter uses double quotes** for string values (differs from JS/TS single-quote rule — don't "fix" these)
- ESLint extends `eslint:recommended` + `plugin:astro/recommended` + `plugin:tailwindcss/recommended`

## Architecture

All pages share `BaseLayout.astro` which wraps content in a macOS terminal UI (traffic-light dots, path bar in header, `JetBrains Mono` font). Key directories:

- `src/pages/` - routes including `blog/post/[slug].astro` and `blog/tag/[tag].astro`
- `src/pages/404.astro` - custom error page
- `src/components/` - `Header`, `Footer`, `ThemeToggle`, `ThemeScript`, `Typewriter`, `Schema`
- `src/utils/date.ts` - `formatDate()` and `calculateReadingTime()` utilities
- `src/styles/global.css` - all custom CSS (Tailwind base, terminal theme, prose styles)
- `public/` - static assets, favicons, OG image

## Dev Workflow Notes

- Dynamic blog routes (`[slug].astro`) use `getStaticPaths()` — new posts require a dev server restart or rebuild to appear in dynamic routes
- `sharp` is available as a dependency for image optimization via Astro's `<Image>` component
