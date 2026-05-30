'use client'

import Link from 'next/link'
import DesktopNav from '@/components/DesktopNav'
import { MobileNavMenu, MobileNavToggle, useMobileNavState } from '@/components/MobileNav'
import { siteGutterX } from '@/lib/marketingLayout'

export default function Header() {
  const { open, setOpen, close } = useMobileNavState()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] w-full max-w-[100vw] bg-brand-green-dark shadow-lg"
      role="banner"
    >
      <div className={`${siteGutterX} mx-auto max-w-7xl`}>
        <div className="flex h-16 min-w-0 items-center justify-between gap-2 md:gap-3">
          <Link
            href="/"
            className="min-w-0 shrink truncate text-lg sm:text-xl font-display uppercase leading-none tracking-tight text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-1 py-1"
            aria-label="Pythoness Programmer - Home"
            onClick={close}
          >
            Pythoness Programmer
          </Link>

          <div className="flex shrink-0 items-center justify-end md:gap-8">
            <DesktopNav />
            <MobileNavToggle open={open} setOpen={setOpen} close={close} />
          </div>
        </div>

        <MobileNavMenu open={open} close={close} />
      </div>
    </header>
  )
}
