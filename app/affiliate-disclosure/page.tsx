import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Affiliate disclosure for AISearches — how we earn commissions.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900">Affiliate Disclosure</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: April 2026</p>

      <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
        <p>
          AISearches (aisearches.us) is a participant in affiliate programs including Impact.com and direct brand
          affiliate programs. This means we may earn a commission when you click on certain links on our site and
          subsequently make a purchase — at <strong>no additional cost to you</strong>.
        </p>

        <p>
          This disclosure is provided in accordance with the Federal Trade Commission (FTC) guidelines on endorsements
          and testimonials (16 CFR Part 255).
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">How it works</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We research and review AI tools independently.</li>
          <li>Some "Visit Tool" and "Get Started" buttons contain affiliate tracking links.</li>
          <li>If you purchase a product after clicking our link, we may receive a commission from the vendor.</li>
          <li>Our reviews and ratings are based on our honest assessment — affiliate relationships do not influence our editorial opinions.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8">Our commitment</h2>
        <p>
          We only recommend tools we believe are genuinely useful. Affiliate compensation helps us keep this directory
          free and continuously updated. Thank you for supporting AISearches.
        </p>

        <p>
          If you have questions about our affiliate relationships, contact us at:{' '}
          <a href="mailto:suikuenng99@gmail.com" className="text-violet-600 hover:underline">
            suikuenng99@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}
