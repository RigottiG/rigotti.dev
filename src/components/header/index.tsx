import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto flex flex-col items-center pt-4 pb-8">
      <nav className="space-x-4">
        <Link
          className="duration-200 hover:shadow-[0px_-25px_0px_inset_#0ea5e9]"
          href="/"
        >
          Home
        </Link>
        <span>|</span>
        <Link
          className="duration-200 hover:shadow-[0px_-25px_0px_inset_#0ea5e9]"
          href="/blog"
        >
          Blog
        </Link>
        <span>|</span>
        <Link
          className="duration-200 hover:shadow-[0px_-25px_0px_inset_#0ea5e9]"
          href="/about"
        >
          About
        </Link>
        <span>|</span>
        <Link
          className="duration-200 hover:shadow-[0px_-25px_0px_inset_#0ea5e9]"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
