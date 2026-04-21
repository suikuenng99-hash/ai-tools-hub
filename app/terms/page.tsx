import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for AISearches.',
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900">Terms of Use</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: April 2026</p>

      <div className="mt-8 space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By accessing and using AISearches (aisearches.us), you accept and agree to be bound by these Terms of Use.
            If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">2. Use of the Website</h2>
          <p className="mt-2">You agree to use this website only for lawful purposes. You must not:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Use the site in any way that violates applicable laws or regulations</li>
            <li>Scrape, copy, or redistribute our content without permission</li>
            <li>Attempt to gain unauthorized access to any part of the site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">3. Affiliate Disclosure</h2>
          <p className="mt-2">
            AISearches participates in affiliate programs. Some links on this site are affiliate links, meaning we may
            earn a commission if you click through and make a purchase — at no additional cost to you. Our editorial
            opinions are our own and are not influenced by affiliate relationships.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">4. Disclaimer of Warranties</h2>
          <p className="mt-2">
            The information on AISearches is provided "as is" without warranty of any kind. We make no guarantees
            regarding the accuracy, completeness, or suitability of the information. Tool pricing, features, and
            availability are subject to change by the respective companies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">5. Limitation of Liability</h2>
          <p className="mt-2">
            AISearches shall not be liable for any indirect, incidental, or consequential damages arising from your
            use of this website or any tools recommended on it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">6. Third-Party Links</h2>
          <p className="mt-2">
            Our website contains links to third-party websites. These links are provided for convenience only. We have
            no control over the content of those sites and accept no responsibility for them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">7. Intellectual Property</h2>
          <p className="mt-2">
            All content on AISearches, including text, graphics, and logos, is the property of AISearches unless
            otherwise stated. You may not reproduce or distribute any content without our written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">8. Changes to Terms</h2>
          <p className="mt-2">
            We reserve the right to modify these Terms at any time. Continued use of the site after changes constitutes
            acceptance of the new terms.
          </p>
        </section>

      </div>
    </div>
  )
}
