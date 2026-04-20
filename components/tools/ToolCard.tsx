'use client'

import Link from 'next/link'
import type { Tool } from '@/types/tool'
import Badge from '@/components/ui/Badge'
import RatingStars from '@/components/ui/RatingStars'

interface ToolCardProps {
  tool: Tool
}

const pricingLabel: Record<string, { label: string; className: string }> = {
  free: { label: 'Free', className: 'bg-green-100 text-green-700' },
  freemium: { label: 'Freemium', className: 'bg-blue-100 text-blue-700' },
  paid: { label: 'Paid', className: 'bg-gray-100 text-gray-700' },
  'open-source': { label: 'Open Source', className: 'bg-purple-100 text-purple-700' },
}

export default function ToolCard({ tool }: ToolCardProps) {
  const pricing = pricingLabel[tool.pricing.model] ?? pricingLabel.paid

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className={`group relative flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        tool.isFeatured ? 'border-amber-200 ring-1 ring-amber-200' : 'border-gray-200'
      }`}
    >
      {/* Featured / Sponsored badge */}
      {(tool.isFeatured || tool.isSponsored) && (
        <span className="absolute right-3 top-3 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
          {tool.isSponsored ? 'Sponsored' : 'Featured'}
        </span>
      )}

      {/* Header: logo + name */}
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-2xl font-bold text-gray-400 overflow-hidden border border-gray-100">
          {/* Fallback initials if no logo */}
          {tool.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
            {tool.name}
          </h3>
          <Badge category={tool.category} className="mt-0.5" />
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-3 line-clamp-2 text-sm text-gray-500">{tool.tagline}</p>

      {/* Footer: rating + pricing + CTA */}
      <div className="mt-4 flex items-center justify-between">
        <RatingStars rating={tool.rating} reviewCount={tool.reviewCount} />
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${pricing.className}`}>
          {tool.pricing.startingPrice ? `From ${tool.pricing.startingPrice}` : pricing.label}
        </span>
      </div>

      {/* Visit CTA */}
      <a
        href={`/go/${tool.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="mt-4 block w-full rounded-lg bg-violet-600 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-violet-700"
      >
        Visit {tool.name}
      </a>
    </Link>
  )
}
