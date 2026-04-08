import type { APIContext } from 'astro'

import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context: APIContext) {
  const posts = await getCollection('post')
  const sortedPosts = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  )

  return rss({
    customData: `<language>en-us</language>`,
    description:
      'Thoughts and tutorials about software development, frontend engineering, and system design.',
    items: sortedPosts.map((post) => ({
      description: post.data.subtitle ?? '',
      link: `/blog/post/${post.id.replace(/\.md$/, '')}/`,
      pubDate: new Date(post.data.date),
      title: post.data.title,
    })),
    site: context.site ?? 'https://rigotti.dev',
    title: 'Guilherme Rigotti - Blog',
  })
}
