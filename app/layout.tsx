import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://aisearches.us'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AISearches | Best AI Tools Directory 2026',
    template: '%s | AISearches',
  },
  description:
    'Discover the best AI tools for writing, coding, image generation, video, audio, and more. Compare features, pricing, and reviews across 120+ tools.',
  keywords: [
    'AI tools', 'best AI tools', 'AI tools directory', 'artificial intelligence tools',
    'AI software', 'ChatGPT alternatives', 'AI writing tools', 'AI image generator',
    'AI coding assistant', 'AI video generator', 'free AI tools', 'AI tools comparison',
  ],
  authors: [{ name: 'AISearches', url: BASE_URL }],
  creator: 'AISearches',
  publisher: 'AISearches',
  icons: {
    icon: '/logo-icon.svg',
    shortcut: '/logo-icon.svg',
    apple: '/logo-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'AISearches',
    title: 'AISearches | Best AI Tools Directory 2026',
    description:
      'Discover and compare 120+ AI tools for writing, coding, image generation, video, audio, and more.',
    images: [{ url: '/logo-icon.svg', width: 512, height: 512, alt: 'AISearches Logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'AISearches | Best AI Tools Directory 2026',
    description: 'Discover and compare 120+ AI tools for writing, coding, image generation, video, and more.',
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
  alternates: {
    canonical: BASE_URL,
  },
  other: {
    'impact-site-verification': 'f911808d-e7f5-41e4-9df2-cfd9c1f1463f',
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
        <Script
          src="https://pl29205418.profitablecpmratenetwork.com/66/03/71/660371d29d6dd464e2f1a309775de10e.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
