/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Montserrat, Open_Sans } from 'next/font/google'

import '@/styles/global.css'

export const metadata = {
  title: 'Guilherme Rigotti',
  description: 'My personal website',
}

const open_sans = Open_Sans({
  variable: '--font-open-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${open_sans.variable}`}>
      <body>
        <div className="container grid grid-rows-layout px-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
