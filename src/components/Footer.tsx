import Link from 'next/link'

function FooterSection({ title, children }: { title: string, children: React.ReactNode }) {
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
      className="bg-brand-green-dark text-white py-12 px-4 md:px-6"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        {/* First Row: Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-x-12 pb-4">
          {/* Brand Column */}
          <FooterSection title="Pythoness Programmer">
            <p className="text-white/80 text-sm">
              Crafting digital joy through code, coaching, and creativity.
            </p>
          </FooterSection>
          {/* Social Links */}
          <FooterSection title="Connect">
            <ul className="space-y-1" role="list" aria-label="Social media links">
              <li><Link href="https://github.com/devandapaige" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>GitHub</Link></li>
              <li><Link href="https://www.linkedin.com/in/pythonessprogrammer/" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>LinkedIn</Link></li>
              <li><Link href="https://www.youtube.com/@pythonessprogrammer" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>YouTube</Link></li>
              <li><Link href="https://www.tiktok.com/@pythoness_programmer" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>TikTok</Link></li>
              <li><Link href="https://bsky.app/profile/pythonessdev.bsky.social" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>Bluesky</Link></li>
              <li><Link href="https://pythoness.beehiiv.com/" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>Newsletter</Link></li>
            </ul>
          </FooterSection>
          {/* Calendar Links */}
          <FooterSection title="Book a Call">
            <ul className="space-y-1" role="list" aria-label="Booking options">
              <li><Link href="https://cal.com/pythoness/tech30" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>30min Tech Stack Audit</Link></li>
              <li><Link href="https://cal.com/pythoness/tech75" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>75min Deep Dive</Link></li>
            </ul>
            <p className="text-white/60 text-xs mt-1">Coming this summer: Group events and office hours! Stay tuned for updates.</p>
          </FooterSection>
          {/* Free Resources */}
          <FooterSection title="Free Resources">
            <ul className="space-y-1" role="list" aria-label="Free resources">
              <li><Link href="/vibe-coding-cheatsheet" className={footerLinkClass}>Vibe Coding Cheatsheet</Link></li>
              <li><Link href="/sourdough" className={footerLinkClass}>Sourdough Corner</Link></li>
              <li><Link href="/digital-spring-cleaning" className={footerLinkClass}>Digital Spring Cleaning</Link></li>
              <li><Link href="https://pythoness.substack.com/podcast" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>NotebookLM Podcast</Link></li>
            </ul>
          </FooterSection>
        </div>

        {/* Second Row: Legal & Support the Pythoness */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-x-4 pb-2">
          <FooterSection title="Legal">
            <ul className="space-y-1">
              <li><Link href="/privacy-policy" className={footerLinkClass}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={footerLinkClass}>Terms of Service</Link></li>
              <li><span className="text-white/60 text-sm">Richmond & New Kent, VA</span></li>
            </ul>
          </FooterSection>
          <FooterSection title="Support the Pythoness">
            <p className="text-white/80 text-sm mb-1">If you enjoy my work, you can buy me a coffee!</p>
            <ul className="space-y-1" role="list" aria-label="Support options">
              <li><Link href="https://buy.stripe.com/eVaeWq6303RIejK28g" target="_blank" rel="noopener noreferrer" className={footerLinkClass}>Tip the Pythoness ☕</Link></li>
              {/* <li><Link href="#" className={footerLinkClass + ' opacity-60 cursor-not-allowed'} aria-disabled="true">Become a Monthly Supporter 💚 (coming soon!)</Link></li> */}
            </ul>
          </FooterSection>
          <div></div>
          <div></div>
        </div>

        {/* Third Row: Copyright and Tech Stack */}
        <div className="pt-4 mt-4 border-t border-white/10 w-full" role="contentinfo">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center w-full">
            <div>
              <p className="text-white/60 text-xs mb-1">© {new Date().getFullYear()} Pythoness Programmer. All rights reserved.</p>
              <p className="text-white/60 text-xs mb-1">Richmond & New Kent, VA</p>
            </div>
            <div className="text-white/60 text-xs mt-2 md:mt-0">
              Crafted using{' '}
              <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className={footerInlineLinkClass}>Next.js</Link>
              {', '}
              <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className={footerInlineLinkClass}>Tailwind</Link>
              {', '}
              <Link href="https://contentlayer.dev" target="_blank" rel="noopener noreferrer" className={footerInlineLinkClass}>Contentlayer</Link>
              {', '}
              <Link href="https://mdxjs.com/" target="_blank" rel="noopener noreferrer" className={footerInlineLinkClass}>MDX</Link>
              {', '}
              <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={footerInlineLinkClass}>Vercel</Link>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 