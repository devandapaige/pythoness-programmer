'use client';

import Script from 'next/script';

export default function CookieYes() {
  return (
    <Script
      id="cookieyes"
      type="text/javascript"
      src="https://cdn-cookieyes.com/client_data/67059772a91132cceb485e37/script.js"
      strategy="afterInteractive"
    />
  );
} 