'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen)
  }

  return (
    <>
      <header 
        className="h-20 px-4 md:px-6 bg-brand-green-dark/95 backdrop-blur-sm fixed w-full z-50"
        role="banner"
      >
        <nav 
          className="max-w-7xl mx-auto flex items-center justify-between w-full h-full relative"
          aria-label="Main navigation"
        >
          <Link 
            href="/" 
            className="text-xl font-display tracking-tight uppercase text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg"
            aria-label="Pythoness Programmer - Home"
          >
            Pythoness Programmer
          </Link>
          <div 
            className="hidden md:flex space-x-8 text-sm font-medium"
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
                onClick={toggleResources}
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
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-brand-green-accent/20 py-2 z-50">
                  <Link 
                    href="/resources" 
                    className="block px-4 py-2 text-brand-green-hyperlink hover:text-brand-green-accent hover:bg-brand-green-accent/10 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    All Resources
                  </Link>
                  <Link 
                    href="/digital-spring-cleaning" 
                    className="block px-4 py-2 text-brand-green-hyperlink hover:text-brand-green-accent hover:bg-brand-green-accent/10 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Digital Spring Cleaning
                  </Link>
                  <Link 
                    href="/mindful-automation" 
                    className="block px-4 py-2 text-brand-green-hyperlink hover:text-brand-green-accent hover:bg-brand-green-accent/10 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Mindful Automation
                  </Link>
                  <Link 
                    href="/accessibility" 
                    className="block px-4 py-2 text-brand-green-hyperlink hover:text-brand-green-accent hover:bg-brand-green-accent/10 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Accessibility Legal Guide
                  </Link>
                  <Link 
                    href="/back-to-basics" 
                    className="block px-4 py-2 text-brand-green-hyperlink hover:text-brand-green-accent hover:bg-brand-green-accent/10 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Back to Basics
                  </Link>
                  <Link 
                    href="/ai-mythbusting" 
                    className="block px-4 py-2 text-brand-green-hyperlink hover:text-brand-green-accent hover:bg-brand-green-accent/10 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    AI Myth-Busting
                  </Link>
                  <Link 
                    href="/vibe-coding-cheatsheet" 
                    className="block px-4 py-2 text-brand-green-hyperlink hover:text-brand-green-accent hover:bg-brand-green-accent/10 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Vibe Coding Cheatsheet
                  </Link>
                  <Link 
                    href="/passwords" 
                    className="block px-4 py-2 text-brand-green-hyperlink hover:text-brand-green-accent hover:bg-brand-green-accent/10 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Password Security Guide
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/blog" 
              className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
            >
              Blog
            </Link>
            <Link 
              href="https://stickyspells.etsy.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1 font-medium"
            >
              Shop
            </Link>
            <Link 
              href="https://cal.com/pythoness" 
              target="_blank"
              className="bg-brand-green-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2"
            >
              Book a Call
            </Link>
          </div>
          <button 
            className="md:hidden text-white hover:text-brand-green-accent focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen 
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </nav>
      </header>
      {/* Mobile Menu - moved outside header for proper stacking */}
      <div 
        id="mobile-menu"
        className={`
          fixed left-0 top-20 w-full 
          bg-brand-green-dark/95 backdrop-blur-sm
          md:hidden
          z-50
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col space-y-4 p-6">
          <Link 
            href="/about" 
            className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <div className="space-y-2">
            <div className="text-white font-medium px-2 py-1">Resources</div>
            <div className="ml-4 space-y-2">
              <Link 
                href="/resources" 
                className="block text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                All Resources
              </Link>
              <Link 
                href="/digital-spring-cleaning" 
                className="block text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Digital Spring Cleaning
              </Link>
              <Link 
                href="/mindful-automation" 
                className="block text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Mindful Automation
              </Link>
              <Link 
                href="/accessibility" 
                className="block text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessibility Legal Guide
              </Link>
              <Link 
                href="/back-to-basics" 
                className="block text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Back to Basics
              </Link>
              <Link 
                href="/ai-mythbusting" 
                className="block text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Myth-Busting
              </Link>
              <Link 
                href="/vibe-coding-cheatsheet" 
                className="block text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Vibe Coding Cheatsheet
              </Link>
              <Link 
                href="/passwords" 
                className="block text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Password Security Guide
              </Link>
            </div>
          </div>
          <Link 
            href="/blog" 
            className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="https://stickyspells.etsy.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link 
            href="https://cal.com/pythoness" 
            target="_blank"
            className="bg-brand-green-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </>
  )
} 