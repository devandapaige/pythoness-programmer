'use client'

import { useCallback, useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ExternalLink from '@/components/a11y/ExternalLink'
import { resourceLinks } from '@/config/nav-links'
import { focusRingClass } from '@/lib/a11y/focusRing'

const navLinkClass = `text-white hover:text-brand-green-accent transition-colors ${focusRingClass} px-2 py-1`

export default function DesktopNav() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const menuId = useId()
  const panelId = `resources-menu-${menuId}`
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  const closeResources = useCallback(() => setIsResourcesOpen(false), [])

  useEffect(() => {
    closeResources()
  }, [pathname, closeResources])

  useEffect(() => {
    if (!isResourcesOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeResources()
        buttonRef.current?.focus()
      }
    }

    const onPointerDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeResources()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [isResourcesOpen, closeResources])

  return (
    <div
      className="hidden md:flex shrink-0 space-x-8 text-sm font-medium"
      role="navigation"
      aria-label="Primary navigation"
    >
      <Link href="/about" className={navLinkClass}>
        About
      </Link>
      <Link href="/services" className={navLinkClass}>
        Services
      </Link>
      <div className="relative" ref={containerRef}>
        <button
          ref={buttonRef}
          type="button"
          id={menuId}
          onClick={() => setIsResourcesOpen((open) => !open)}
          className={`${navLinkClass} flex items-center`}
          aria-expanded={isResourcesOpen}
          aria-haspopup="menu"
          aria-controls={panelId}
        >
          Resources
          <svg
            className={`ml-1 h-4 w-4 transition-transform motion-reduce:transition-none ${isResourcesOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isResourcesOpen && (
          <div
            id={panelId}
            role="menu"
            aria-labelledby={menuId}
            className="absolute top-full left-0 z-50 mt-2 w-64 rounded-lg border border-brand-green-accent/20 bg-white py-2 shadow-lg"
          >
            {resourceLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                role="menuitem"
                className={`block px-4 py-2 text-brand-green-dark hover:bg-brand-green-accent/10 hover:text-brand-green-accent transition-colors ${focusRingClass}`}
                onClick={closeResources}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Link href="/blog" className={navLinkClass}>
        Lab Notes
      </Link>
      <Link href="/newsletter" className={navLinkClass}>
        Pythoness Perspective
      </Link>
      <ExternalLink href="https://videos.pythonessprogrammer.com" className={navLinkClass}>
        Videos
      </ExternalLink>
      <ExternalLink href="https://stickyspells.etsy.com" className={`${navLinkClass} font-medium`}>
        Shop
      </ExternalLink>
    </div>
  )
}
