import type { CategoryMeta, ToolCategory } from '@/types/tool'

export const categories: CategoryMeta[] = [
  {
    slug: 'chatbot',
    label: 'Chatbots',
    description: 'The best AI chatbots and conversational assistants for productivity, writing, and research.',
    icon: 'MessageSquare',
    accentColor: 'violet',
  },
  {
    slug: 'writing',
    label: 'Writing',
    description: 'AI writing tools that help you create blog posts, marketing copy, emails, and long-form content faster.',
    icon: 'PenLine',
    accentColor: 'blue',
  },
  {
    slug: 'image',
    label: 'Image',
    description: 'AI image generators for creating stunning artwork, product photos, and marketing visuals from text.',
    icon: 'Image',
    accentColor: 'pink',
  },
  {
    slug: 'code',
    label: 'Coding',
    description: 'AI coding assistants and IDE tools that help you write, debug, and understand code faster.',
    icon: 'Code2',
    accentColor: 'green',
  },
  {
    slug: 'video',
    label: 'Video',
    description: 'AI video generators and editors for creating and editing professional-quality video content.',
    icon: 'Video',
    accentColor: 'red',
  },
  {
    slug: 'audio',
    label: 'Audio',
    description: 'AI audio tools for text-to-speech, voice cloning, music generation, and podcast production.',
    icon: 'Mic',
    accentColor: 'orange',
  },
  {
    slug: 'productivity',
    label: 'Productivity',
    description: 'AI productivity tools that automate workflows, summarize documents, and help you get more done.',
    icon: 'Zap',
    accentColor: 'yellow',
  },
  {
    slug: 'seo',
    label: 'SEO',
    description: 'AI SEO tools for keyword research, content optimization, and ranking higher on search engines.',
    icon: 'TrendingUp',
    accentColor: 'teal',
  },
  {
    slug: 'marketing',
    label: 'Marketing',
    description: 'AI marketing tools for ad creatives, email campaigns, and social media content generation.',
    icon: 'Megaphone',
    accentColor: 'cyan',
  },
  {
    slug: 'research',
    label: 'Research',
    description: 'AI research tools that search the web, analyze documents, and help you find information faster.',
    icon: 'Search',
    accentColor: 'indigo',
  },
]

export function getCategoryMeta(slug: ToolCategory): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug)
}

export const categoryColorMap: Record<ToolCategory, string> = {
  chatbot: 'bg-violet-100 text-violet-800',
  writing: 'bg-blue-100 text-blue-800',
  image: 'bg-pink-100 text-pink-800',
  code: 'bg-green-100 text-green-800',
  video: 'bg-red-100 text-red-800',
  audio: 'bg-orange-100 text-orange-800',
  productivity: 'bg-yellow-100 text-yellow-800',
  seo: 'bg-teal-100 text-teal-800',
  marketing: 'bg-cyan-100 text-cyan-800',
  research: 'bg-indigo-100 text-indigo-800',
}
