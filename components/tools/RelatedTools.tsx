import type { Tool } from '@/types/tool'
import ToolCard from '@/components/tools/ToolCard'

interface RelatedToolsProps {
  tools: Tool[]
  categoryLabel: string
}

export default function RelatedTools({ tools, categoryLabel }: RelatedToolsProps) {
  if (tools.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-xl font-bold text-gray-900">More {categoryLabel} Tools</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  )
}
