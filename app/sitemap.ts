import type { MetadataRoute } from 'next'
import { getAllSlugs, getAllCategories } from '@/lib/tools'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://aisearches.us'

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs()
  const categories = getAllCategories()

  const toolPages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...categoryPages,
    ...toolPages,
  ]
}
