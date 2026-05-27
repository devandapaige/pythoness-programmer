import Link from 'next/link'
import { ReactNode } from 'react'
import ExternalLink from '@/components/a11y/ExternalLink'
import { bookingUrls } from '../config/booking'

function FooterSection({ title, children }: { title: string | ReactNode, children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <h3 className="font-display text-base md:text-lg text-white mb-0.5">{title}</h3>
      {children}
    </div>
  );
}

export default function Footer() {
  const footerLinkClass = "text-white/80 hover:text-brand-green-accent transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded px-1 py-0.5 text-sm";
  const footerInlineLinkClass = "text-white/80 hover:text-brand-green-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2 rounded px-1 py-0.5 text-sm";

  return (
    <footer 
      className="site-gutter bg-brand-green-dark text-white"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 md:gap-x-10 pb-3 md:pb-3">
          <FooterSection title={
              <Link href="/" className="hover:text-brand-green-accent transition-colors">
              Pythoness Programmer
            </Link>
          }>
            <ul className="space-y-1">
              <li><Link href="/about" className={footerLinkClass}>About</Link></li>
              <li><Link href="/resources" className={footerLinkClass}>Resources</Link></li>
              <li><ExternalLink href="https://luma.com/pythoness" className={footerLinkClass}>Events</ExternalLink></li>
              <li><ExternalLink href="https://stickyspells.etsy.com" className={`${footerLinkClass} font-medium`}>Shop - Sticky Spells</ExternalLink></li>
            </ul>
          </FooterSection>
          <FooterSection title={
              <Link href="/links" className="hover:text-brand-green-accent transition-colors">
                Connect
              </Link>
          }>
            <ul className="space-y-1" aria-label="Social media links">
              <li><ExternalLink href="https://github.com/devandapaige" className={footerLinkClass}>GitHub</ExternalLink></li>
              <li><ExternalLink href="https://www.youtube.com/@pythonessprogrammer" className={footerLinkClass}>YouTube</ExternalLink></li>
              <li><ExternalLink href="https://bsky.app/profile/pythonessdev.bsky.social" className={footerLinkClass}>Bluesky</ExternalLink></li>
              <li><ExternalLink href="https://mastodon.social/@devandapaige" className={footerLinkClass}>Mastodon</ExternalLink></li>
              <li><ExternalLink href="https://fable.co/fabler/pythoness-programmer-506807855588" className={footerLinkClass}>Fable</ExternalLink></li>
            </ul>
          </FooterSection>
          <FooterSection title={
              <Link href="/services" className="hover:text-brand-green-accent transition-colors">
                Services
              </Link>
          }>
            <ul className="space-y-1" aria-label="Service links">
              <li><ExternalLink href={bookingUrls.async} className={footerLinkClass}>Async reflection — $75</ExternalLink></li>
              <li><ExternalLink href={bookingUrls.live20} className={footerLinkClass}>Live 20 min — $95</ExternalLink></li>
              <li><ExternalLink href={bookingUrls.deep60} className={footerLinkClass}>Deep dive 60 min — $255</ExternalLink></li>
            </ul>
          </FooterSection>
          <FooterSection title="Free Resources">
            <ul className="space-y-1" aria-label="Free resources">
              <li><Link href="/privacy-pleasure" className={footerLinkClass}>Privacy Pleasure</Link></li>
              <li><Link href="/passwords" className={footerLinkClass}>Password Security Guide</Link></li>
              <li><Link href="/digital-spring-cleaning" className={footerLinkClass}>Digital Spring Cleaning</Link></li>
              <li><Link href="/sourdough" className={footerLinkClass}>Sourdough Corner</Link></li>
              <li><Link href="/resources" className={footerLinkClass}>All Resources</Link></li>
            </ul>
          </FooterSection>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 md:gap-x-10 pb-2 md:pb-2">
          <FooterSection title="Legal">
            <ul className="space-y-1">
              <li><Link href="/privacy-policy" className={footerLinkClass}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={footerLinkClass}>Terms of Service</Link></li>
            </ul>
          </FooterSection>
          <FooterSection title="Support">
            <ul className="space-y-1" aria-label="Support options">
              <li><Link href="/support" className={footerLinkClass}>Support the Pythoness ☕</Link></li>
            </ul>
          </FooterSection>
          <FooterSection title="Content">
            <ul className="space-y-1" aria-label="Content options">
              <li><ExternalLink href="https://videos.pythonessprogrammer.com" className={`${footerLinkClass} font-semibold`}>Videos</ExternalLink></li>
            </ul>
          </FooterSection>
          <FooterSection title="Read">
            <ul className="space-y-1" aria-label="Read options">
              <li><Link href="/blog" className={footerLinkClass}>Lab Notes</Link></li>
              <li><Link href="/newsletter" className={footerLinkClass}>Pythoness Perspective (Mar–Nov)</Link></li>
            </ul>
          </FooterSection>
        </div>

        <div className="pt-3 mt-3 border-t border-white/10 w-full">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center w-full">
            <div>
              <p className="text-white/70 text-xs mb-1">© {new Date().getFullYear()} Pythoness Programmer. All rights reserved.</p>
              <p className="text-white/70 text-xs mb-1">Based in New Kent, Virginia crafting remote, digital services since 2018</p>
            </div>
            <div className="text-white/70 text-xs mt-2 md:mt-0">
              <ExternalLink
                href="https://github.com/devandapaige/pythoness-programmer"
                className={footerInlineLinkClass}
                aria-label="View site source on GitHub"
              >
                <svg className="inline w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
