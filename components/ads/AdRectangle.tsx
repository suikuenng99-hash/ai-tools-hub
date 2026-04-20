'use client'

import { useEffect, useRef } from 'react'

// Unit 2 — 300×250 Medium Rectangle (tool detail pages)
export default function AdRectangle() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || ref.current.childElementCount > 0) return
    const s1 = document.createElement('script')
    s1.innerHTML = `
      atOptions = {
        'key': 'e9d7d32d63dc5d7bb15fd6f0151c54fe',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };
    `
    const s2 = document.createElement('script')
    s2.src = 'https://www.highperformanceformat.com/e9d7d32d63dc5d7bb15fd6f0151c54fe/invoke.js'
    s2.async = true
    ref.current.appendChild(s1)
    ref.current.appendChild(s2)
  }, [])

  return (
    <div className="flex justify-center overflow-hidden">
      <div ref={ref} style={{ width: 300, height: 250 }} />
    </div>
  )
}
