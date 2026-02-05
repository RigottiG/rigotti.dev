import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://rigotti.dev',
  integrations: [
    tailwind({
      applyInputStylesToLayout: false,
    }),
    sitemap(),
    mdx(),
  ],
  output: 'static',
  adapter: vercel(),
})
