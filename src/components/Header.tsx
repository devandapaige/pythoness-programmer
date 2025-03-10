import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-6 bg-brand-green-dark text-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-display tracking-tight uppercase text-brand-cream hover:text-brand-green-accent transition-colors">
          Pythoness Programmer
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link href="#services" className="hover:text-brand-green-accent transition-colors">Services</Link>
          <Link href="#coaching" className="hover:text-brand-green-accent transition-colors">Coaching</Link>
          <Link href="#craft" className="hover:text-brand-green-accent transition-colors">Craft</Link>
          <Link href="#contact" className="hover:text-brand-green-accent transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  )
} 