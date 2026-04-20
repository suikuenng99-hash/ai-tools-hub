import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllCategories, getToolsByCategory } from '@/lib/tools'
import { getCategoryMeta } from '@/lib/categories'
import type { ToolCategory } from '@/types/tool'
import ToolCard from '@/components/tools/ToolCard'
import AdSenseBanner from '@/components/ads/AdSenseBanner'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({ category }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const meta = getCategoryMeta(category as ToolCategory)
  if (!meta) return {}

  const title = `Best ${meta.label} AI Tools (${new Date().getFullYear()})`
  return {
    title,
    description: meta.description,
    openGraph: { title, description: meta.description },
    alternates: { canonical: `/category/${category}` },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const meta = getCategoryMeta(category as ToolCategory)
  if (!meta) notFound()

  const tools = getToolsByCategory(category as ToolCategory)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{meta.label}</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Best {meta.label} AI Tools
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-gray-600">{meta.description}</p>
        <p className="mt-2 text-sm text-gray-500">{tools.length} tools found</p>
      </div>

      <AdSenseBanner height={90} className="mb-8" />

      {tools.length === 0 ? (
        <div className="flex flex-col items-center py-24 text-center">
          <p className="text-gray-500">No tools in this category yet. Check back soon!</p>
          <Link href="/" className="mt-4 text-sm text-violet-600 hover:underline">
            Browse all tools
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </div>
  )
}
