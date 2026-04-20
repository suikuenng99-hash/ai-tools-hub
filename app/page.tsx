import type { Metadata } from 'next'
import { getAllTools, getFeaturedTools, getToolCountByCategory } from '@/lib/tools'
import { categories } from '@/lib/categories'
import FeaturedTools from '@/components/home/FeaturedTools'
import ToolGrid from '@/components/home/ToolGrid'
import AdLeaderboard from '@/components/ads/AdLeaderboard'
import AdNative from '@/components/ads/AdNative'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://aisearches.us'

export const metadata: Metadata = {
  title: 'AISearches | Find the Best AI Tools for Any Task (2026)',
  description:
    'Browse and compare 120+ reviewed AI tools across writing, coding, image generation, video, audio, productivity, SEO, and more. Find what actually works.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const allTools = getAllTools()
  const featuredTools = getFeaturedTools()
  const countByCategory = getToolCountByCategory()

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AISearches',
    url: BASE_URL,
    logo: `${BASE_URL}/logo-icon.svg`,
    description: 'AI tools directory helping you find the best AI software for any task.',
  }

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AISearches',
    url: BASE_URL,
    description: `Browse and compare ${allTools.length}+ reviewed AI tools across writing, coding, image generation, video, audio, and more.`,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const jsonLdCollection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best AI Tools Directory',
    description: `Curated directory of ${allTools.length}+ AI tools across ${categories.length} categories.`,
    url: BASE_URL,
    numberOfItems: allTools.length,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLdOrg, jsonLdWebSite, jsonLdCollection]) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-violet-50 to-white py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            {allTools.length}+ AI tools and counting
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Find the{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Best AI Tools
            </span>{' '}
            for Any Task
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Browse {allTools.length}+ reviewed AI tools across writing, coding, image generation, video, and more.
            Compare features, pricing, and find what actually works.
          </p>
          <a
            href="#tools"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-violet-700 transition-colors"
          >
            Browse All Tools
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Category strip */}
      <section className="border-b border-gray-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => {
              const count = countByCategory[cat.slug] ?? 0
              return (
                <a
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="flex shrink-0 flex-col items-center gap-1 rounded-xl border border-gray-100 bg-gray-50 px-5 py-3 hover:border-violet-200 hover:bg-violet-50 transition-colors group"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-violet-700 transition-colors">
                    {cat.label}
                  </span>
                  <span className="text-xs text-gray-400">{count} tools</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leaderboard ad — below hero */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <AdLeaderboard />
      </div>

      {/* Featured tools */}
      <FeaturedTools tools={featuredTools} />

      {/* Tool grid with search + filter */}
      <ToolGrid tools={allTools} />

      {/* Native ad — below tool grid */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <AdNative />
      </div>
    </>
  )
}
