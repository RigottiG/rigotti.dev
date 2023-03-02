import Image from 'next/image'
import Link from 'next/link'
import { FaReact } from 'react-icons/fa'

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

      <div className="mt-4 md:mt-14 md:pl-10">
        <h3 className="mb-4 text-2xl font-semibold md:mb-8">✨ Latest posts</h3>
        <Link
          href="/"
          className="flex w-full flex-col items-center gap-y-2 rounded-md border-2 border-black py-2 shadow-[3px_3px_0px_#000] duration-200 hover:shadow-[0px_5px_0px_#000]"
        >
          <FaReact size={38} />
          <h5 className="font-semibold">This is a initial title</h5>
          <span className="inline-block">Published on March 3, 2023</span>
          <span className="inline-block">#tags #tags</span>
        </Link>
      </div>
    </main>
  )
}
