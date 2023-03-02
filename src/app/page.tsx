import { Post, PostCard } from '@/components/post-card'
import Image from 'next/image'
import fs from 'fs'
import matter from 'gray-matter'

export default async function Home() {
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

  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
    )
  })

  const latestPosts = sortedPosts.slice(0, 3)

  return (
    <main className="mx-auto mb-8 w-full max-w-4xl font-mono">
      <div className="grid grid-cols-1 place-content-center items-center gap-8 border-b pb-4 md:grid-cols-2 md:border-none md:pb-0">
        <Image
          src="https://www.github.com/rigottig.png"
          width={280}
          height={280}
          alt="My profile photo from GitHub"
          className="place-self-center object-cover md:place-self-auto"
        />
        <div className="space-y-4">
          <h1 className="mx-auto max-w-sm text-center text-2xl font-semibold leading-9 md:max-w-md">
            <span className="hidden md:inline-block">👋</span> Hey, I&apos;m
            Guilherme Rigotti <br /> also known as{' '}
            <a
              className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
              href="https://www.github.com.br/rigottig"
            >
              @rigottig
            </a>
          </h1>
          <p className="text-center text-lg font-medium">
            I&apos;m a <strong>Software Engineer</strong> from{' '}
            <strong>Brazil</strong> 🇧🇷
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-6 md:mt-14 md:pl-10">
        <h3 className="mb-4 text-2xl font-semibold md:mb-8">✨ Latest posts</h3>
        {latestPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}
