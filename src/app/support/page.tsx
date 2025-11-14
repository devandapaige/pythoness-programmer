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
            Every resource I create is free. Every tutorial, every tool, every insight—available to anyone who needs it. 
            Your support makes that possible.
          </p>
        </div>

        {/* Value Proposition Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8 max-w-2xl">
          <h2 className="font-display text-xl text-white mb-4 text-center">Keep the Free Resources Flowing</h2>
          <div className="text-white/90 space-y-4 text-left">
            <p>
              I believe technology education should be accessible to everyone—no paywalls, no gatekeeping, no barriers. 
              That&apos;s why everything I create is free: coding tutorials, accessibility guides, neurodivergent-friendly tools, 
              and resources that help people navigate the digital world with confidence.
            </p>
            <p>
              Creating high-quality, free content takes time, research, and resources. Your support directly enables me to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-white/90">
              <li>Continue producing free tutorials and guides</li>
              <li>Develop new tools and resources for the community</li>
              <li>Research and share accessibility best practices</li>
              <li>Maintain and improve existing free resources</li>
              <li>Keep creating content that makes tech less intimidating</li>
            </ul>
            <p className="text-brand-green-accent font-medium">
              When you support this work, you&apos;re not just supporting me—you&apos;re ensuring these resources stay free 
              and accessible for everyone who needs them.
            </p>
          </div>
        </div>

        {/* Support Links section */}
        <div className="w-full space-y-8">
          {supportLinks.length > 0 && (
            <div className="space-y-3">
              <h2 className="font-display text-xl text-white text-center">Choose Your Support Method</h2>
              <p className="text-white/80 text-sm text-center mb-3">
                Whether it&apos;s the price of a coffee or a monthly contribution, your support directly fuels more free content 
                for the community. Every amount makes a difference.
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
