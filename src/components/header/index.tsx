import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto flex flex-col items-center pt-4 pb-8">
      <nav className="space-x-3">
        <Link
          className="rounded-t-md px-2 duration-200 hover:text-white hover:shadow-[0px_-25px_0px_inset_#000]"
          href="/"
        >
          Home
        </Link>
        <span>|</span>
        <Link
          className="rounded-t-md px-2 duration-200 hover:text-white hover:shadow-[0px_-25px_0px_inset_#000]"
          href="/blog"
        >
          Blog
        </Link>
        <span>|</span>
        <Link
          className="rounded-t-md px-2 duration-200 hover:text-white hover:shadow-[0px_-25px_0px_inset_#000]"
          href="/about"
        >
          About
        </Link>
        <span>|</span>
        <Link
          className="rounded-t-md px-2 duration-200 hover:text-white hover:shadow-[0px_-25px_0px_inset_#000]"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
