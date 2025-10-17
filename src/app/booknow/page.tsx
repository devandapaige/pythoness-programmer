'use client'

import { useEffect } from 'react'

export default function BookNowRedirect() {
  useEffect(() => {
    // Redirect to Cal.com booking page
    window.location.href = 'https://cal.com/pythoness'
  }, [])

  return (
    <div className="min-h-screen bg-brand-green-dark text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-2xl text-white mb-4">Redirecting to booking...</h1>
        <p className="text-white/80 mb-6">
          If you&apos;re not automatically redirected, 
          <a 
            href="https://cal.com/pythoness" 
            className="text-brand-green-accent hover:text-white underline ml-1"
          >
            click here
          </a>
        </p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-green-accent mx-auto"></div>
      </div>
    </div>
  )
}
