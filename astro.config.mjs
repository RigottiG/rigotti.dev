import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  adapter: vercel(),
  integrations: [sitemap(), mdx()],
  output: 'static',
  site: 'https://rigotti.dev',
  vite: {
    plugins: [tailwindcss()],
  },
})
