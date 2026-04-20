'use client'

// Placeholder component — replace with real AdSense unit after approval
// To activate: uncomment the ins tag and remove the placeholder div
// Then add the AdSense <Script> tag in app/layout.tsx

interface AdSenseBannerProps {
  slot?: string
  className?: string
  height?: number
}

export default function AdSenseBanner({ className = '', height = 90 }: AdSenseBannerProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50 text-xs text-gray-400 ${className}`}
      style={{ minHeight: height }}
    >
      Ad placeholder
      {/* After AdSense approval, replace with:
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      */}
    </div>
  )
}
