'use client'

import { useEffect, useRef } from 'react'

// Unit 1 — 728×90 Leaderboard (homepage hero, category pages)
export default function AdLeaderboard() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || ref.current.childElementCount > 0) return
    const s1 = document.createElement('script')
    s1.innerHTML = `
      atOptions = {
        'key': 'd5c7f2890e0db5593f7c2e9dd8c71989',
        'format': 'iframe',
        'height': 90,
        'width': 728,
        'params': {}
      };
    `
    const s2 = document.createElement('script')
    s2.src = 'https://www.highperformanceformat.com/d5c7f2890e0db5593f7c2e9dd8c71989/invoke.js'
    s2.async = true
    ref.current.appendChild(s1)
    ref.current.appendChild(s2)
  }, [])

  return (
    <div className="flex justify-center overflow-hidden">
      <div ref={ref} style={{ width: 728, height: 90 }} />
    </div>
  )
}
