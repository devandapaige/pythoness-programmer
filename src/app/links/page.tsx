import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import CopyField from '@/components/CopyField'

export const metadata: Metadata = {
  title: 'Connect with Amanda | Pythoness Programmer',
  description: 'Connect with Amanda through various platforms. Book Software Psychic sessions, find resources, and stay in touch.',
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
    name: 'Bluesky',
    url: 'https://bsky.app/profile/pythonessdev.bsky.social',
    color: 'bg-white/10 hover:bg-white/20',
    icon: '/icons/bluesky.svg'
  },
  {
    name: 'Mastodon',
    url: 'https://mastodon.social/@devandapaige',
    color: 'bg-white/10 hover:bg-white/20',
    icon: '/icons/mastodon.svg'
  },
  {
    name: 'Fable',
    url: 'https://fable.co/fabler/pythoness-programmer-506807855588',
    color: 'bg-white/10 hover:bg-white/20',
    icon: '/icons/fable.svg'
  },
]

// Resource links - easy to update
const resourceLinks: LinkItem[] = [
  {
    name: 'Digital Accessibility Legal Guide',
    url: '/accessibility',
    color: 'bg-brand-green-accent text-black hover:bg-brand-green-accent/90'
  },
  {
    name: 'Mindful Automation',
    url: '/mindful-automation',
    color: 'bg-brand-green-accent text-black hover:bg-brand-green-accent/90'
  },
  {
    name: 'AI Myth-Busting',
    url: '/ai-mythbusting',
    color: 'bg-brand-green-accent text-black hover:bg-brand-green-accent/90'
  },
  {
    name: 'Sourdough Corner',
    url: '/sourdough',
    color: 'bg-brand-green-accent text-black hover:bg-brand-green-accent/90'
  },
  {
    name: 'Digital Spring Cleaning',
    url: '/digital-spring-cleaning',
    color: 'bg-brand-green-accent text-black hover:bg-brand-green-accent/90'
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
    name: 'Throne Wishlist 🛍️',
    url: 'https://throne.com/pythoness_programmer',
    color: 'bg-brand-green-accent text-black hover:bg-opacity-90'
  }
]

// Shop links section
const shopLinks: LinkItem[] = [
  {
    name: 'Sticky Spells Store - Etsy',
    url: 'https://stickyspells.etsy.com',
    color: 'bg-brand-green-accent text-black hover:bg-opacity-90'
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

// Affiliate/referral links section
const affiliateLinks: LinkItem[] = [
  {
    name: 'Join Fable - Book & TV Social App',
    url: 'https://fable.co/invite/?referralID=YK5IPnrfEW',
    color: 'bg-brand-green-accent/20 hover:bg-brand-green-accent/30'
  },
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
          <p className="text-white/80 max-w-md mx-auto mb-4">
            Digital Psychic sessions that help you solve your own tech challenges through pattern recognition, spiritual insight, and deep technical understanding. As a Software Engineer, I offer async video readings and live 1:1 sessions.
          </p>
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
              className="bg-brand-green-accent text-brand-green-dark px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-block mb-4"
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
          {/* Featured Service - Async */}
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-white text-center">Featured Service</h2>
            <p className="text-white/80 text-center text-sm mb-2">
              Get a personalized Software Psychic reading delivered asynchronously. Perfect for when you need insights
              on your project or web presence but prefer to watch on your own time.
            </p>
            <p className="text-white/60 text-center text-xs mb-4">20-minute video reading - no live meeting required</p>
            <Link
              href="https://cal.com/pythoness/async"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-brand-green-accent/20 backdrop-blur-sm rounded-lg p-6 border border-brand-green-accent/30 text-center hover:bg-brand-green-accent/30 transition-colors"
            >
              <span className="text-brand-green-accent font-semibold">Book Async Reading — $30</span>
            </Link>
          </div>

          {/* Booking Links - Live 1:1 */}
          <div className="space-y-3">
            <h2 className="font-display text-xl text-white text-center">Live 1:1 Software Psychic Sessions</h2>
            <p className="text-white/80 text-center text-sm mb-3">
              Connect live for real-time guidance on your tech challenges. These interactive sessions combine
              pattern recognition, spiritual insight, and deep technical understanding to help you solve problems
              and move forward with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://cal.com/pythoness/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-green-accent text-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-center"
              >
                Book 20-Min Session — $30
              </Link>
              <Link
                href="https://cal.com/pythoness/60min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-green-accent/80 text-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-center"
              >
                Book 60-Min Session — $60
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
                Whether it&apos;s the price of a coffee or a monthly contribution, your support directly fuels 
                more free content for the community. Every amount makes a difference.
              </p>
              {/* Direct support usernames */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <CopyField
                  label="Cash App"
                  value="$ANCreative"
                  ariaLabel="Cash App username"
                  copyButtonClassName="shrink-0 rounded-md px-3 py-2 bg-brand-green-accent text-brand-green-dark hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent"
                />
                <CopyField
                  label="Venmo"
                  value="@ANCreative"
                  ariaLabel="Venmo username"
                  copyButtonClassName="shrink-0 rounded-md px-3 py-2 bg-brand-green-accent text-brand-green-dark hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent"
                />
                <CopyField
                  label="Zelle"
                  value="hello@amanda-nelson.com"
                  ariaLabel="Zelle email address"
                  copyButtonClassName="shrink-0 rounded-md px-3 py-2 bg-brand-green-accent text-brand-green-dark hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent"
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

          {/* Affiliate/Referral Links */}
          {affiliateLinks.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-xl text-white text-center">Referral Links</h2>
              <div className="space-y-3">
                {affiliateLinks.map((link) => (
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
              <p className="text-white/50 text-xs text-center">
                These are referral links. I may receive credit or a small benefit if you sign up through them. I only share services I personally use and enjoy.
              </p>
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
                  className="block text-brand-green-accent hover:text-brand-green-accent/80 text-sm transition-colors"
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
