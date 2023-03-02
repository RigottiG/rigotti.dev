import { PostCard } from '@/components/post-card'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl font-mono">
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
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </main>
  )
}
