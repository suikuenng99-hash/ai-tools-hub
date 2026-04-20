import { categoryColorMap } from '@/lib/categories'
import type { ToolCategory } from '@/types/tool'

interface BadgeProps {
  category: ToolCategory
  className?: string
}

export default function Badge({ category, className = '' }: BadgeProps) {
  const colorClass = categoryColorMap[category] ?? 'bg-gray-100 text-gray-800'
  const label = category.charAt(0).toUpperCase() + category.slice(1)
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass} ${className}`}
    >
      {label}
    </span>
  )
}
