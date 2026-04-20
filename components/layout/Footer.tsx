import Link from 'next/link'
import { categories } from '@/lib/categories'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white font-bold text-sm">
                AI
              </div>
              <span className="text-lg font-bold text-gray-900">
                AI Tools<span className="text-violet-600">Hub</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              Discover the best AI tools for writing, coding, image generation, video, and more.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Categories</h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-gray-500 hover:text-violet-600 transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-3 space-y-1.5">
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-violet-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-violet-600 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-sm text-gray-500 hover:text-violet-600 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-400">
            <strong className="font-medium text-gray-500">Affiliate Disclosure:</strong> AIToolsHub contains affiliate
            links. When you click a link and make a purchase, we may earn a commission at no extra cost to you. We only
            recommend tools we genuinely believe are useful.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} AIToolsHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
