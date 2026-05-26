'use client'

import { useState } from 'react'
import Link from 'next/link'
import { resourceLinks } from '@/config/nav-links'

export default function DesktopNav() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  return (
    <div
      className="hidden md:flex shrink-0 space-x-8 text-sm font-medium"
      role="navigation"
      aria-label="Primary navigation"
    >
      <Link
        href="/about"
        className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
      >
        About
      </Link>
      <Link
        href="/services"
        className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
      >
        Services
      </Link>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsResourcesOpen((open) => !open)}
          className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1 flex items-center"
          aria-expanded={isResourcesOpen}
          aria-haspopup="true"
        >
          Resources
          <svg
            className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isResourcesOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-brand-green-accent/20 py-2 z-50">
            {resourceLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-4 py-2 text-brand-green-dark hover:text-brand-green-accent hover:bg-brand-green-accent/10 transition-colors"
                onClick={() => setIsResourcesOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Link
        href="/blog"
        className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
      >
        Lab Notes
      </Link>
      <Link
        href="/newsletter"
        className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
      >
        Pythoness Perspective
      </Link>
      <Link
        href="https://videos.pythonessprogrammer.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
      >
        Videos
      </Link>
      <Link
        href="https://stickyspells.etsy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1 font-medium"
      >
        Shop
      </Link>
    </div>
  )
}
