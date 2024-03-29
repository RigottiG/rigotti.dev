import { formatDate } from '@/utils/date'
import Link from 'next/link'

export type Post = {
  slug: string
  frontmatter: {
    title: string
    tags: string[]
    date: string
    subtitle: string
  }
}

type PostCardProps = {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const {
    frontmatter: { title, tags, date, subtitle },
    slug,
  } = post

  return (
    <Link
      href={`/blog/post/${slug}`}
      className="flex w-full flex-col items-center gap-y-2 rounded-md border-2 border-black p-2 text-center shadow-[3px_3px_0px_#000] duration-200 hover:shadow-[0px_5px_0px_#000]"
    >
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm">{subtitle}</p>
      <span className="inline-block text-sm">
        Published on {formatDate(new Date(date))}
      </span>
      <div className="inline-block space-x-2">
        {tags?.map((tag) => (
          <span className="text-xs text-blue-600" key={tag}>
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
