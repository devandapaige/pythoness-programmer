'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Helper function to get the correct href for navigation links
  const getNavHref = (hash: string) => {
    return isHomePage ? hash : `/${hash}`
  }

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
          <Link 
            href={getNavHref('#work')} 
            className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
          >
            Work
          </Link>
          <Link 
            href="https://pythoness.beehiiv.com" 
            target="_blank"
            className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
          >
            Newsletter
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
            <Link 
              href={getNavHref('#work')} 
              className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="https://pythoness.beehiiv.com" 
              target="_blank"
              className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletter
            </Link>
            <Link 
              href="https://cal.com/pythoness/30mins" 
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