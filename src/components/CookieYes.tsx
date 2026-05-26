'use client'

import Script from 'next/script'
import { useProductionSiteScripts } from '@/lib/use-production-site-scripts'

export default function CookieYes() {
  const enabled = useProductionSiteScripts()

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
