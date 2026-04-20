import type { MetadataRoute } from 'next'
import { getAllTools, getAllCategories } from '@/lib/tools'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://aisearches.us'

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = getAllTools()
  const categories = getAllCategories()

  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE_URL}/tools/${tool.slug}`,
    lastModified: new Date(tool.dateUpdated),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE_URL}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...categoryPages,
    ...toolPages,
    ...staticPages,
  ]
}
