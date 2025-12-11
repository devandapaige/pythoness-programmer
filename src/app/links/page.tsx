import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import CopyField from '@/components/CopyField'

export const metadata: Metadata = {
  title: 'Connect with Amanda | Pythoness Programmer',
  description: 'Connect with Amanda through various platforms. We are currently in rest mode. Services will resume March 2026.',
}

// Define interface for link objects
interface LinkItem {
  name: string;
  url: string;
  color: string;
  icon?: string;
  boldPart?: string;
}

// Social media links - easy to update
const socialLinks: LinkItem[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/devandapaige',
    color: 'bg-white/10 hover:bg-white/20',
    icon: '/icons/github.svg'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@pythonessprogrammer',
    color: 'bg-white/10 hover:bg-white/20',
    icon: '/icons/youtube.svg'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@pythoness_programmer',
    color: 'bg-white/10 hover:bg-white/20',
    icon: '/icons/tiktok.svg'
  },
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/pythonessdev.bsky.social',
    color: 'bg-white/10 hover:bg-white/20',
    icon: '/icons/bluesky.svg'
  },
]

// Resource links - easy to update
const resourceLinks: LinkItem[] = [
  {
    name: 'Digital Accessibility Legal Guide',
    url: '/accessibility',
    color: 'bg-brand-purple-light text-black hover:bg-brand-purple-light/90'
  },
  {
    name: 'Mindful Automation',
    url: '/mindful-automation',
    color: 'bg-brand-purple-light text-black hover:bg-brand-purple-light/90'
  },
  {
    name: 'AI Myth-Busting',
    url: '/ai-mythbusting',
    color: 'bg-brand-purple-light text-black hover:bg-brand-purple-light/90'
  },
  {
    name: 'Sourdough Corner',
    url: '/sourdough',
    color: 'bg-brand-purple-light text-black hover:bg-brand-purple-light/90'
  },
  {
    name: 'Digital Spring Cleaning',
    url: '/digital-spring-cleaning',
    color: 'bg-brand-purple-light text-black hover:bg-brand-purple-light/90'
  }
]

// Support links section
const supportLinks: LinkItem[] = [
  {
    name: 'One-Time Tip ☕',
    url: 'https://buy.stripe.com/eVaeWq6303RIejK28g',
    color: 'bg-white/10 hover:bg-white/20'
  },
  {
    name: 'Amazon Wishlist 🛍️',
    url: 'https://www.amazon.com/hz/wishlist/ls/1ZXXDBUXYDDOC?ref_=wl_share',
    color: 'bg-brand-purple-light text-brand-purple-dark hover:bg-opacity-90'
  }
]

// Shop links section
const shopLinks: LinkItem[] = [
  {
    name: 'Sticky Spells Store - Etsy',
    url: 'https://stickyspells.etsy.com',
    color: 'bg-brand-purple-light text-brand-purple-dark hover:bg-opacity-90'
  }
]

// Media links section
const mediaLinks: LinkItem[] = [
  {
    name: 'Newsletter',
    url: 'https://newsletter.pythonessprogrammer.com/subscribe',
    color: 'bg-brand-purple-light/20 hover:bg-brand-purple-light/30'
  },
  {
    name: 'AI Generation Experiments Substack',
    url: 'https://pythoness.substack.com',
    color: 'bg-brand-purple-light/20 hover:bg-brand-purple-light/30'
  },
  {
    name: 'Current Music Rotation',
    url: 'https://open.spotify.com/playlist/19jEmPqzZqp4zH8uyF7uCS?si=d413cc41fba54edc',
    color: 'bg-brand-purple-light/20 hover:bg-brand-purple-light/30'
  },
  {
    name: 'Working Lo-Fi Playlist',
    url: 'https://open.spotify.com/playlist/6aZF7YvZTVkfqU2JC0HWQo?si=01d86ac4bd8347ac',
    color: 'bg-brand-purple-light/20 hover:bg-brand-purple-light/30'
  }
]

