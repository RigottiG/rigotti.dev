import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const post = defineCollection({
  loader: glob({ base: './src/content/post', pattern: '**/*.md' }),
  schema: z.object({
    date: z.coerce.date(),
    subtitle: z.string(),
    tags: z.array(z.string()),
    title: z.string(),
  }),
})

export const collections = { post }
