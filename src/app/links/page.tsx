import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Links | Pythoness Programmer',
  description: 'Connect with Pythoness Programmer through various platforms and resources.',
}

// Define interface for link objects
interface LinkItem {
  name: string;
  url: string;
  color: string;
}

// Social media links - easy to update
const socialLinks: LinkItem[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/devandapaige',
    color: 'bg-white/10 hover:bg-white/20'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@pythonessprogrammer',
    color: 'bg-white/10 hover:bg-white/20'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@pythoness_programmer',
    color: 'bg-white/10 hover:bg-white/20'
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/pythonessdev.bsky.social',
    color: 'bg-white/10 hover:bg-white/20'
  },
  {
    name: 'Newsletter',
    url: 'https://pythoness.beehiiv.com/',
    color: 'bg-white/10 hover:bg-white/20'
  }
]

// Booking links - easy to update
const bookingLinks: LinkItem[] = [
  {
    name: '30min Tech Stack Audit',
    url: 'https://cal.com/pythoness/tech30',
    color: 'bg-brand-green-accent text-brand-green-dark'
  },
  {
    name: '75min Deep Dive',
    url: 'https://cal.com/pythoness/tech75',
    color: 'bg-brand-green-accent text-brand-green-dark'
  }
]

// Resource links - easy to update
const resourceLinks: LinkItem[] = [
  {
    name: 'Vibe Coding Cheatsheet',
    url: '/vibe-coding-cheatsheet',
    color: 'bg-white/20 hover:bg-white/30'
  },
  // Add more resources here as they become available
]

// Affiliate links section - ready for future expansion
const affiliateLinks: LinkItem[] = [
  // This section is ready for future affiliate links
]

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-brand-green-dark text-white py-12 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="mb-4 relative mx-auto">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-brand-green-accent relative mx-auto">
              <Image 
                src="/images/headshot.png" 
                alt="Pythoness Programmer" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-white mb-2">Pythoness Programmer</h1>
          <p className="text-white/80 max-w-md mx-auto">
            Crafting digital joy through code, coaching, and creativity.
          </p>
        </div>

        {/* Links Container */}
        <div className="w-full space-y-8">
          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-xl text-white text-center">Connect With Me</h2>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${link.color} py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Booking Links */}
          {bookingLinks.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-xl text-white text-center">Book a Call</h2>
              <div className="space-y-3">
                {bookingLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${link.color} py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark font-medium`}
                  >
                    {link.name}
                  </Link>
                ))}
                <p className="text-white/80 text-sm text-center mt-4">
                  Coming this summer: Group events and office hours! Stay tuned for updates.
                </p>
              </div>
            </div>
          )}

          {/* Resource Links */}
          {resourceLinks.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-xl text-white text-center">Free Resources</h2>
              <div className="space-y-3">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${link.color} py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Affiliate Links - hidden until populated */}
          {affiliateLinks.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-xl text-white text-center">Recommended Products</h2>
              <div className="space-y-3">
                {affiliateLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${link.color} py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Link to Main Website */}
          <div className="pt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-brand-green-accent hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark"
            >
              <span>Visit my website →</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Pythoness Programmer</p>
        </div>
      </div>
    </div>
  )
}
