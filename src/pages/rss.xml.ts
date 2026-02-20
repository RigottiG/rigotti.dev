import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const posts = await getCollection('post')
  const sortedPosts = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  )

  return rss({
    title: 'Guilherme Rigotti - Blog',
    description:
      'Thoughts and tutorials about software development, frontend engineering, and system design.',
    site: context.site ?? 'https://rigotti.dev',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.subtitle ?? '',
      link: `/blog/post/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}
