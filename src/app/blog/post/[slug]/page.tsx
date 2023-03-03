import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import { formatDate } from '@/utils/date'
import { Metadata } from 'next'

type PostPageProps = {
  params: {
    slug: string
  }
}

function getPostContent(slug: string) {
  const fileName = `${slug}.md`
  const filePath = path.join(process.cwd(), 'posts', fileName)
  const file = fs.readFileSync(filePath, 'utf-8')

  return matter(file)
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const {
    data: { title, subtitle },
  } = getPostContent(params.slug)

  return { title, description: subtitle }
}

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params
  const {
    data: { date, title, subtitle },
    content,
  } = getPostContent(slug)

  return (
    <article className="mx-auto mb-8 max-w-prose">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl">{title}</h1>
        <p>{subtitle}</p>
        <p className="text-sm">{formatDate(new Date(date))}</p>
      </div>

      <div className="prose relative">
        <Markdown>{content}</Markdown>
      </div>
    </article>
  )
}
