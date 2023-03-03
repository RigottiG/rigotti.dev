import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Guilherme Rigotti',
  description: 'My contact page, feel free to contact me.',
}

export default function ContactPage() {
  return (
    <main className="mb-[23rem] mt-[16rem] flex flex-col items-center justify-center space-y-4 text-center">
      <h1 className="font-mono text-3xl font-medium">👋 Let&apos;s talk</h1>
      <p className="font-mono text-2xl font-medium">
        Feel free to reach out to me via email at{' '}
      </p>
      <a
        href="mailto:ggrigotti@gmail.com"
        className="font-mono text-3xl font-medium underline"
      >
        ✉️ ggrigotti@gmail.com
      </a>
    </main>
  )
}
