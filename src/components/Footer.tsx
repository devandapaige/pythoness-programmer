import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-purple-dark text-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
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
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://www.linkedin.com/in/pythonessprogrammer/"
                  target="_blank"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2"
                >
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/devandapaige" 
                  target="_blank"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2"
                >
                  <span>GitHub</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.youtube.com/@pythonessprogrammer"
                  target="_blank"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2"
                >
                  <span>YouTube</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.tiktok.com/@pythoness_programmer"
                  target="_blank"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2"
                >
                  <span>TikTok</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://bsky.app/profile/pythonessdev.bsky.social"
                  target="_blank"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2"
                >
                  <span>Bluesky</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="https://pythoness.beehiiv.com/"
                  target="_blank"
                  className="text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2"
                >
                  <span>Newsletter</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Calendar Links */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white">Book a Session</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://cal.com/pythoness/tech30" 
                  target="_blank"
                  className="text-white/80 hover:text-brand-green-accent transition-colors"
                >
                  30-Min Clarity Call ($40)
                </Link>
              </li>
              <li>
                <Link 
                  href="https://cal.com/pythoness/tech60" 
                  target="_blank"
                  className="text-white/80 hover:text-brand-green-accent transition-colors"
                >
                  60-Min Deep Dive ($70)
                </Link>
              </li>
              <li>
                <Link 
                  href="https://cal.com/pythoness/15min" 
                  target="_blank"
                  className="text-white/80 hover:text-brand-green-accent transition-colors"
                >
                  15-Min Vibe Check (Free)
                </Link>
              </li>
              <li>
                <Link 
                  href="https://cal.com/pythoness/craft" 
                  target="_blank"
                  className="text-white/80 hover:text-brand-green-accent transition-colors"
                >
                  Craft Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy-policy" 
                  className="text-white/80 hover:text-brand-green-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-white/80 hover:text-brand-green-accent transition-colors"
                >
                  Terms of Service
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
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Pythoness Programmer. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Crafted with ✨ and Next.js
          </p>
        </div>
      </div>
    </footer>
  )
} 