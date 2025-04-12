import Link from 'next/link'

export default function Footer() {
  return (
    <footer 
      className="bg-brand-green-dark text-white py-12 px-4 md:px-6"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white">Pythoness Programmer</h3>
            <p className="text-white/80 text-sm">
              Crafting digital joy through code, coaching, and creativity.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white">Connect</h3>
            <ul 
              className="space-y-2"
              role="list"
              aria-label="Social media links"
            >
              <li>
                <Link 
                  href="https://github.com/devandapaige" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>GitHub</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.youtube.com/@pythonessprogrammer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>YouTube</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.tiktok.com/@pythoness_programmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>TikTok</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://bsky.app/profile/pythonessdev.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>Bluesky</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://pythoness.beehiiv.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>Newsletter</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Calendar Links */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white">Book a Call</h3>
            <ul 
              className="space-y-2"
              role="list"
              aria-label="Booking options"
            >
              <li>
                <Link 
                  href="https://cal.com/pythoness/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>15min Vibe Check</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://cal.com/pythoness/30mins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>30min Clarity Call</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://cal.com/pythoness/tech30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>30min Tech Stack Audit</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://cal.com/pythoness/tech60"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>60min Deep Dive</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Resources */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white">Free Resources</h3>
            <ul 
              className="space-y-2"
              role="list"
              aria-label="Free resources"
            >
              <li>
                <Link 
                  href="/vibe-coding-cheatsheet" 
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>Vibe Coding Cheatsheet</span>
                </Link>
              </li>
              {/* Add more free resources here as they become available */}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white">Legal</h3>
            <ul 
              className="space-y-2"
              role="list"
              aria-label="Legal information"
            >
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded-lg px-2"
                >
                  <span>Terms of Service</span>
                </Link>
              </li>
            </ul>
            <div className="pt-2">
              <p className="text-white/80">
                Richmond & New Kent, VA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          role="contentinfo"
        >
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Pythoness Programmer. All rights reserved.
          </p>
          <p className="text-white/60 text-sm text-right">
            Crafted using{' '}
            <Link 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-green-accent transition-colors"
            >
              Next.js
            </Link>
            {', '}
            <Link 
              href="https://tailwindcss.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-green-accent transition-colors"
            >
              Tailwind
            </Link>
            {', '}
            <Link 
              href="https://contentlayer.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-green-accent transition-colors"
            >
              Contentlayer
            </Link>
            {', '}
            <Link 
              href="https://mdxjs.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-green-accent transition-colors"
            >
              MDX
            </Link>
            {', '}
            <Link 
              href="https://vercel.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-green-accent transition-colors"
            >
              Vercel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
} 