'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import ExternalLink from '@/components/a11y/ExternalLink'
import { resourceLinks } from '@/config/nav-links'

const mobileLinkClassName =
  'text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark rounded-lg px-2 py-2 block'

const mobileSubLinkClassName =
  'text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark rounded-lg px-2 py-2 block'

export function useMobileNavState() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return { open, setOpen, close }
}

export function MobileNavToggle({
  open,
  setOpen,
  close,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  close: () => void
}) {
  return (
    <div className="relative h-10 w-10 shrink-0 md:hidden">
      <button
        type="button"
        className={`absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg text-white hover:text-brand-green-accent focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 touch-manipulation ${open ? 'hidden' : 'flex'}`}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
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
      </button>

      <button
        type="button"
        className={`absolute inset-0 cursor-pointer items-center justify-center rounded-lg text-white hover:text-brand-green-accent focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 touch-manipulation ${open ? 'flex' : 'hidden'}`}
        aria-label="Close menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={close}
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
      </button>
    </div>
  )
}

export function MobileNavMenu({ open, close }: { open: boolean; close: () => void }) {
  if (!open) {
    return null
  }

  return (
    <nav
      id="mobile-menu"
      aria-label="Mobile navigation"
      className="max-w-full overflow-x-hidden border-t border-brand-cream/20 bg-brand-green-dark pb-5 pt-2 md:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto"
    >
      <div className="flex flex-col">
        <Link href="/about" className={mobileLinkClassName} onClick={close}>
          About
        </Link>
        <Link href="/services" className={mobileLinkClassName} onClick={close}>
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
              <Link key={href} href={href} className={mobileSubLinkClassName} onClick={close}>
                {label}
              </Link>
            ))}
          </div>
        </details>
        <Link href="/blog" className={mobileLinkClassName} onClick={close}>
          Lab Notes
        </Link>
        <Link href="/newsletter" className={mobileLinkClassName} onClick={close}>
          Pythoness Perspective
        </Link>
        <ExternalLink
          href="https://videos.pythonessprogrammer.com"
          className={mobileLinkClassName}
          onClick={close}
        >
          Videos
        </ExternalLink>
        <ExternalLink
          href="https://stickyspells.etsy.com"
          className={`${mobileLinkClassName} font-medium`}
          onClick={close}
        >
          Shop
        </ExternalLink>
      </div>
    </nav>
  )
}
