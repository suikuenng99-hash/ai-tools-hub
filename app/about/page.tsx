import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllTools, getAllCategories } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'About AISearches',
  description: 'Learn about AISearches — the AI tools directory helping you find the best AI software.',
}

export default function AboutPage() {
  const toolCount = getAllTools().length
  const categoryCount = getAllCategories().length

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900">About AISearches</h1>

      <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
        <p className="text-lg">
          AISearches is an independent directory of the best AI tools available today. We research, review, and
          compare {toolCount}+ AI tools across {categoryCount} categories to help developers, marketers, creators, and
          businesses find the right AI software for their needs.
        </p>

        <h2 className="text-xl font-bold text-gray-900">What we do</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Review and rate AI tools based on features, pricing, and real-world usefulness</li>
          <li>Keep pricing and feature information up to date</li>
          <li>Compare tools across categories so you can make informed decisions</li>
          <li>Surface the best free and paid options for every budget</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">How we make money</h2>
        <p>
          AISearches is free to use. We earn revenue through affiliate commissions when readers click through to a
          tool and make a purchase. This is disclosed on every page. Our editorial recommendations are independent —
          a tool's affiliate program does not influence its rating or placement.
          See our <Link href="/affiliate-disclosure" className="text-violet-600 hover:underline">Affiliate Disclosure</Link> for full details.
        </p>

      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-700 transition-colors"
        >
          Browse AI Tools
        </Link>
      </div>
    </div>
  )
}
