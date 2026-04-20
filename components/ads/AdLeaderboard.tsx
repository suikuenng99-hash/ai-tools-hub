'use client'

import { useEffect, useRef } from 'react'

// Unit 1 — 728×90 Leaderboard (homepage hero, category pages)
export default function AdLeaderboard() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || ref.current.childElementCount > 0) return

    // Each unit gets its own isolated script execution scope via innerHTML
    ref.current.innerHTML = `
      <script type="text/javascript">
        atOptions = {
          'key': 'd5c7f2890e0db5593f7c2e9dd8c71989',
          'format': 'iframe',
          'height': 90,
          'width': 728,
          'params': {}
        };
      </script>
      <script type="text/javascript" src="https://www.highperformanceformat.com/d5c7f2890e0db5593f7c2e9dd8c71989/invoke.js"></script>
    `
  }, [])

  return (
    <div className="flex justify-center overflow-hidden">
      <div ref={ref} style={{ width: 728, height: 90 }} />
    </div>
  )
}
