'use client'

import Link from 'next/link'
import { useRef } from 'react'
import DesktopNav from '@/components/DesktopNav'
import MobileNav from '@/components/MobileNav'
import { siteGutterX } from '@/lib/marketingLayout'

export default function Header() {
  const mobileNavRef = useRef<HTMLDetailsElement>(null)

  const closeMobileNav = () => {
    if (mobileNavRef.current) {
      mobileNavRef.current.open = false
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[120] w-full max-w-[100vw] isolate bg-brand-green-dark shadow-lg"
      role="banner"
    >
      <div className={`${siteGutterX} mx-auto max-w-7xl`}>
        <div className="relative z-20 flex h-16 min-w-0 items-center justify-between gap-2 bg-brand-green-dark md:gap-3">
          <Link
            href="/"
            className="min-w-0 shrink truncate text-lg sm:text-xl font-display uppercase leading-none tracking-tight text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-1 py-1"
            aria-label="Pythoness Programmer - Home"
            onClick={closeMobileNav}
          >
            Pythoness Programmer
          </Link>

          <div className="flex shrink-0 items-center justify-end md:gap-8">
            <DesktopNav />
            <MobileNav detailsRef={mobileNavRef} />
          </div>
        </div>
      </div>
    </header>
  )
}
