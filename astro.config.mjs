import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://rigotti.dev',
  integrations: [sitemap(), mdx()],
  output: 'static',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
})
