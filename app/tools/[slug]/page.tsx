import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllSlugs, getToolBySlug, getRelatedTools } from '@/lib/tools'
import { getCategoryMeta } from '@/lib/categories'
import Badge from '@/components/ui/Badge'
import RatingStars from '@/components/ui/RatingStars'
import ProsConsList from '@/components/tools/ProsConsList'
import RelatedTools from '@/components/tools/RelatedTools'
import AdRectangle from '@/components/ads/AdRectangle'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) return {}

  const title = tool.metaTitle ?? `${tool.name} Review & Pricing (${new Date().getFullYear()})`
  const description = tool.metaDescription ?? tool.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
    alternates: {
      canonical: `/tools/${slug}`,
    },
  }
}

const pricingModelLabel: Record<string, string> = {
  free: 'Free',
  freemium: 'Freemium',
  paid: 'Paid',
  'open-source': 'Open Source',
}

export default async function ToolDetailPage({ params }: Props) {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  if (!tool) notFound()

  const related = getRelatedTools(tool, 3)
  const categoryMeta = getCategoryMeta(tool.category)

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: tool.pricing.model === 'free' || tool.pricing.model === 'open-source' ? '0' : tool.pricing.startingPrice ?? '0',
      priceCurrency: 'USD',
    },
    ...(tool.reviewCount
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: tool.rating,
            ratingCount: tool.reviewCount,
            bestRating: 5,
          },
        }
      : {}),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
          <span>/</span>
          {categoryMeta && (
            <>
              <Link href={`/category/${tool.category}`} className="hover:text-violet-600 transition-colors">
                {categoryMeta.label}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-gray-900 font-medium">{tool.name}</span>
        </nav>

        {/* Hero */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {/* Logo placeholder */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 text-3xl font-bold text-violet-600 border border-violet-100">
              {tool.name.charAt(0)}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{tool.name}</h1>
                <Badge category={tool.category} />
                {tool.isSponsored && (
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                    Sponsored
                  </span>
                )}
              </div>
              <p className="mt-2 text-base text-gray-600">{tool.tagline}</p>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <RatingStars rating={tool.rating} reviewCount={tool.reviewCount} size="md" />
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                  {pricingModelLabel[tool.pricing.model]}
                  {tool.pricing.startingPrice ? ` · from ${tool.pricing.startingPrice}` : ''}
                </span>
                {tool.pricing.hasFreeTrialDays && (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    {tool.pricing.hasFreeTrialDays}-day free trial
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`/go/${tool.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 transition-colors"
            >
              Visit {tool.name} →
            </a>
            <a
              href={tool.websiteUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Official Website
            </a>
          </div>
        </div>

        {/* Ad */}
        <div className="mt-8">
          <AdRectangle />
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="mb-3 text-xl font-bold text-gray-900">About {tool.name}</h2>
          <p className="text-gray-600 leading-relaxed">
            {tool.longDescription ?? tool.description}
          </p>
        </div>

        {/* Features */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Key Features</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {tool.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                <svg className="h-4 w-4 shrink-0 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Pros & Cons */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Pros & Cons</h2>
          <ProsConsList pros={tool.pros} cons={tool.cons} />
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900">Ready to try {tool.name}?</h3>
          <p className="mt-2 text-sm text-gray-600">
            {tool.pricing.model === 'free' || tool.pricing.model === 'open-source'
              ? 'It\'s completely free to get started.'
              : tool.pricing.hasFreeTrialDays
              ? `Start your ${tool.pricing.hasFreeTrialDays}-day free trial today.`
              : `Plans start from ${tool.pricing.startingPrice ?? 'varies'}.`}
          </p>
          <a
            href={`/go/${tool.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 transition-colors"
          >
            Get Started with {tool.name}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Related tools */}
        <RelatedTools tools={related} categoryLabel={categoryMeta?.label ?? tool.category} />
      </div>
    </>
  )
}