// Read links section
const readLinks: LinkItem[] = [
  {
    name: 'Blog',
    url: '/blog',
    color: 'bg-brand-purple-light/20 hover:bg-brand-purple-light/30'
  },
  {
    name: 'Newsletter',
    url: 'https://newsletter.pythonessprogrammer.com/',
    color: 'bg-brand-purple-light/20 hover:bg-brand-purple-light/30'
  }
]

// Affiliate links section - ready for future expansion
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const affiliateLinks: LinkItem[] = [
  // This section is ready for future affiliate links
]

// Legal links section
const legalLinks: LinkItem[] = [
  {
    name: 'Privacy Policy',
    url: '/privacy-policy',
    color: 'bg-brand-purple-dark/40 backdrop-blur-md border border-white/10 hover:bg-brand-purple-dark/60 text-white shadow-lg hover:shadow-xl transition-all duration-300'
  },
  {
    name: 'Terms of Service',
    url: '/terms',
    color: 'bg-brand-purple-dark/40 backdrop-blur-md border border-white/10 hover:bg-brand-purple-dark/60 text-white shadow-lg hover:shadow-xl transition-all duration-300'
  }
]

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-brand-purple-dark text-white py-12 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="mb-4 relative mx-auto">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-brand-purple-light relative mx-auto">
              <Image 
                src="/images/headshot.png" 
                alt="Pythoness Programmer" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="font-display text-3xl md:text-4xl text-white mb-2">Pythoness Programmer</h1>
          </Link>
          <p className="text-white/80 max-w-md mx-auto mb-4">
            Digital Psychic sessions that help you solve your own tech challenges through pattern recognition, spiritual insight, and deep technical understanding. As a Software Engineer, I offer async video readings and live 1:1 sessions.
          </p>
          <div className="bg-brand-purple-light/20 backdrop-blur-sm rounded-lg p-4 border border-brand-purple-light/30 max-w-md mx-auto">
            <p className="text-white/90 text-sm mb-2">
              <strong>Current Status:</strong> Rest Mode
            </p>
            <p className="text-white/80 text-xs">
              Services resume <strong>March 2026</strong>. Active season: March - November 2026.
            </p>
          </div>
        </div>

        {/* Support Banner Section */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 max-w-md mx-auto">
            <h2 className="font-display text-xl text-white mb-3">Keep Free Resources Flowing</h2>
            <p className="text-white/80 text-sm mb-4">
              Every tutorial, guide, and tool I create is free. Your support makes that possible and ensures 
              these resources stay accessible for everyone.
            </p>
            <Link
              href="/support"
              className="bg-brand-purple-light text-brand-purple-dark px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-block mb-4"
            >
              Support the Pythoness
            </Link>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <p className="text-white/80 text-sm mb-3">where to find me</p>
              <div className="flex justify-center items-center space-x-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${link.color} w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-purple-light focus:ring-offset-2 focus:ring-offset-brand-purple-dark`}
                    aria-label={link.name}
                  >
                    {link.icon && (
                      <Image
                        src={link.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Links Container */}
        <div className="w-full space-y-8">
          {/* Featured Service - Rest Mode */}
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-white text-center">Featured Service</h2>
            <p className="text-white/80 text-center text-sm mb-2">
              Get a personalized Digital Psychic reading delivered asynchronously. Perfect for when you need insights 
              on your project or web presence but prefer to watch on your own time.
            </p>
            <p className="text-white/60 text-center text-xs mb-4">20-minute video reading - no live meeting required</p>
            <div className="bg-brand-purple-light/20 backdrop-blur-sm rounded-lg p-6 border border-brand-purple-light/30 text-center">
              <p className="text-white/90 text-sm mb-2">
                Available starting <strong>March 2026</strong>
              </p>
              <p className="text-white/80 text-xs">
                Subscribe to our newsletter to be the first to know when services resume.
              </p>
              <Link
                href="https://newsletter.pythonessprogrammer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-brand-purple-light text-brand-purple-dark px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>

          {/* Booking Links - Rest Mode Notice */}
          <div className="space-y-3">
            <h2 className="font-display text-xl text-white text-center">Live 1:1 Digital Psychic Sessions</h2>
            <p className="text-white/80 text-center text-sm mb-3">
              Connect live for real-time guidance on your tech challenges. These interactive sessions combine 
              pattern recognition, spiritual insight, and deep technical understanding to help you solve problems 
              and move forward with confidence.
            </p>
            <div className="bg-brand-purple-light/20 backdrop-blur-sm rounded-lg p-6 border border-brand-purple-light/30 text-center">
              <p className="text-white/90 text-sm mb-2">
                Services resume <strong>March 2026</strong>
              </p>
              <p className="text-white/80 text-xs mb-4">
                Subscribe to our newsletter to be the first to know when our schedule reopens.
              </p>
              <Link
                href="https://newsletter.pythonessprogrammer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-purple-light text-brand-purple-dark px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          {shopLinks.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-xl text-white text-center">Shop</h2>
              <div className="space-y-3">
                {shopLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${link.color} py-2.5 md:py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-purple-light focus:ring-offset-2 focus:ring-offset-brand-purple-dark font-medium`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Read Links */}
          <div className="space-y-3">
            <h2 className="font-display text-xl text-white text-center">Read</h2>
            <div className="space-y-3">
              {readLinks.slice().reverse().map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${link.color} py-2.5 md:py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-purple-light focus:ring-offset-2 focus:ring-offset-brand-purple-dark`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Listen Links */}
          <div className="space-y-3">
            <h2 className="font-display text-xl text-white text-center">Listen</h2>
            <div className="space-y-3">
              {mediaLinks.filter(link => link.name !== 'Current Music Rotation' && link.name !== 'Newsletter').map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${link.color} py-2.5 md:py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-purple-light focus:ring-offset-2 focus:ring-offset-brand-purple-dark`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Spotify Embed */}
            <div className="mt-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-4 shadow-lg">
                <iframe 
                  style={{borderRadius: '12px'}} 
                  src="https://open.spotify.com/embed/playlist/19jEmPqzZqp4zH8uyF7uCS?utm_source=generator&theme=0" 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>

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
                    className={`block ${link.color} py-2.5 md:py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-purple-light focus:ring-offset-2 focus:ring-offset-brand-purple-dark`}
                  >
                    {link.boldPart ? (
                      <>
                        {link.name.split(link.boldPart)[0]}
                        <span className="font-bold">{link.boldPart}</span>
                        {link.name.split(link.boldPart)[1]}
                      </>
                    ) : (
                      link.name
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Support Links section - moved to bottom */}
          {supportLinks.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-xl text-white text-center">Support</h2>
              <p className="text-white/80 text-sm text-center mb-3">
                Whether it&apos;s the price of a coffee or a monthly contribution, your support directly fuels 
                more free content for the community. Every amount makes a difference.
              </p>
              {/* Direct support usernames */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <CopyField
                  label="Cash App"
                  value="$ANCreative"
                  ariaLabel="Cash App username"
                  copyButtonClassName="shrink-0 rounded-md px-3 py-2 bg-brand-purple-light text-brand-purple-dark hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple-light"
                />
                <CopyField
                  label="Venmo"
                  value="@ANCreative"
                  ariaLabel="Venmo username"
                  copyButtonClassName="shrink-0 rounded-md px-3 py-2 bg-brand-purple-light text-brand-purple-dark hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple-light"
                />
                <CopyField
                  label="Zelle"
                  value="hello@amanda-nelson.com"
                  ariaLabel="Zelle email address"
                  copyButtonClassName="shrink-0 rounded-md px-3 py-2 bg-brand-purple-light text-brand-purple-dark hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple-light"
                />
              </div>
              <div className="space-y-3">
                {supportLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${link.color} py-2.5 md:py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-purple-light focus:ring-offset-2 focus:ring-offset-brand-purple-dark font-medium`}
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
              className="inline-flex items-center text-brand-purple-light hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple-light focus:ring-offset-2 focus:ring-offset-brand-purple-dark"
            >
              <span>Visit my website →</span>
            </Link>
            <div className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="block text-brand-purple-light hover:text-brand-purple-light/80 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
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
