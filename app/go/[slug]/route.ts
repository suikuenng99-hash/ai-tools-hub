import { NextResponse } from 'next/server'
import { getToolBySlug } from '@/lib/tools'

interface Params {
  params: Promise<{ slug: string }>
}

export async function GET(_request: Request, { params }: Params) {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    return NextResponse.redirect(new URL('/', 'https://aisearches.us'), { status: 302 })
  }

  const destination = tool.affiliateUrl ?? tool.websiteUrl

  // Append UTM parameters for tracking in affiliate dashboards
  let url: URL
  try {
    url = new URL(destination)
  } catch {
    return NextResponse.redirect(new URL('/', 'https://aisearches.us'), { status: 302 })
  }

  url.searchParams.set('utm_source', 'aisearches')
  url.searchParams.set('utm_medium', 'affiliate')
  url.searchParams.set('utm_campaign', 'directory')
  url.searchParams.set('utm_content', slug)

  return NextResponse.redirect(url.toString(), { status: 302 })
}
