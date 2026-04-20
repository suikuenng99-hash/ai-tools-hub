'use client'

import { useState, useMemo } from 'react'
import type { Tool, ToolCategory } from '@/types/tool'
import { categories } from '@/lib/categories'
import ToolCard from '@/components/tools/ToolCard'
import SearchInput from '@/components/ui/SearchInput'

interface ToolGridProps {
  tools: Tool[]
}

export default function ToolGrid({ tools }: ToolGridProps) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'all'>('all')
  const [showAll, setShowAll] = useState(false)

  const PAGE_SIZE = 12

  const filtered = useMemo(() => {
    let result = tools
    if (activeCategory !== 'all') {
      result = result.filter((t) => t.category === activeCategory)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.tagline.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      )
    }
    return result
  }, [tools, query, activeCategory])

  const displayed = showAll ? filtered : filtered.slice(0, PAGE_SIZE)

  return (
    <section id="tools" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <SearchInput value={query} onChange={setQuery} className="mb-6 max-w-xl" />

        {/* Category filter */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setActiveCategory('all')}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-violet-600 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300 hover:text-violet-600'
            }`}
          >
            All Tools
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat.slug
                  ? 'bg-violet-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300 hover:text-violet-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-gray-500">
          {filtered.length === 0
            ? 'No tools found.'
            : `Showing ${displayed.length} of ${filtered.length} tools`}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center py-24 text-center">
            <svg className="mb-4 h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500">No tools match your search. Try a different keyword.</p>
            <button
              onClick={() => { setQuery(''); setActiveCategory('all') }}
              className="mt-3 text-sm text-violet-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {displayed.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
            {!showAll && filtered.length > PAGE_SIZE && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="rounded-xl border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:border-violet-300 hover:text-violet-600 transition-colors"
                >
                  Load more ({filtered.length - PAGE_SIZE} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
