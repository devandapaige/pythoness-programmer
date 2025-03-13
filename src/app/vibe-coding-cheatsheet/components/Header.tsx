import Link from 'next/link'

export default function Header() {
  return (
    <header role="banner">
      <nav aria-label="Main navigation">
        <div className="mb-8">
          <Link 
            href="/"
            className="text-white hover:text-brand-green-accent transition-colors"
            aria-label="Back to home page"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <h1 
        className="font-display font-normal text-4xl md:text-5xl text-white mb-6"
        id="page-title"
      >
        Vibe Coding Cheatsheet for Neurodivergent Developers
      </h1>
    </header>
  )
} 