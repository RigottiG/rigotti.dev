import { ImLinkedin, ImGithub } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'
import { TfiEmail } from 'react-icons/tfi'
export function Footer() {
  return (
    <footer className="container mx-auto flex flex-col items-center gap-5">
      <div className="flex gap-5">
        <ImLinkedin />
        <ImGithub />
        <SiInstagram />
        <TfiEmail />
      </div>
      <p className="text-xs text-gray-400">
        &copy; Guilherme Rigotti - {new Date().getFullYear()}
      </p>
    </footer>
  )
}
