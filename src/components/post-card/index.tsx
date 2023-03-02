import Link from 'next/link'
import { FaReact } from 'react-icons/fa'

export function PostCard() {
  return (
    <Link
      href="/"
      className="flex w-full flex-col items-center gap-y-2 rounded-md border-2 border-black py-2 shadow-[3px_3px_0px_#000] duration-200 hover:shadow-[0px_5px_0px_#000]"
    >
      <FaReact size={38} />
      <h5 className="font-semibold">This is a initial title</h5>
      <span className="inline-block">Published on March 3, 2023</span>
      <span className="inline-block">#tags #tags</span>
    </Link>
  )
}
