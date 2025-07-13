import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dinesh Kumar S - Full Stack Developer',
  description: 'Portfolio of Dinesh Kumar S - Highly skilled full stack developer with expertise in React, Node.js, and modern web technologies.',
  keywords: 'Full Stack Developer, React, Node.js, JavaScript, TypeScript, Portfolio, Web Developer',
  authors: [{ name: 'Dinesh Kumar S' }],
  creator: 'Dinesh Kumar S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dineshkumar.dev',
    title: 'Dinesh Kumar S - Full Stack Developer',
    description: 'Portfolio of Dinesh Kumar S - Highly skilled full stack developer with expertise in React, Node.js, and modern web technologies.',
    siteName: 'Dinesh Kumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinesh Kumar S - Full Stack Developer',
    description: 'Portfolio of Dinesh Kumar S - Highly skilled full stack developer with expertise in React, Node.js, and modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-accent-black via-accent-black-light to-accent-black-medium">
          {children}
        </div>
      </body>
    </html>
  )
}
