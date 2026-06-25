'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, type RefObject } from 'react'
import ExternalLink from '@/components/a11y/ExternalLink'
import { resourceLinks } from '@/config/nav-links'
import { siteGutterX } from '@/lib/marketingLayout'

const mobileLinkClassName =
  'text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark rounded-lg px-2 py-2 block'

const mobileSubLinkClassName =
  'text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark rounded-lg px-2 py-2 block'

type MobileNavProps = {
  detailsRef?: RefObject<HTMLDetailsElement | null>
}

export default function MobileNav({ detailsRef }: MobileNavProps) {
  const internalRef = useRef<HTMLDetailsElement>(null)
  const pathname = usePathname()

  const setDetailsRef = (node: HTMLDetailsElement | null) => {
    internalRef.current = node
    if (detailsRef) {
      detailsRef.current = node
    }
  }

  const close = () => {
    if (internalRef.current) {
      internalRef.current.open = false
    }
  }

  useEffect(() => {
    if (internalRef.current) {
      internalRef.current.open = false
    }
  }, [pathname])

  useEffect(() => {
    const details = internalRef.current
    if (!details) return

    let scrollY = 0
    let previousBodyStyles: {
      position: string
      top: string
      left: string
      right: string
      width: string
      overflow: string
    } | null = null

    const lockScroll = () => {
      scrollY = window.scrollY
      const { style } = document.body
      previousBodyStyles = {
        position: style.position,
        top: style.top,
        left: style.left,
        right: style.right,
        width: style.width,
        overflow: style.overflow,
      }
      style.position = 'fixed'
      style.top = `-${scrollY}px`
      style.left = '0'
      style.right = '0'
      style.width = '100%'
      style.overflow = 'hidden'
    }

    const unlockScroll = () => {
      if (!previousBodyStyles) return
      const { style } = document.body
      style.position = previousBodyStyles.position
      style.top = previousBodyStyles.top
      style.left = previousBodyStyles.left
      style.right = previousBodyStyles.right
      style.width = previousBodyStyles.width
      style.overflow = previousBodyStyles.overflow
      previousBodyStyles = null
      window.scrollTo(0, scrollY)
    }

    const onToggle = () => {
      if (details.open) {
        lockScroll()
      } else {
        unlockScroll()
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && details.open) {
        event.preventDefault()
        close()
      }
    }

    details.addEventListener('toggle', onToggle)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      details.removeEventListener('toggle', onToggle)
      document.removeEventListener('keydown', onKeyDown)
      if (details.open) {
        unlockScroll()
      }
    }
  }, [])

  return (
    <details ref={setDetailsRef} className="group/nav relative md:hidden">
      <summary
        className="flex h-11 w-11 shrink-0 cursor-pointer list-none items-center justify-center rounded-lg text-white hover:text-brand-green-accent focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 touch-manipulation [&::-webkit-details-marker]:hidden"
        aria-controls="mobile-menu"
      >
        <span className="sr-only">Open menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none h-6 w-6 group-open/nav:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none hidden h-6 w-6 group-open/nav:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </summary>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className="fixed inset-x-0 top-16 z-10 max-h-[calc(100dvh-4rem)] overflow-x-hidden overflow-y-auto overscroll-contain border-t border-brand-cream/20 bg-brand-green-dark pb-5 pt-2"
      >
        <div className={`${siteGutterX} mx-auto flex max-w-7xl flex-col`}>
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
    </details>
  )
}
