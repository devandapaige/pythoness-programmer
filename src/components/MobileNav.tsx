import Link from 'next/link'
import { resourceLinks } from '@/config/nav-links'

const mobileLinkClassName =
  'text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark rounded-lg px-2 py-2 block'

const mobileSubLinkClassName =
  'text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark rounded-lg px-2 py-2 block'

/** Hamburger / close control — stays in the header row (shrink-0, never off-screen). */
export function MobileNavToggle() {
  return (
    <div className="relative h-10 w-10 shrink-0 md:hidden">
      <label
        htmlFor="mobile-nav-toggle"
        className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg text-white hover:text-brand-green-accent focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 touch-manipulation peer-checked/mobile:hidden"
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>

      <label
        htmlFor="mobile-nav-toggle"
        className="absolute inset-0 hidden cursor-pointer items-center justify-center rounded-lg text-white hover:text-brand-green-accent focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 touch-manipulation peer-checked/mobile:flex"
        aria-label="Close menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </div>
  )
}

/** Full-width panel below the header bar (no fixed positioning — avoids horizontal scroll). */
export function MobileNavMenu() {
  return (
    <nav
      id="mobile-menu"
      aria-label="Mobile navigation"
      className="hidden max-w-full overflow-x-hidden border-t border-brand-cream/20 bg-brand-green-dark pb-6 pt-2 peer-checked/mobile:block md:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto"
    >
      <div className="flex flex-col">
        <Link href="/about" className={mobileLinkClassName}>
          About
        </Link>
        <Link href="/services" className={mobileLinkClassName}>
          Services
        </Link>
        <details className="group/resources">
          <summary
            className={`${mobileLinkClassName} list-none cursor-pointer [&::-webkit-details-marker]:hidden flex items-center justify-between gap-2`}
          >
            <span className="min-w-0">Resources</span>
            <svg
              className="h-4 w-4 shrink-0 transition-transform group-open/resources:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="ml-4 flex flex-col">
            {resourceLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={mobileSubLinkClassName}>
                {label}
              </Link>
            ))}
          </div>
        </details>
        <Link href="/blog" className={mobileLinkClassName}>
          Lab Notes
        </Link>
        <Link href="/newsletter" className={mobileLinkClassName}>
          Pythoness Perspective
        </Link>
        <Link
          href="https://videos.pythonessprogrammer.com"
          target="_blank"
          rel="noopener noreferrer"
          className={mobileLinkClassName}
        >
          Videos
        </Link>
        <Link
          href="https://stickyspells.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${mobileLinkClassName} font-medium`}
        >
          Shop
        </Link>
      </div>
    </nav>
  )
}
