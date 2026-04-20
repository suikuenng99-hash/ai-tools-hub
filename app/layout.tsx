import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'AI Tools Hub | Best AI Tools Directory 2025',
    template: '%s | AI Tools Hub',
  },
  description:
    'Discover the best AI tools for writing, coding, image generation, video, audio, and more. Compare features, pricing, and reviews.',
  keywords: ['AI tools', 'artificial intelligence', 'ChatGPT', 'Midjourney', 'AI directory', 'best AI tools'],
  authors: [{ name: 'AIToolsHub' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AI Tools Hub',
    title: 'AI Tools Hub | Best AI Tools Directory 2025',
    description:
      'Discover the best AI tools for writing, coding, image generation, video, audio, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Hub | Best AI Tools Directory 2025',
    description: 'Discover the best AI tools for writing, coding, image generation, video, audio, and more.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Google AdSense - uncomment after approval
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  )
}
