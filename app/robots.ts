import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://aisearches.us'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/go/', // Affiliate redirects should not be indexed
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
