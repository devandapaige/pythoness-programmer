'use client'

import { useEffect } from 'react'

interface AddEventCalendarProps {
  className?: string
  children: React.ReactNode
}

export default function AddEventCalendar({ className, children }: AddEventCalendarProps) {
  useEffect(() => {
    // Load Add Event CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.addevent.com/libs/stc/themes/fff-theme-1/theme.css'
    link.type = 'text/css'
    link.media = 'all'
    document.head.appendChild(link)

    // Load Add Event script
    const script = document.createElement('script')
    script.src = 'https://cdn.addevent.com/libs/stc/1.0.2/stc.min.js'
    script.async = true
    script.onload = () => {
      // Script loaded successfully
    }
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      document.head.removeChild(link)
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className={className}>
      {children}
    </div>
  )
}
