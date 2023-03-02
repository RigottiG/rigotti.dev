import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import { formatDate } from '@/utils/date'

type PostPageProps = {
  params: {
    slug: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params
  const fileName = `${slug}.md`
  const filePath = path.join(process.cwd(), 'posts', fileName)
  const file = fs.readFileSync(filePath, 'utf-8')
  const {
    data: { date, title, subtitle },
    content,
  } = matter(file)

  return (
    <article className="mx-auto mb-8 max-w-prose">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl text-slate-600">{title}</h1>
        <p className="text-slate-600">{subtitle}</p>
        <p className="text-sm text-slate-400">{formatDate(new Date(date))}</p>
      </div>

      <div className="prose relative">
        <Markdown>{content}</Markdown>
      </div>
    </article>
  )
}
