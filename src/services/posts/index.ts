import { Post } from '@/components/post-card'
import fs from 'fs'
import matter from 'gray-matter'

export function getPostsMetadata(): Post[] {
  const files = fs.readdirSync(`${process.cwd()}/posts`)

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(
      `${process.cwd()}/posts/${filename}`,
      'utf-8',
    )
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    } as Post
  })

  return posts
}
