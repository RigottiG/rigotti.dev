import Link from 'next/link'
import { ImLinkedin, ImGithub } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'
import { TfiEmail } from 'react-icons/tfi'

export function Footer() {
  return (
    <footer className="container mx-auto mb-4 flex flex-col items-center space-y-5">
      <ul className="flex gap-5">
        <li>
          <Link href="https://linkedin.com/in/rigottig">
            <ImLinkedin className="duration-200 hover:scale-110" size={22} />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/rigottig">
            <ImGithub className="duration-200 hover:scale-110" size={22} />
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com/rigottig">
            <SiInstagram className="duration-200 hover:scale-110" size={22} />
          </Link>
        </li>
        <li>
          <Link type="email" href="mailto:ggrigoti@gmail.com">
            <TfiEmail className="duration-200 hover:scale-110" size={23} />
          </Link>
        </li>
      </ul>
      <p className="text-xs text-gray-400">
        &copy; Guilherme Rigotti - {new Date().getFullYear()}
      </p>
    </footer>
  )
}
