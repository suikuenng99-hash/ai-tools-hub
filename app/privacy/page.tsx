import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for AISearches — how we collect and use your data.',
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: April 2026</p>

      <div className="mt-8 space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900">1. Introduction</h2>
          <p className="mt-2">
            Welcome to AISearches ("we", "us", or "our"), accessible at aisearches.us. We are committed to protecting
            your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and
            share information about you when you use our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">2. Information We Collect</h2>
          <p className="mt-2">We may collect the following types of information:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li><strong>Usage Data:</strong> Pages visited, time spent, referring URLs, browser type, and device information collected automatically via analytics tools.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to improve your experience and track affiliate referrals.</li>
            <li><strong>Voluntarily Provided Information:</strong> Any information you choose to submit via contact forms or email.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">3. How We Use Your Information</h2>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>To operate and improve our website</li>
            <li>To analyze traffic and user behavior using analytics tools</li>
            <li>To track affiliate referrals and earn commissions</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">4. Affiliate Links & Third-Party Sites</h2>
          <p className="mt-2">
            AISearches contains affiliate links. When you click an affiliate link and make a purchase, we may earn a
            commission at no extra cost to you. We are not responsible for the privacy practices of third-party websites.
            We encourage you to review the privacy policy of any site you visit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">5. Cookies</h2>
          <p className="mt-2">
            We use cookies for analytics and affiliate tracking purposes. You can instruct your browser to refuse all
            cookies or to indicate when a cookie is being sent. However, some parts of our site may not function
            properly without cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">6. Third-Party Services</h2>
          <p className="mt-2">We may use third-party services including:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li><strong>Google Analytics</strong> — website traffic analysis</li>
            <li><strong>Impact.com</strong> — affiliate tracking</li>
            <li><strong>Vercel</strong> — website hosting</li>
          </ul>
          <p className="mt-2">Each third-party service has its own privacy policy governing the use of your information.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">7. Data Retention</h2>
          <p className="mt-2">
            We retain usage data only for as long as necessary to fulfill the purposes outlined in this policy. We do
            not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">8. Your Rights</h2>
          <p className="mt-2">Depending on your location, you may have the right to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of analytics tracking</li>
          </ul>
          <p className="mt-2">To exercise these rights, contact us at the email below.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">9. Children's Privacy</h2>
          <p className="mt-2">
            Our website is not directed to children under 13. We do not knowingly collect personal information from
            children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">10. Changes to This Policy</h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. We will notify you of any changes by updating the
            "Last updated" date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">11. Contact Us</h2>
          <p className="mt-2">
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:suikuenng99@gmail.com" className="text-violet-600 hover:underline">
              suikuenng99@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
