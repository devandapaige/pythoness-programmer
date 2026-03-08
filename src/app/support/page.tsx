import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import CopyField from '@/components/CopyField'

export const metadata: Metadata = {
  title: 'Support the Pythoness | Pythoness Programmer',
  description: 'Support the Pythoness Programmer through tips, donations, and other ways to show appreciation for the work.',
}

// Define interface for link objects
interface LinkItem {
  name: string;
  url: string;
  color: string;
  icon?: string;
  boldPart?: string;
}

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

export default function SupportPage() {
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
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            All my digital resources are free—and I keep it that way. Your support helps me sustain that without putting guides or tools behind a paywall.
          </p>
        </div>

        {/* Value Proposition Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8 max-w-2xl">
          <h2 className="font-display text-xl text-white mb-4 text-center">Free Resources, No Catch</h2>
          <div className="text-white/90 space-y-4 text-left">
            <p>
              Every digital resource I make is free: the <Link href="/accessibility" className="text-brand-green-accent hover:underline">accessibility legal guide</Link>, 
              <Link href="/mindful-automation" className="text-brand-green-accent hover:underline">mindful automation</Link> and <Link href="/digital-spring-cleaning" className="text-brand-green-accent hover:underline">digital spring cleaning</Link> guides, 
              <Link href="/back-to-basics" className="text-brand-green-accent hover:underline">back-to-basics</Link> and <Link href="/passwords" className="text-brand-green-accent hover:underline">password security</Link> resources, the <Link href="/blog" className="text-brand-green-accent hover:underline">blog</Link>, 
              <Link href="https://newsletter.pythonessprogrammer.com/" target="_blank" rel="noopener noreferrer" className="text-brand-green-accent hover:underline"> newsletter</Link>, and anything else I publish here. No paywalls, no &quot;free tier&quot; that gets worse later—they stay free.
            </p>
            <p>
              I monetize through optional support (tips, wishlist) and paid sessions (Software Psychic, async readings). 
              That way I can keep a living without breaking the promise that the resources themselves stay free for everyone.
            </p>
            <p>
              When you send a tip or use the wishlist, you&apos;re helping me:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-white/90">
              <li>Keep all existing guides and tools free and available</li>
              <li>Add new free resources without turning them into paid products</li>
              <li>Maintain and improve what&apos;s already there</li>
              <li>Stay sustainable so I don&apos;t have to gate the free stuff later</li>
            </ul>
            <p className="text-brand-green-accent font-medium">
              Supporting this work means the free resources stay free—and I can keep making more without changing that.
            </p>
          </div>
        </div>

        {/* Support Links section */}
        <div className="w-full space-y-8">
          {supportLinks.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-xl text-white text-center">Choose Your Support Method</h2>
              <p className="text-white/80 text-sm text-center mb-3">
                Tips and wishlist gifts help me keep all my digital resources free. Every bit makes a difference.
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
