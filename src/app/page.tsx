import Image from 'next/image'
export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl font-mono">
      <div className="grid grid-cols-1 place-content-center items-center gap-8 md:grid-cols-2">
        <Image
          src="https://www.github.com/rigottig.png"
          width={280}
          height={280}
          alt="My profile photo from GitHub"
          className="place-self-center"
        />
        <div className="space-y-4">
          <h2 className="text-center text-2xl font-semibold leading-9">
            👋 Hey, I&apos;m Guilherme Rigotti also known as{' '}
            <a
              className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
              href="https://www.github.com.br/rigottig"
            >
              @rigottig
            </a>
          </h2>
          <p className="text-center font-medium">
            I&apos;m a <strong>Software Engineer</strong> from{' '}
            <strong>Brazil</strong> 🇧🇷
          </p>
        </div>
      </div>
    </main>
  )
}
