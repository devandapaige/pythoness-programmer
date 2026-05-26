import Link from 'next/link'
import DesktopNav from '@/components/DesktopNav'
import { MobileNavMenu, MobileNavToggle } from '@/components/MobileNav'

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] w-full max-w-[100vw] overflow-x-hidden bg-brand-green-dark shadow-lg"
      role="banner"
    >
      <div className="mx-auto max-w-7xl overflow-x-hidden px-4 md:px-6">
        {/* Checkbox must be a sibling of peer-checked targets (toggle labels + menu). */}
        <input
          type="checkbox"
          id="mobile-nav-toggle"
          className="peer/mobile sr-only md:hidden"
          aria-hidden="true"
        />

        <div className="flex h-20 min-w-0 items-center justify-between gap-2 md:gap-3">
          <Link
            href="/"
            className="min-w-0 shrink truncate text-xl font-display uppercase leading-none tracking-tight text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg"
            aria-label="Pythoness Programmer - Home"
          >
            Pythoness Programmer
          </Link>

          <div className="flex shrink-0 items-center justify-end md:gap-8">
            <DesktopNav />
            <MobileNavToggle />
          </div>
        </div>

        <MobileNavMenu />
      </div>
    </header>
  )
}
