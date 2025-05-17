'use client'

import { useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWorkMenuOpen, setIsWorkMenuOpen] = useState(false)
  const [isNewsletterMenuOpen, setIsNewsletterMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const workMenuRef = useRef<HTMLDivElement>(null)
  const newsletterMenuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Helper function to get the correct href for navigation links
  const getNavHref = (hash: string) => {
    return isHomePage ? hash : `/${hash}`
  }

  // Accessibility: close dropdowns on blur
  const handleBlur = (event: React.FocusEvent, setOpen: (open: boolean) => void, menuRef: React.RefObject<HTMLDivElement>) => {
    if (!menuRef.current?.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  // Accessibility: handle keyboard for dropdowns
  const handleDropdownKeyDown = (event: React.KeyboardEvent, setOpen: (open: boolean) => void) => {
    if (event.key === 'Escape') {
      setOpen(false);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(!open);
    }
  };

  return (
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
            href={getNavHref('#services')} 
            className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
          >
            Services
          </Link>
          <div className="relative" ref={workMenuRef} onBlur={e => handleBlur(e, setIsWorkMenuOpen, workMenuRef)}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={isWorkMenuOpen}
              aria-controls="work-menu"
              className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 inline-flex items-center"
              onClick={() => setIsWorkMenuOpen(!isWorkMenuOpen)}
              onKeyDown={e => handleDropdownKeyDown(e, setIsWorkMenuOpen)}
            >
              Work
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id="work-menu"
              role="menu"
              className={`absolute left-0 mt-2 w-56 bg-brand-green-dark/95 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-200 ${isWorkMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
              <div className="py-2">
                <Link 
                  href="https://pythoness.substack.com/podcast"
                  target="_blank"
                  role="menuitem"
                  tabIndex={isWorkMenuOpen ? 0 : -1}
                  className="block px-4 py-2 text-sm text-white hover:text-brand-green-accent hover:bg-white/10"
                  onClick={() => setIsWorkMenuOpen(!isWorkMenuOpen)}
                >
                  NotebookLM Podcast
                </Link>
              </div>
            </div>
          </div>
          <div className="relative" ref={newsletterMenuRef} onBlur={e => handleBlur(e, setIsNewsletterMenuOpen, newsletterMenuRef)}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={isNewsletterMenuOpen}
              aria-controls="newsletter-menu"
              className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 inline-flex items-center"
              onClick={() => setIsNewsletterMenuOpen(!isNewsletterMenuOpen)}
              onKeyDown={e => handleDropdownKeyDown(e, setIsNewsletterMenuOpen)}
            >
              Newsletter
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id="newsletter-menu"
              role="menu"
              className={`absolute left-0 mt-2 w-48 bg-brand-green-dark/95 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-200 ${isNewsletterMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
              <div className="py-2">
                <Link 
                  href="/digital-spring-cleaning"
                  role="menuitem"
                  tabIndex={isNewsletterMenuOpen ? 0 : -1}
                  className="block px-4 py-2 text-sm text-white hover:text-brand-green-accent hover:bg-white/10"
                  onClick={() => setIsNewsletterMenuOpen(!isNewsletterMenuOpen)}
                >
                  GRIT Digital Cleaning
                </Link>
                <Link 
                  href="https://pythoness.beehiiv.com/subscribe"
                  target="_blank"
                  role="menuitem"
                  tabIndex={isNewsletterMenuOpen ? 0 : -1}
                  className="block px-4 py-2 text-sm text-white hover:text-brand-green-accent hover:bg-white/10"
                  onClick={() => setIsNewsletterMenuOpen(!isNewsletterMenuOpen)}
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
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

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`
            absolute top-full left-0 w-full 
            bg-brand-green-dark/95 backdrop-blur-sm
            md:hidden
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col space-y-4 p-6">
            <Link 
              href={getNavHref('#services')} 
              className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <div className="space-y-2">
              <p className="text-white/80 text-sm px-2">Work</p>
              <div className="pl-6 space-y-1">
                <Link 
                  href="https://pythoness.substack.com/podcast"
                  target="_blank"
                  className="block text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  NotebookLM Podcast
                </Link>
              </div>
            </div>
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
      </nav>
    </header>
  )
} 