import { tools } from '@/data/tools'
import type { Tool, ToolCategory } from '@/types/tool'

export function getAllTools(): Tool[] {
  return tools
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug)
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter((t) => t.category === category)
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.isFeatured)
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase()
  return tools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      t.category.toLowerCase().includes(q)
  )
}

export function getRelatedTools(tool: Tool, limit = 3): Tool[] {
  return tools
    .filter((t) => t.slug !== tool.slug && t.category === tool.category)
    .slice(0, limit)
}

export function getAllSlugs(): string[] {
  return tools.map((t) => t.slug)
}

export function getAllCategories(): ToolCategory[] {
  const cats = tools.map((t) => t.category)
  return [...new Set(cats)]
}

export function getToolCountByCategory(): Record<ToolCategory, number> {
  return tools.reduce(
    (acc, t) => {
      acc[t.category] = (acc[t.category] ?? 0) + 1
      return acc
    },
    {} as Record<ToolCategory, number>
  )
}
