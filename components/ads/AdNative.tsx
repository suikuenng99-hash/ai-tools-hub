'use client'

import { useEffect, useRef } from 'react'

// Unit 3 — Native Banner (homepage bottom, blends with content)
export default function AdNative() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || ref.current.childElementCount > 0) return
    const s = document.createElement('script')
    s.src = 'https://pl29205522.profitablecpmratenetwork.com/0af1ea5dc666bf582bf2f1cae842cf78/invoke.js'
    s.async = true
    s.setAttribute('data-cfasync', 'false')
    ref.current.appendChild(s)
  }, [])

  return (
    <div>
      <div id="container-0af1ea5dc666bf582bf2f1cae842cf78" ref={ref} />
    </div>
  )
}
