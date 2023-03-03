import Link from 'next/link'
import { ImLinkedin, ImGithub } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'
import { TfiEmail } from 'react-icons/tfi'

export function Footer() {
  return (
    <footer className="sticky top-[100vh]  mb-4 flex flex-col items-center space-y-5">
      <ul className="flex gap-5">
        <li>
          <Link
            title="Linkedin"
            aria-label="Linkedin"
            href="https://linkedin.com/in/rigottig"
          >
            <ImLinkedin className="duration-200 hover:scale-110" size={22} />
          </Link>
        </li>
        <li>
          <Link
            aria-label="Github"
            title="Github"
            href="https://github.com/rigottig"
          >
            <ImGithub className="duration-200 hover:scale-110" size={22} />
          </Link>
        </li>
        <li>
          <Link
            title="Instagram"
            aria-label="Instagram"
            href="https://instagram.com/rigottig"
          >
            <SiInstagram className="duration-200 hover:scale-110" size={22} />
          </Link>
        </li>
        <li>
          <Link
            title="Email"
            aria-label="email"
            type="email"
            href="mailto:ggrigoti@gmail.com"
          >
            <TfiEmail className="duration-200 hover:scale-110" size={23} />
          </Link>
        </li>
      </ul>
      <p className="text-xs text-gray-600">
        &copy; Guilherme Rigotti - {new Date().getFullYear()}
      </p>
    </footer>
  )
}
