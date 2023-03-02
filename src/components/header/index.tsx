import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto flex flex-col items-center">
      <nav className="space-x-2">
        <Link className="duration-200 hover:text-blue-600" href="/">
          Home
        </Link>
        <span>|</span>
        <Link className="duration-200 hover:text-blue-600" href="/blog">
          Blog
        </Link>
        <span>|</span>
        <Link className="duration-200 hover:text-blue-600" href="/about">
          About
        </Link>
        <span>|</span>
        <Link className="duration-200 hover:text-blue-600" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}
