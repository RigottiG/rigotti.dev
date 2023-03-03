import { PostCard } from '@/components/post-card'
import { getPostsMetadata } from '@/services/posts'

export default function BlogPage() {
  const posts = getPostsMetadata()

  return (
    <main className="mx-auto mb-6 max-w-4xl">
      <div className="mb-10 space-y-2 text-center">
        <h1 className="text-center text-3xl font-semibold">📚 Blog </h1>
        <span className="block">collection of all my blog posts</span>
        <span className="block text-slate-200">
          currently has {posts.length} posts
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  )
}
