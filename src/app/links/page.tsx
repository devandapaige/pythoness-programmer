import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import CopyField from '@/components/CopyField'

export const metadata: Metadata = {
  title: 'Connect with Amanda | Pythoness Programmer',
  description: 'Connect with Amanda through various platforms, book calls, and access free resources.',
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

// Featured async service
const featuredService: LinkItem = {
  name: 'Async Project & Web Presence Reading - $30',
  url: 'https://cal.com/pythoness/async',
  color: 'bg-gradient-to-r from-brand-purple-light to-brand-cream text-brand-purple-dark border-2 border-brand-purple-accent font-semibold'
}

// Booking links - easy to update
const bookingLinks: LinkItem[] = [
  {
    name: '20min Software Psychic Session',
    url: 'https://cal.com/pythoness/20min',
    color: 'bg-brand-green-accent text-brand-green-dark'
  },
  {
    name: '60min Software Psychic Session',
    url: 'https://cal.com/pythoness/60min',
    color: 'bg-brand-green-accent text-brand-green-dark'
  }
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
    name: 'Tip the Pythoness ☕',
    url: 'https://buy.stripe.com/eVaeWq6303RIejK28g',
    color: 'bg-white/10 hover:bg-white/20'
  },
  {
    name: 'Amazon Wishlist 🛍️',
    url: 'https://www.amazon.com/hz/wishlist/ls/1ZXXDBUXYDDOC?ref_=wl_share',
    color: 'bg-brand-purple-light text-black hover:bg-brand-purple-light/90'
  }
]

// Shop links section
const shopLinks: LinkItem[] = [
  {
    name: 'Sticky Spells Store',
    url: 'https://stickyspells.etsy.com',
    color: 'bg-brand-green-accent text-brand-green-dark hover:bg-brand-green-accent/90'
  }
]

// Media links section
const mediaLinks: LinkItem[] = [
  {
    name: 'Newsletter',
    url: 'https://newsletter.pythonessprogrammer.com/subscribe',
    color: 'bg-brand-green-accent/20 hover:bg-brand-green-accent/30'
  },
  {
    name: 'NotebookLM Podcast',
    url: 'https://pythoness.substack.com/podcast',
    color: 'bg-brand-green-accent/20 hover:bg-brand-green-accent/30'
  },
  {
    name: 'Current Music Rotation',
    url: 'https://open.spotify.com/playlist/19jEmPqzZqp4zH8uyF7uCS?si=d413cc41fba54edc',
    color: 'bg-brand-green-accent/20 hover:bg-brand-green-accent/30'
  },
  {
    name: 'Working Lo-Fi Playlist',
    url: 'https://open.spotify.com/playlist/6aZF7YvZTVkfqU2JC0HWQo?si=01d86ac4bd8347ac',
    color: 'bg-brand-green-accent/20 hover:bg-brand-green-accent/30'
  }
]

// Read links section
const readLinks: LinkItem[] = [
  {
    name: 'Blog',
    url: '/blog',
    color: 'bg-brand-green-accent/20 hover:bg-brand-green-accent/30'
  },
  {
    name: 'Newsletter',
    url: 'https://newsletter.pythonessprogrammer.com/',
    color: 'bg-brand-green-accent/20 hover:bg-brand-green-accent/30'
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
    color: 'bg-brand-green-dark/40 backdrop-blur-md border border-white/10 hover:bg-brand-green-dark/60 text-white shadow-lg hover:shadow-xl transition-all duration-300'
  },
  {
    name: 'Terms of Service',
    url: '/terms',
    color: 'bg-brand-green-dark/40 backdrop-blur-md border border-white/10 hover:bg-brand-green-dark/60 text-white shadow-lg hover:shadow-xl transition-all duration-300'
  }
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
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="font-display text-3xl md:text-4xl text-white mb-2">Pythoness Programmer</h1>
          </Link>
          <p className="text-white/80 max-w-md mx-auto">
            Software Psychic Sessions that help you solve your own tech challenges through pattern recognition, spiritual insight, and deep technical understanding. From async video readings to live 1:1 sessions.
          </p>
        </div>

        {/* Support Banner Section */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 max-w-md mx-auto">
            <h2 className="font-display text-xl text-white mb-3">Support Needed</h2>
            <p className="text-white/80 text-sm mb-4">
              Government shutdown impact - help keep this digital psychic quest alive!
            </p>
            <Link
              href="/support"
              className="bg-brand-green-accent text-brand-green-dark px-6 py-3 rounded-lg font-medium hover:bg-brand-green-accent/90 transition-colors inline-block mb-4"
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
                    className={`block ${link.color} w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark`}
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
          {/* Featured Service */}
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-white text-center">Featured Service</h2>
            <p className="text-white/80 text-center text-sm mb-4">20-minute video reading - no live meeting</p>
            <Link
              href={featuredService.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${featuredService.color} py-4 md:py-5 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark font-medium shadow-lg`}
            >
              {featuredService.name}
            </Link>
          </div>

          {/* Booking Links */}
          {bookingLinks.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-xl text-white text-center">Live 1:1 Sessions</h2>
              <div className="space-y-3">
                {bookingLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${link.color} py-2.5 md:py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark font-medium`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

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
                    className={`block ${link.color} py-2.5 md:py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark font-medium`}
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
                  className={`block ${link.color} py-2.5 md:py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark`}
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
                  className={`block ${link.color} py-2.5 md:py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark`}
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
                    className={`block ${link.color} py-2.5 md:py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark`}
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
                Help keep this digital psychic quest alive during the shutdown!
              </p>
              {/* Direct support usernames */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <CopyField
                  label="Cash App"
                  value="$ANCreative"
                  ariaLabel="Cash App username"
                />
                <CopyField
                  label="Venmo"
                  value="@ANCreative"
                  ariaLabel="Venmo username"
                />
                <CopyField
                  label="Zelle"
                  value="hello@amanda-nelson.com"
                  ariaLabel="Zelle email address"
                />
              </div>
              <div className="space-y-3">
                {supportLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${link.color} py-2.5 md:py-3 px-6 rounded-lg text-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 focus:ring-offset-brand-green-dark font-medium`}
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
