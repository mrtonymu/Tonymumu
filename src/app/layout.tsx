import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Preloader from '@/components/animations/Preloader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tony Mumu - Full-Stack Developer & Tech Consultant',
  description: 'Professional full-stack development services based in Kuala Lumpur, Malaysia. Building solid web solutions from frontend to backend. Specializing in system architecture, tech consulting, and project management.',
  keywords: 'full-stack developer, web development, system architecture, tech consulting, Tony Mumu, Malaysia developer, Kuala Lumpur developer, React, Node.js, Next.js',
  authors: [{ name: 'Tony Mumu' }],
  openGraph: {
    title: 'Tony Mumu - Full-Stack Developer & Tech Consultant',
    description: 'Professional full-stack development services based in Kuala Lumpur, Malaysia. Building solid web solutions that actually work.',
    type: 'website',
    locale: 'en_MY',
    url: 'https://tonymumu.vercel.app',
    siteName: 'Tony Mumu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tony Mumu - Full-Stack Developer & Tech Consultant',
    description: 'Professional full-stack development services based in Kuala Lumpur, Malaysia. Building solid web solutions that actually work.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-MY">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.link" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={inter.className}>
        <Preloader />
        {children}
      </body>
    </html>
  )
}