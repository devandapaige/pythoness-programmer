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
            Your support keeps me on my digital psychic quest, making tech accessible and empowering for everyone.
          </p>
        </div>

        {/* Personal Story Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8 max-w-2xl">
          <h2 className="font-display text-xl text-white mb-4 text-center">Why Your Support Matters Right Now</h2>
          <div className="text-white/90 space-y-4 text-left">
            <p>
              We&apos;re currently in a government shutdown, and I&apos;ve been out of work since January 2025. This is all I do now. 
              As someone navigating the SSDI process while my husband works as a federal employee, our income depends on 
              government budget approvals. We&apos;re in the middle of another long furlough with no end in sight.
            </p>
            <p>
              I have no 401K, no savings to fall back on. Your contributions literally help me pay my bills, keep the lights on, 
              continue my research into accessible technology, and yes, keep my cats fed with their favorite treats. 
              More importantly, they let me keep creating content, tools, and resources that make technology more approachable 
              for neurodivergent folks and everyone who&apos;s ever felt overwhelmed by the digital world.
            </p>
            <p className="text-brand-green-accent font-medium">
              Every coffee, every tip, every share makes a real difference in keeping this mission alive during this difficult time.
            </p>
          </div>
        </div>

        {/* Support Links section */}
        <div className="w-full space-y-8">
          {supportLinks.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-xl text-white text-center">Ways to Support</h2>
              <p className="text-white/80 text-sm text-center mb-3">
                Every contribution, no matter the size, helps keep this mission going.
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
