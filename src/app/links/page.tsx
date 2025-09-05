import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import CopyField from '@/components/CopyField'
import AddEventCalendar from '@/components/AddEventCalendar'

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
  {
    name: 'Slack',
    url: 'https://join.slack.com/t/pythoness-network/shared_invite/zt-39an3ft5g-aECsS7ST9aapySR9yGewZw',
    color: 'bg-white/10 hover:bg-white/20',
    icon: '/icons/slack-alt-svgrepo-com.svg'
  }
]

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
    name: 'Slack Community: Pythoness Network',
    url: '/network',
    color: 'bg-brand-green-dark text-white border-2 border-brand-green-accent hover:bg-brand-green-dark/90 hover:border-brand-green-accent/80',
    boldPart: 'Pythoness Network'
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
  }
]

// Shop links section
const shopLinks: LinkItem[] = [
  {
    name: 'Sticky Spells Store',
    url: 'https://www.pythoness.shop',
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
            Software Psychic Sessions that help you solve your own tech challenges through pattern recognition, spiritual insight, and deep technical understanding. From quick guidance to extended problem-solving.
          </p>
        </div>

        {/* Combined Calendar & Connect Section */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 max-w-md mx-auto">
            <h2 className="font-display text-xl text-white mb-3">Stay Updated & Connect</h2>
            <p className="text-white/80 text-sm mb-4">
              Add my Calendar to yours to stay up to date on my TikTok lives, Workshops, Co-Working Sessions, and more.
            </p>
            <AddEventCalendar>
              <div 
                title="Add to Calendar" 
                className="addeventstc bg-brand-green-accent text-brand-green-dark px-6 py-3 rounded-lg font-medium hover:bg-brand-green-accent/90 transition-colors cursor-pointer inline-block mb-4"
                data-styling="none" 
                data-id="em600805"
              >
                Add to Calendar
                <span className="addeventstc_icon ml-2"></span>
              </div>
            </AddEventCalendar>
            
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
                    {link.icon && link.name === 'Slack' ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="w-5 h-5 text-white">
                        <path d="M23,9.5A3.50424,3.50424,0,0,0,19.5,6a3.45946,3.45946,0,0,0-1.5.35107V4.5a3.49466,3.49466,0,0,0-6-2.44171A3.48676,3.48676,0,0,0,6.35107,6H4.5a3.49466,3.49466,0,0,0-2.44171,6A3.48676,3.48676,0,0,0,6,17.64893V19.5a3.49466,3.49466,0,0,0,6,2.44171A3.48676,3.48676,0,0,0,17.64893,18H19.5a3.49466,3.49466,0,0,0,2.44171-6A3.48559,3.48559,0,0,0,23,9.5Zm-10-5a1.5,1.5,0,0,1,3,0v5a1.5,1.5,0,0,1-3,0Zm-7,10A1.5,1.5,0,1,1,4.5,13H6Zm5,5a1.5,1.5,0,0,1-3,0v-5a1.5,1.5,0,0,1,3,0ZM9.5,11h-5a1.5,1.5,0,0,1,0-3h5a1.5,1.5,0,0,1,0,3ZM11,6H9.5A1.5,1.5,0,1,1,11,4.5Zm1,6.05829c-.01935-.01978-.03851-.03894-.05829-.05829.01978-.01935.03894-.03851.05829-.05829.01935.01978.03851.03894.05829.05829C12.03851,12.01935,12.01935,12.03851,12,12.05829ZM14.5,21A1.50164,1.50164,0,0,1,13,19.5V18h1.5a1.5,1.5,0,0,1,0,3Zm5-5h-5a1.5,1.5,0,0,1,0-3h5a1.5,1.5,0,0,1,0,3Zm0-5H18V9.5A1.5,1.5,0,1,1,19.5,11Z"/>
                      </svg>
                    ) : link.icon && (
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
                If you enjoy my work, you can buy me a coffee!
              </p>
              {/* Direct support usernames */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
