export type PricingModel = 'free' | 'freemium' | 'paid' | 'open-source'

export type ToolCategory =
  | 'writing'
  | 'image'
  | 'code'
  | 'video'
  | 'audio'
  | 'productivity'
  | 'seo'
  | 'marketing'
  | 'research'
  | 'chatbot'

export interface ToolPricing {
  model: PricingModel
  startingPrice?: string
  hasFreeTrialDays?: number
}

export interface Tool {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription?: string
  category: ToolCategory
  tags: string[]
  logoUrl: string
  websiteUrl: string
  affiliateUrl?: string
  isFeatured: boolean
  isSponsored: boolean
  rating: number
  reviewCount?: number
  features: string[]
  pros: string[]
  cons: string[]
  pricing: ToolPricing
  metaTitle?: string
  metaDescription?: string
  dateAdded: string
  dateUpdated: string
}

export interface CategoryMeta {
  slug: ToolCategory
  label: string
  description: string
  icon: string
  accentColor: string
}
