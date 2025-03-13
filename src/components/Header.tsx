import Link from 'next/link'

export default function Header() {
  return (
    <header 
      className="h-20 px-4 md:px-6 bg-brand-green-dark/95 backdrop-blur-sm fixed w-full z-50 flex items-center"
      role="banner"
    >
      <nav 
        className="max-w-7xl mx-auto flex items-center justify-between w-full"
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
            href="#services" 
            className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
          >
            Services
          </Link>
          <Link 
            href="#craft" 
            className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
          >
            Craft
          </Link>
          <Link 
            href="#process" 
            className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
          >
            Process
          </Link>
          <Link 
            href="#work" 
            className="text-white hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
          >
            Work
          </Link>
          <Link 
            href="#contact" 
            className="bg-brand-green-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2"
          >
            Contact
          </Link>
        </div>
        <button 
          className="md:hidden text-white hover:text-brand-green-accent focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg p-2"
          aria-label="Toggle mobile menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
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
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </nav>
    </header>
  )
} 