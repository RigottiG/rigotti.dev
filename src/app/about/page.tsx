import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNeovim,
  SiTailwindcss,
  SiGo,
  SiJest,
  SiRust,
} from 'react-icons/si'

export default function AboutPage() {
  return (
    <main className="mx-auto mb-[18rem] mt-4 max-w-prose">
      <p className="mb-2 text-sm leading-6">
        My name is <strong>Guilherme Rigotti</strong>, 23. I&apos;m a{' '}
        <strong>software engineer</strong> from Brazil 🇧🇷, currently living in
        Rio Grande do Sul. I specialize in frontend technologies and have about
        5 years of experience in software development.
      </p>
      <p className="mb-2 text-sm leading-6">
        As a software engineer, I&apos;m passionate about technology and
        software development. I&apos;ve been interested in this field since I
        was young, and I&apos;ve honed my skills over the years.
      </p>
      <p className="mb-8 text-sm leading-6">
        I&apos;ve worked on various software projects and have a strong track
        record of delivering high-quality work that meets the needs and
        expectations of clients. I&apos;m always looking for new challenges and
        opportunities to learn and grow in my field. For me, software
        development is not just a job, but a passion. I enjoy working with
        cutting-edge technologies and developing innovative solutions to complex
        problems.
      </p>

      <div className="mb-8">
        <h3 className="font-semibold">I&apos;m enthusiastic about:</h3>
        <ul className="mt-4 flex space-x-6 ">
          <li>
            <SiReact size={22} />
          </li>
          <li>
            <SiTypescript size={22} />
          </li>
          <li>
            <SiNextdotjs size={22} />
          </li>
          <li>
            <SiTailwindcss size={22} />
          </li>
          <li>
            <SiNeovim size={22} />
          </li>
          <li>
            <SiGo size={24} />
          </li>
          <li>
            <SiJest size={22} />
          </li>
          <li>
            <SiRust size={22} />
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Work history</h3>
        <ul className="mt-4 space-y-1">
          <li className="text-sm leading-6">
            <a
              href="https://www.cwi.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="">
                <strong className="text-blue-600 underline duration-200 visited:text-purple-600 hover:text-blue-800">
                  CWI Software
                </strong>{' '}
                Frontend developer, 2019 - present
              </span>
            </a>
          </li>

          <li className="text-sm leading-6">
            <a
              href="https://www.mavetecnologia.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="">
                <strong className="text-blue-600 underline duration-200 visited:text-purple-600 hover:text-blue-800">
                  Mave Tecnologia
                </strong>{' '}
                Fullstack developer, 2018 - 2019
              </span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}
