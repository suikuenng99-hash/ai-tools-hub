'use client'

import { useState, useEffect } from 'react'

interface HouseAdItem {
  slug: string
  name: string
  tagline: string
  badge: string
  badgeColor: string
  gradient: string
  cta: string
}

const ads: HouseAdItem[] = [
  {
    slug: 'chatgpt',
    name: 'ChatGPT Plus',
    tagline: 'GPT-4o, image generation & custom GPTs. The world\'s most powerful AI.',
    badge: 'Most Popular',
    badgeColor: 'bg-violet-100 text-violet-700',
    gradient: 'from-violet-50 to-indigo-50 border-violet-100',
    cta: 'Try ChatGPT Plus →',
  },
  {
    slug: 'midjourney',
    name: 'Midjourney',
    tagline: 'Generate stunning AI art and photorealistic images from text. From $10/mo.',
    badge: 'Best for Images',
    badgeColor: 'bg-pink-100 text-pink-700',
    gradient: 'from-pink-50 to-rose-50 border-pink-100',
    cta: 'Try Midjourney →',
  },
  {
    slug: 'claude',
    name: 'Claude Pro',
    tagline: 'Analyze long documents, write better code, and think through complex problems.',
    badge: 'Best for Coding',
    badgeColor: 'bg-amber-100 text-amber-700',
    gradient: 'from-amber-50 to-orange-50 border-amber-100',
    cta: 'Try Claude Pro →',
  },
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    tagline: 'AI pair programmer that writes code, tests, and docs directly in your IDE.',
    badge: 'Top Dev Tool',
    badgeColor: 'bg-green-100 text-green-700',
    gradient: 'from-green-50 to-emerald-50 border-green-100',
    cta: 'Try Copilot Free →',
  },
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    tagline: 'Clone any voice in minutes. Generate ultra-realistic speech in 29+ languages.',
    badge: 'Best for Audio',
    badgeColor: 'bg-blue-100 text-blue-700',
    gradient: 'from-blue-50 to-cyan-50 border-blue-100',
    cta: 'Try ElevenLabs →',
  },
  {
    slug: 'jasper',
    name: 'Jasper AI',
    tagline: 'Write 10x faster with AI trained on high-converting marketing copy.',
    badge: 'Best for Marketing',
    badgeColor: 'bg-orange-100 text-orange-700',
    gradient: 'from-orange-50 to-yellow-50 border-orange-100',
    cta: 'Try Jasper Free →',
  },
]

interface HouseAdProps {
  className?: string
}

export default function HouseAd({ className = '' }: HouseAdProps) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Randomize starting ad
    setIndex(Math.floor(Math.random() * ads.length))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      // Fade out, swap, fade in
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % ads.length)
        setVisible(true)
      }, 300)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const ad = ads[index]

  return (
    <div className={`overflow-hidden rounded-xl border ${className}`}>
      <a
        href={`/go/${ad.slug}`}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`flex items-center justify-between gap-4 bg-gradient-to-r ${ad.gradient} px-5 py-3.5 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Left: badge + text */}
        <div className="flex min-w-0 items-center gap-3">
          <span className={`hidden shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold sm:inline-flex ${ad.badgeColor}`}>
            {ad.badge}
          </span>
          <div className="min-w-0">
            <span className="font-semibold text-gray-900 text-sm">{ad.name}</span>
            <span className="mx-2 text-gray-300">·</span>
            <span className="text-sm text-gray-600 line-clamp-1">{ad.tagline}</span>
          </div>
        </div>

        {/* Right: CTA + sponsored label */}
        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden text-xs text-gray-400 lg:block">Sponsored</span>
          <span className="whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-700 transition-colors">
            {ad.cta}
          </span>
        </div>
      </a>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 bg-white py-1.5">
        {ads.map((_, i) => (
          <button
            key={i}
            onClick={() => { setVisible(false); setTimeout(() => { setIndex(i); setVisible(true) }, 300) }}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-4 bg-gray-400' : 'w-1.5 bg-gray-200'}`}
            aria-label={`Show ad ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
