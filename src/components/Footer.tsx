import Link from 'next/link'
import { ReactNode } from 'react'

function FooterSection({ title, children }: { title: string | ReactNode, children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="font-display text-lg text-white mb-1">{title}</h3>
      {children}
    </div>
  );
}

export default function Footer() {
  // 1. Add a single class for all footer links
  const footerLinkClass = "text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded px-1 py-0.5 text-sm";
  // Inline version for crafted using sentence
  const footerInlineLinkClass = "text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded px-1 py-0.5 text-sm";

  return (
    <footer 
      className="bg-brand-green-dark text-white py-8 md:py-12 px-4 md:px-6"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        {/* First Row: Main Sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:gap-x-12 pb-4 md:pb-4">
          {/* Brand Column */}
          <FooterSection title={
            <Link href="/" className="hover:text-brand-green-accent transition-colors">
              Pythoness Programmer
            </Link>
          }>
            <ul className="space-y-1">
              <li><Link href="/about" className={footerLinkClass}>About</Link></li>
              <li><Link href="/services" className={footerLinkClass}>Services</Link></li>
              <li><Link href="/resources" className={footerLinkClass}>Resources</Link></li>
              <li><Link href="https://www.pythoness.shop" target="_blank" rel="noopener noreferrer" className={`${footerLinkClass} font-medium`}>Shop - Sticky Spells</Link></li>
            </ul>
          </FooterSection>
          {/* Social Links */}
          <FooterSection title="Connect">
            <ul className="space-y-1" role="list" aria-label="Social media links">
              <li><Link href="https://github.com/devandapaige" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>GitHub</Link></li>
              <li><Link href="https://www.youtube.com/@pythonessprogrammer" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>YouTube</Link></li>
              <li><Link href="https://www.tiktok.com/@pythoness_programmer" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>TikTok</Link></li>
              <li><Link href="https://bsky.app/profile/pythonessdev.bsky.social" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>Bluesky</Link></li>
            </ul>
          </FooterSection>
          {/* Calendar Links */}
          <FooterSection title="Book a Call">
            <ul className="space-y-1" role="list" aria-label="Booking options">
              <li><Link href="https://cal.com/pythoness/async" target="_blank" rel="noopener noreferrer" className={`${footerLinkClass} font-semibold`}>Async Project & Web Presence Reading</Link></li>
              <li className="pt-2 pb-1"><span className="text-white/60 text-xs font-medium">1:1 Calls:</span></li>
              <li><Link href="https://cal.com/pythoness/20min" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>20min Software Psychic Session</Link></li>
              <li><Link href="https://cal.com/pythoness/60min" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>60min Software Psychic Session</Link></li>
            </ul>

          </FooterSection>
          {/* Free Resources */}
          <FooterSection title="Free Resources">
            <ul className="space-y-1" role="list" aria-label="Free resources">
              <li><Link href="/accessibility" className={footerLinkClass}>Accessibility Legal Guide</Link></li>
              <li><Link href="/ai-mythbusting" className={footerLinkClass}>AI Myth-Busting</Link></li>
              <li><Link href="/back-to-basics" className={footerLinkClass}>Back to Basics</Link></li>
              <li><Link href="/sourdough" className={footerLinkClass}>Sourdough Corner</Link></li>
              <li><Link href="/digital-spring-cleaning" className={footerLinkClass}>Digital Spring Cleaning</Link></li>
              <li><Link href="/mindful-automation" className={footerLinkClass}>Mindful Automation</Link></li>
            </ul>
          </FooterSection>
        </div>

        {/* Second Row: Legal, Support the Pythoness, Listen, Read */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:gap-x-12 pb-2 md:pb-2">
          <FooterSection title="Legal">
            <ul className="space-y-1">
              <li><Link href="/privacy-policy" className={footerLinkClass}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={footerLinkClass}>Terms of Service</Link></li>
              <li><span className="text-white/60 text-sm">Based in New Kent, Virginia crafting remote, digital services since 2018</span></li>
            </ul>
          </FooterSection>
          <FooterSection title="Support">
            <p className="text-white/80 text-sm mb-1">If you enjoy my work, you can buy me a coffee!</p>
            <ul className="space-y-1" role="list" aria-label="Support options">
              <li><Link href="https://buy.stripe.com/eVaeWq6303RIejK28g" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>Tip the Pythoness ☕</Link></li>
            </ul>
          </FooterSection>
          <FooterSection title="Listen">
            <ul className="space-y-1" role="list" aria-label="Listen options">
              <li><Link href="https://pythoness.substack.com/podcast" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>NotebookLM Podcast</Link></li>
            </ul>
          </FooterSection>
          <FooterSection title="Read">
            <ul className="space-y-1" role="list" aria-label="Read options">
              <li><Link href="/blog" className={footerLinkClass}>Blog</Link></li>
              <li><Link href="https://newsletter.pythonessprogrammer.com/" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>Newsletter</Link></li>
            </ul>
          </FooterSection>
        </div>

        {/* Third Row: Copyright and Tech Stack */}
        <div className="pt-4 mt-4 border-t border-white/10 w-full" role="contentinfo">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center w-full">
            <div>
              <p className="text-white/60 text-xs mb-1">© {new Date().getFullYear()} Pythoness Programmer. All rights reserved.</p>
              <p className="text-white/60 text-xs mb-1">Based in New Kent, Virginia crafting remote, digital services since 2018</p>
            </div>
            <div className="text-white/60 text-xs mt-2 md:mt-0">
              Crafted using{' '}
              <Link href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className={footerInlineLinkClass}>TypeScript</Link>
              {', '}
              <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className={footerInlineLinkClass}>Next.js</Link>
              {', '}
              <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className={footerInlineLinkClass}>Tailwind</Link>
              {', '}
              <Link href="https://mdxjs.com/" target="_blank" rel="noopener noreferrer" className={footerInlineLinkClass}>MDX</Link>
              {', '}
              <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={footerInlineLinkClass}>Vercel</Link>
              {' • '}
              <Link href="https://github.com/devandapaige/pythoness-programmer" target="_blank" rel="noopener noreferrer" className={footerInlineLinkClass}>
                <svg className="inline w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 