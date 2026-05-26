'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { isProductionSite } from '@/lib/third-party-scripts'

export default function CookieYes() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(isProductionSite(window.location.hostname))
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <Script
      id="cookieyes"
      type="text/javascript"
      src="https://cdn-cookieyes.com/client_data/67059772a91132cceb485e37/script.js"
      strategy="afterInteractive"
    />
  )
}
