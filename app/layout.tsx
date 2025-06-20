import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Alp Altug - Software Developer',
    template: '%s | Alp Altug',
  },
  description: 'Software developer based in Seattle, WA. Explore my projects and learn about my journey in web development.',
  openGraph: {
    title: 'Alp Altug - Software Developer',
    description: 'Software developer based in Seattle, WA. Explore my projects and learn about my journey in web development.',
    url: baseUrl,
    siteName: 'Alp Altug Portfolio',
    locale: 'en_US',
    type: 'website',
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

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <main className="flex-auto min-w-0 mt-6 flex flex-col">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  )
}
