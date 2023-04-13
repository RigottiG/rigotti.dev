import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto flex flex-col items-center pb-8 pt-4">
      <nav className="space-x-3">
        <Link className="duration-200 hover:text-gray-700" href="/">
          Home
        </Link>
        <span>|</span>
        <Link className="duration-200 hover:text-gray-700" href="/blog">
          Blog
        </Link>
        <span>|</span>
        <Link className="duration-200 hover:text-gray-700" href="/about">
          About
        </Link>
        <span>|</span>
        <Link className="duration-200 hover:text-gray-700" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}
