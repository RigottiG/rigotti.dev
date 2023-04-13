import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react";

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
        <div className="container mx-auto min-h-screen gap-10 px-4 md:gap-20">
          <Header />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
