'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { isProductionSite } from '@/lib/third-party-scripts'

export default function Hotjar() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(isProductionSite(window.location.hostname))
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <Script
      id="hotjar-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:6406931,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
      }}
    />
  )
}
