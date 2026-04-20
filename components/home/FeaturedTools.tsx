import type { Tool } from '@/types/tool'
import ToolCard from '@/components/tools/ToolCard'

interface FeaturedToolsProps {
  tools: Tool[]
}

export default function FeaturedTools({ tools }: FeaturedToolsProps) {
  if (tools.length === 0) return null

  return (
    <section className="border-b border-gray-200 bg-amber-50/50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Featured Tools</h2>
            <p className="mt-0.5 text-sm text-gray-500">Hand-picked top AI tools worth trying</p>
          </div>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
            Sponsored
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
