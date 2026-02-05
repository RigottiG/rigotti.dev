import { defineCollection, z } from 'astro:content'

// Define the schema for blog posts
const post = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
})

// Export a single `collections` object to register your collection(s)
export const collections = { post }
