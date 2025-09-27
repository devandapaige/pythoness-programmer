import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import NewsletterSection from '../components/home/NewsletterSection'

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: 'Digital Accessibility Legal Guide: Starting Point for Business Owners - The Pythoness Programmer',
  description: 'Essential starting guide to digital accessibility laws, compliance requirements, and practical implementation for business owners. Legal framework, risk management, and actionable first steps.',
  openGraph: {
    title: 'Digital Accessibility Legal Guide: Starting Point for Business Owners',
    description: 'Essential accessibility compliance information for business owners. Legal requirements, implementation strategies, and free testing tools.',
    type: 'website',
    url: 'https://www.pythonessprogrammer.com/accessibility',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Accessibility Legal Guide: Starting Point for Business Owners',
    description: 'Essential accessibility compliance information for business owners. Legal requirements, implementation strategies, and free testing tools.',
  },
}

export default function AccessibilityPage(): ReactNode {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Hero Section */}
          <section className="mb-8 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-4 mt-0">
              Digital Accessibility Legal Guide
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-6 mt-0">
              A Starting Point for Business Owners
            </p>
            <div className="bg-brand-purple-accent/20 border-2 border-brand-purple-accent rounded-lg p-4 mb-6">
              <p className="text-white text-sm font-semibold">
                ⚠️ <strong className="text-brand-green-accent">LEGAL DISCLAIMER:</strong> This guide provides educational information about digital accessibility laws and requirements. It does not constitute legal advice and does not create an attorney-client relationship. For specific legal matters, consult with a qualified attorney licensed in your jurisdiction.
              </p>
            </div>
          </section>

          {/* The Accessibility Reality Section */}
          <section className="mb-8 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-4 text-brand-green-dark text-center">The Accessibility Reality Every Business Owner Faces</h2>
            <div className="text-center mb-6">
              <p className="text-2xl font-bold text-brand-green-dark mb-4">
                &ldquo;I had no idea my website could expose me to legal liability.&rdquo;
              </p>
              <p className="text-lg text-brand-green-dark">
                If this statement resonates with you, you&apos;re not alone. Many business owners discover digital accessibility requirements through unfortunate circumstances—receiving a demand letter, facing litigation, or watching competitors deal with legal challenges.
              </p>
            </div>
            <div className="bg-brand-purple-accent/10 border-2 border-brand-purple-accent rounded-lg p-6">
              <p className="text-lg text-brand-green-dark font-semibold text-center">
                The reality is stark: <span className="text-brand-purple-dark">15% of the global population has some form of disability.</span> When your digital presence isn&apos;t accessible, you&apos;re not only excluding potential customers—you&apos;re potentially exposing your business to legal liability that could threaten its viability.
              </p>
            </div>
            
            {/* Common Questions Answered */}
            <div className="mt-8 bg-brand-cream/50 border-2 border-brand-purple-light rounded-lg p-6">
              <h3 className="text-xl font-display text-brand-green-dark mb-4 text-center">Frequently Asked Questions</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-brand-green-dark mb-2">&ldquo;Does this apply to my small business?&rdquo;</h4>
                  <p className="text-brand-green-dark text-sm mb-4">Yes. There are no business size exemptions under ADA Title III. If you have a website that serves customers, you need to comply with accessibility standards.</p>
                  
                  <h4 className="font-semibold text-brand-green-dark mb-2">&ldquo;What if I just built my website?&rdquo;</h4>
                  <p className="text-brand-green-dark text-sm">New websites are not exempt. The ADA applies to all public accommodations, regardless of when they were created. However, it&apos;s much easier and less expensive to build accessibility in from the start.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-green-dark mb-2">&ldquo;How much will this cost me?&rdquo;</h4>
                  <p className="text-brand-green-dark text-sm mb-4">Costs vary widely, but many accessibility improvements are free or low-cost. The key is starting with simple fixes and building from there. Prevention is always cheaper than remediation.</p>
                  
                  <h4 className="font-semibold text-brand-green-dark mb-2">&ldquo;What if I can&apos;t afford to fix everything?&rdquo;</h4>
                  <p className="text-brand-green-dark text-sm">Start with the highest-impact, lowest-cost improvements. Document your efforts and create a plan for ongoing improvements. Courts look favorably on businesses making good-faith efforts to comply.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Coverage Areas */}
          <section className="mb-8 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center">Key Areas to Understand</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-purple-accent/10 border-2 border-brand-purple-accent rounded-lg p-6">
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">🏛️ Legal Framework and Compliance Requirements</h3>
                <ul className="text-brand-green-dark space-y-2">
                  <li><strong>Americans with Disabilities Act (ADA):</strong> Application to websites, email communications, and social media platforms</li>
                  <li><strong>European Accessibility Act (EAA):</strong> 2025 enforcement requirements affecting international businesses</li>
                  <li><strong>Web Content Accessibility Guidelines (WCAG) 2.1:</strong> Technical standards used by courts to assess compliance</li>
                  <li><strong>Case Law Analysis:</strong> Examination of actual litigation outcomes and their implications for businesses of all sizes</li>
                </ul>
              </div>

              <div className="bg-brand-purple-light/50 border-2 border-brand-purple-light rounded-lg p-6">
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">📧 Digital Marketing and Communication Accessibility</h3>
                <ul className="text-brand-green-dark space-y-2">
                  <li><strong>Email Marketing Compliance:</strong> Ensuring newsletters and promotional emails meet accessibility standards</li>
                  <li><strong>Social Media Platform Requirements:</strong> Platform-specific accessibility guidelines and best practices</li>
                  <li><strong>Content Strategy:</strong> Developing copy and visual content that serves diverse audiences</li>
                  <li><strong>Design Standards:</strong> Color contrast ratios, typography, and layout requirements for legal compliance</li>
                </ul>
              </div>

              <div className="bg-brand-green-accent/10 border-2 border-brand-green-accent rounded-lg p-6">
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">🛡️ Risk Management and Legal Protection</h3>
                <ul className="text-brand-green-dark space-y-2">
                  <li><strong>Liability Assessment:</strong> Understanding who bears responsibility for accessibility failures</li>
                  <li><strong>Insurance Considerations:</strong> Evaluating coverage limitations and gaps in accessibility-related claims</li>
                  <li><strong>Vendor Management:</strong> Protecting your business when working with third-party developers and designers</li>
                  <li><strong>Documentation Strategies:</strong> Creating comprehensive records that demonstrate compliance efforts</li>
                </ul>
              </div>

              <div className="bg-brand-purple-accent/10 border-2 border-brand-purple-accent rounded-lg p-6">
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">🚀 Practical Implementation Framework</h3>
                <ul className="text-brand-green-dark space-y-2">
                  <li><strong>Immediate Action Items:</strong> High-impact changes that can be implemented quickly</li>
                  <li><strong>Risk-Based Prioritization:</strong> Strategic approach to addressing issues based on legal exposure and business impact</li>
                  <li><strong>Testing and Validation:</strong> Methods for verifying that accessibility improvements are effective</li>
                  <li><strong>Sustainable Practices:</strong> Integrating accessibility considerations into ongoing business operations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Current Legal Landscape */}
          <section className="mb-8 mt-0 bg-gradient-to-br from-brand-purple-dark/30 to-brand-green-accent/30 border-2 border-brand-purple-dark rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-white text-center">Current Legal Landscape and Business Imperatives</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Rapidly Evolving Legal Environment</h3>
                <p className="text-brand-green-dark mb-4 font-semibold">Critical developments affecting businesses:</p>
                <ul className="text-brand-green-dark space-y-2">
                  <li><strong>2025 Enforcement:</strong> European Accessibility Act compliance requirements now in effect for businesses with 10+ employees</li>
                  <li><strong>California AB 1757:</strong> Proposed legislation that would extend liability to web developers and designers (currently in committee)</li>
                  <li><strong>Litigation Trends:</strong> Digital accessibility lawsuits have increased by 300% in recent years, with average settlements ranging from $5,000-$50,000</li>
                  <li><strong>Universal Application:</strong> No business size exemptions—small businesses face identical requirements to enterprise corporations</li>
                </ul>
                
                <div className="mt-4 bg-brand-cream/50 border border-brand-purple-light rounded-lg p-4">
                  <h4 className="font-semibold text-brand-green-dark mb-2">Timeline Reality Check</h4>
                  <p className="text-brand-green-dark text-sm">Most accessibility lawsuits are resolved within 6-12 months, but the average cost of legal defense alone ranges from $10,000-$50,000, not including settlement costs or required remediation.</p>
                </div>
              </div>

              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Compelling Business Rationale</h3>
                <p className="text-brand-green-dark mb-4 font-semibold">Strategic advantages of accessibility compliance:</p>
                <ul className="text-brand-green-dark space-y-2">
                  <li><strong>Market Access:</strong> Accessible design enables engagement with 15% of the global population—that&apos;s 1.1 billion potential customers</li>
                  <li><strong>Search Engine Optimization:</strong> Accessible websites receive preferential treatment in search rankings, improving your organic reach</li>
                  <li><strong>Reputation Management:</strong> Proactive compliance prevents costly reputation damage and legal exposure</li>
                  <li><strong>Competitive Differentiation:</strong> Most businesses remain non-compliant, creating opportunities for market leadership</li>
                </ul>
                
                <div className="mt-4 bg-brand-green-accent/10 border border-brand-green-accent rounded-lg p-4">
                  <h4 className="font-semibold text-brand-green-dark mb-2">ROI Reality</h4>
                  <p className="text-brand-green-dark text-sm">Studies show that accessibility improvements typically pay for themselves within 6-12 months through increased market reach, improved SEO, and reduced legal risk.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Unique Value Proposition */}
          <section className="mb-8 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center">Unique Value Proposition</h2>
            <p className="text-lg text-brand-green-dark mb-6 text-center">
              This resource goes beyond basic accessibility checklists by combining technical expertise with practical business insights. As a Senior Software Engineer with over 13 years of experience and a neurodivergent perspective, I provide a starting point that bridges the gap between legal requirements and human-centered implementation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-display text-brand-green-dark">What makes this guide different:</h3>
                <ul className="text-brand-green-dark space-y-2">
                  <li><strong>Cost-Effective Legal Education:</strong> Essential legal information without attorney consultation fees</li>
                  <li><strong>Practical Implementation:</strong> Actionable first steps grounded in real-world development experience</li>
                  <li><strong>Business-Focused Context:</strong> Every recommendation includes clear business rationale and impact assessment</li>
                </ul>
              </div>
              <div className="space-y-4">
                <ul className="text-brand-green-dark space-y-2">
                  <li><strong>Real-World Examples:</strong> Case studies and implementation scenarios from actual business contexts</li>
                  <li><strong>Inclusive Design Philosophy:</strong> Frameworks that accommodate diverse cognitive processing styles and business needs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Four Simple Tasks Section */}
          <section className="mb-8 mt-0 bg-gradient-to-br from-brand-green-accent/30 to-brand-purple-dark/30 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-white text-center">Four Simple Tests You Can Do Right Now</h2>
            <p className="text-lg text-white mb-6 text-center">
              These tests take less than 30 minutes total and will give you a clear picture of your website&apos;s accessibility status:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="text-xl font-display text-brand-green-dark mb-3">1. Test Keyboard Navigation (5 minutes)</h3>
                <p className="text-brand-green-dark mb-3">
                  <strong>What to do:</strong> Use only your Tab key to navigate through your entire website. Try to access every button, link, and form field.
                </p>
                <p className="text-brand-green-dark text-sm">
                  <strong>What to look for:</strong> Can you reach all interactive elements? Are there any &ldquo;keyboard traps&rdquo; where you get stuck? Do you see a visible focus indicator (usually a colored outline) as you tab through?
                </p>
                <div className="mt-3 bg-brand-purple-accent/10 border border-brand-purple-accent rounded p-2">
                  <p className="text-brand-purple-dark text-xs"><strong>Red flag:</strong> If you can&apos;t access something with just the keyboard, screen reader users can&apos;t access it either.</p>
                </div>
              </div>

              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="text-xl font-display text-brand-green-dark mb-3">2. Check Color Contrast (10 minutes)</h3>
                <p className="text-brand-green-dark mb-3">
                  <strong>What to do:</strong> Use the <Link href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline font-semibold">WebAIM Color Contrast Checker</Link> to test your main text colors against their backgrounds.
                </p>
                <p className="text-brand-green-dark text-sm">
                  <strong>Target ratios:</strong> 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold). Test your main headings, body text, and button text.
                </p>
                <div className="mt-3 bg-brand-green-accent/10 border border-brand-green-accent rounded p-2">
                  <p className="text-brand-green-dark text-xs"><strong>Quick fix:</strong> Darken text or lighten backgrounds. Even small adjustments can make a big difference.</p>
                </div>
              </div>

              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="text-xl font-display text-brand-green-dark mb-3">3. Verify Alt Text (10 minutes)</h3>
                <p className="text-brand-green-dark mb-3">
                  <strong>What to do:</strong> Right-click on images throughout your site and select &ldquo;Inspect Element.&rdquo; Look for `alt` attributes on all images.
                </p>
                <p className="text-brand-green-dark text-sm">
                  <strong>What to check:</strong> Do images have descriptive alt text? Are decorative images marked with empty alt=&ldquo;&rdquo;? Are there any images with missing alt attributes entirely?
                </p>
                <div className="mt-3 bg-brand-cream/50 border border-brand-purple-light rounded p-2">
                  <p className="text-brand-purple-dark text-xs"><strong>Pro tip:</strong> Alt text should describe what&apos;s in the image, not just say &ldquo;image&rdquo; or &ldquo;photo.&rdquo;</p>
                </div>
              </div>

              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="text-xl font-display text-brand-green-dark mb-3">4. Test with Screen Reader (5 minutes)</h3>
                <p className="text-brand-green-dark mb-3">
                  <strong>What to do:</strong> Use your computer&apos;s built-in screen reader to listen to your homepage. On Mac: VoiceOver (Cmd+F5), on Windows: Narrator (Win+Ctrl+Enter).
                </p>
                <p className="text-brand-green-dark text-sm">
                  <strong>What to listen for:</strong> Does the content make sense when read aloud? Are headings announced properly? Can you navigate through the page logically?
                </p>
                <div className="mt-3 bg-brand-blue/10 border border-brand-blue rounded p-2">
                  <p className="text-brand-green-dark text-xs"><strong>Note:</strong> This test helps you understand how screen reader users experience your site.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-white/10 rounded-lg p-4 text-center">
              <p className="text-white text-sm">
                <strong className="text-brand-green-accent">Don&apos;t worry if you find issues!</strong> The goal is awareness, not perfection. Every business owner finds accessibility issues on their first test—that&apos;s completely normal and fixable.
              </p>
            </div>
          </section>

          {/* Quick Start Guide */}
          <section className="mb-8 mt-0 bg-gradient-to-br from-brand-purple-dark/30 to-brand-green-accent/30 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl text-center">
            <h2 className="text-3xl font-display mb-6 text-white">READY TO GET STARTED?</h2>
            <p className="text-lg text-white mb-8 max-w-3xl mx-auto">
              Begin with one small, manageable step. Here are three simple ways to start your accessibility journey today:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="font-display text-brand-green-dark mb-3 text-xl">1. Run Your First Test</h3>
                <p className="text-brand-green-dark text-sm mb-4">
                  Use the <Link href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline font-semibold">WAVE browser extension</Link> to scan your homepage. It&apos;s free and takes just 2 minutes.
                </p>
                <div className="bg-brand-green-accent/20 rounded-lg p-3">
                  <p className="text-brand-green-dark text-xs font-semibold">Quick Win: Fix any missing alt text on images</p>
                </div>
              </div>
              
              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="font-display text-brand-green-dark mb-3 text-xl">2. Test Keyboard Navigation</h3>
                <p className="text-brand-green-dark text-sm mb-4">
                  Use only your Tab key to navigate your entire website. Can you access every button, link, and form field?
                </p>
                <div className="bg-brand-green-accent/20 rounded-lg p-3">
                  <p className="text-brand-green-dark text-xs font-semibold">Quick Win: Add focus indicators to interactive elements</p>
                </div>
              </div>
              
              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="font-display text-brand-green-dark mb-3 text-xl">3. Check Color Contrast</h3>
                <p className="text-brand-green-dark text-sm mb-4">
                  Test your main text colors using the <Link href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline font-semibold">WebAIM Contrast Checker</Link>. Aim for 4.5:1 ratio.
                </p>
                <div className="bg-brand-green-accent/20 rounded-lg p-3">
                  <p className="text-brand-green-dark text-xs font-semibold">Quick Win: Darken text or lighten backgrounds for better contrast</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-display text-white mb-3">Pro Tip: Start Small, Think Big</h3>
              <p className="text-white/90 text-sm">
                Don&apos;t try to fix everything at once. Pick one issue from your test results and focus on that until it&apos;s completely resolved. 
                Small, consistent improvements are more sustainable than overwhelming overhauls.
              </p>
            </div>
          </section>

          {/* Resources Section */}
          <section className="mb-8 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center">Essential Research and Reference Materials</h2>
            <p className="text-lg text-brand-green-dark mb-6 text-center">
              For those ready to dive deeper, here are the key sources that informed this starting guide:
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Legal & Compliance Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p><Link href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline" >ADA.gov Official Website</Link> - Department of Justice ADA information and guidance</p>
                    <p><Link href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline" >Web Content Accessibility Guidelines (WCAG) 2.1</Link> - The technical standard courts use for compliance</p>
                    <p><Link href="https://eur-lex.europa.eu/eli/dir/2019/882/oj" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline" >European Accessibility Act (EAA) Official Text</Link> - Full legal text of the EAA</p>
                  </div>
                  <div className="space-y-2">
                    <p><Link href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline" >EN 301549 Standard</Link> - European accessibility standard based on WCAG 2.1</p>
                    <p><Link href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB1757" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline" >California AB 1757 Bill Text</Link> - Proposed developer liability legislation</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Technical Implementation Guides</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p><Link href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline" >WAVE Web Accessibility Evaluation Tool</Link> - Free browser extension for accessibility testing</p>
                    <p><Link href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline" >WebAIM Color Contrast Checker</Link> - Tool for testing color accessibility</p>
                    <p><Link href="https://www.a11yproject.com/checklist/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline" >A11Y Project Checklist</Link> - Practical accessibility implementation checklist</p>
                  </div>
                  <div className="space-y-2">
                    <p><Link href="https://www.microsoft.com/design/inclusive/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline" >Microsoft Inclusive Design Toolkit</Link> - Comprehensive guide to inclusive design principles</p>
                    <p><Link href="https://www.deque.com/axe/browser-extensions/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline" >axe-core Browser Extension</Link> - Automated accessibility testing</p>
                    <p><Link href="https://webaim.org/techniques/keyboard/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline" >Keyboard Navigation Testing Guide</Link> - How to test keyboard accessibility</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Case Law & Legal Precedents</h3>
                <div className="space-y-2">
                  <p><Link href="https://accessibe.com/blog/knowledgebase/court-affirms-accesswidget-role-in-accessibility" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">Erkan v. David Hidalgo, M.D., P.C.</Link> - Real case study of small business accessibility lawsuit</p>
                  <p><Link href="https://www.adatitleiii.com/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">ADA Title III Litigation Trends</Link> - Comprehensive tracking of accessibility lawsuits</p>
                  <p><Link href="https://webaim.org/articles/laws/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">WebAIM Legal Cases Database</Link> - Searchable database of web accessibility legal cases</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Email & Marketing Accessibility</h3>
                <div className="space-y-2">
                  <p><Link href="https://www.w3.org/WAI/fundamentals/accessibility-principles/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">Email Accessibility Guidelines</Link> - W3C guidance for accessible email</p>
                  <p><Link href="https://mailchimp.com/help/about-email-accessibility/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">Mailchimp Accessibility Guide</Link> - Platform-specific accessibility best practices</p>
                  <p><Link href="https://www.constantcontact.com/blog/email-accessibility/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">Constant Contact Accessibility Resources</Link> - Email marketing accessibility guidelines</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Business & Market Research</h3>
                <div className="space-y-2">
                  <p><Link href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">World Health Organization Disability Statistics</Link> - Global disability prevalence data</p>
                  <p><Link href="https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">CDC Disability Statistics</Link> - US-specific disability data</p>
                  <p><Link href="https://www.forrester.com/report/The-Accessibility-Imperative/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">Forrester Accessibility ROI Study</Link> - Business case for accessibility investment</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Neurodiversity & Inclusive Design</h3>
                <div className="space-y-2">
                  <p><Link href="https://www.neurodiversityintech.org/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">Neurodiversity in Tech</Link> - Community and resources for neurodivergent tech professionals</p>
                  <p><Link href="https://www.lindseymack.com/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">Lindsey Mack&apos;s Neuroinclusive Design Principles</Link> - Framework for designing for different thinking styles</p>
                  <p><Link href="https://www.smashingmagazine.com/inclusive-design-patterns/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">Inclusive Design Patterns</Link> - Practical examples and implementation patterns</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Testing & Validation Tools</h3>
                <div className="space-y-2">
                  <p><Link href="https://www.nvaccess.org/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">NVDA Screen Reader</Link> - Free Windows screen reader for testing</p>
                  <p><Link href="https://support.apple.com/guide/voiceover/welcome/mac" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">VoiceOver Guide for Mac</Link> - Built-in Mac accessibility testing</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Industry Reports & Studies</h3>
                <div className="space-y-2">
                  <p><Link href="https://webaim.org/projects/screenreadersurvey9/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">WebAIM Screen Reader Survey</Link> - Current screen reader usage statistics</p>
                  <p><Link href="https://www.deque.com/research/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">Deque Accessibility Research</Link> - Industry reports on accessibility trends</p>
                  <p><Link href="https://www.levelaccess.com/resources/" target="_blank" rel="noopener noreferrer" className="text-brand-green-hyperlink hover:underline">Level Access Annual Report</Link> - Accessibility compliance and litigation trends</p>
                </div>
              </div>
            </div>
          </section>

          {/* Spiritual Wisdom */}
          <section className="mb-8 mt-0 bg-gradient-to-br from-brand-purple-dark/30 to-brand-green-accent/30 border-2 border-brand-purple-dark rounded-3xl p-6 md:p-8 shadow-2xl text-center">
            <h2 className="text-3xl font-display mb-4 text-white">Spiritual Wisdom</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              In the spirit of mindful observation before action, we recognize that accessibility isn&apos;t about achieving perfection, but about making meaningful progress. This starting guide helps you assess the landscape before taking action, ensuring your first steps are both legally compliant and genuinely beneficial to your users.
            </p>
          </section>

          {/* Implementation and Next Steps */}
          <section className="mb-8 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center">Getting Started: Your 90-Day Plan</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-brand-green-accent/10 border-2 border-brand-green-accent rounded-lg p-6">
                <h3 className="text-xl font-display text-brand-green-dark mb-4">Phase 1: Foundation (Days 1-30)</h3>
                <p className="text-brand-green-dark text-sm mb-3 font-semibold">High-impact, low-cost fixes:</p>
                <ul className="text-brand-green-dark text-sm space-y-1">
                  <li>• Add alt text to all images</li>
                  <li>• Fix color contrast issues</li>
                  <li>• Ensure keyboard navigation works</li>
                  <li>• Add focus indicators</li>
                  <li>• Test with screen reader</li>
                </ul>
                <div className="mt-3 bg-brand-green-accent/20 rounded p-2">
                  <p className="text-brand-green-dark text-xs"><strong>Time investment:</strong> 2-4 hours total</p>
                </div>
              </div>

              <div className="bg-brand-cream/50 border-2 border-brand-purple-light rounded-lg p-6">
                <h3 className="text-xl font-display text-brand-green-dark mb-4">Phase 2: Enhancement (Days 31-60)</h3>
                <p className="text-brand-green-dark text-sm mb-3 font-semibold">Medium-complexity improvements:</p>
                <ul className="text-brand-green-dark text-sm space-y-1">
                  <li>• Improve form labels and error messages</li>
                  <li>• Add skip navigation links</li>
                  <li>• Ensure proper heading structure</li>
                  <li>• Test with multiple screen readers</li>
                  <li>• Document your progress</li>
                </ul>
                <div className="mt-3 bg-brand-purple-light/30 rounded p-2">
                  <p className="text-brand-purple-dark text-xs"><strong>Time investment:</strong> 4-8 hours total</p>
                </div>
              </div>

              <div className="bg-brand-blue/10 border-2 border-brand-blue rounded-lg p-6">
                <h3 className="text-xl font-display text-brand-green-dark mb-4">Phase 3: Optimization (Days 61-90)</h3>
                <p className="text-brand-green-dark text-sm mb-3 font-semibold">Advanced compliance:</p>
                <ul className="text-brand-green-dark text-sm space-y-1">
                  <li>• Conduct full WCAG 2.1 audit</li>
                  <li>• Implement advanced features</li>
                  <li>• Train your team</li>
                  <li>• Establish ongoing testing</li>
                  <li>• Create accessibility policy</li>
                </ul>
                <div className="mt-3 bg-brand-blue/20 rounded p-2">
                  <p className="text-brand-green-dark text-xs"><strong>Time investment:</strong> 8-16 hours total</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Priority Matrix: Where to Start</h3>
                <div className="space-y-4">
                  <div className="bg-brand-purple-accent/10 border border-brand-purple-accent rounded-lg p-4">
                    <h4 className="font-semibold text-brand-purple-dark mb-2">🔴 Critical (Fix Immediately)</h4>
                    <ul className="text-brand-purple-dark text-sm space-y-1">
                      <li>• Missing alt text on important images</li>
                      <li>• Color contrast below 3:1</li>
                      <li>• Keyboard traps or inaccessible forms</li>
                      <li>• Missing form labels</li>
                    </ul>
                  </div>
                  
                  <div className="bg-brand-cream/50 border border-brand-purple-light rounded-lg p-4">
                    <h4 className="font-semibold text-brand-purple-dark mb-2">🟡 Important (Fix This Month)</h4>
                    <ul className="text-brand-purple-dark text-sm space-y-1">
                      <li>• Poor heading structure</li>
                      <li>• Missing skip links</li>
                      <li>• Inaccessible PDFs</li>
                      <li>• Video without captions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-brand-green-accent/10 border border-brand-green-accent rounded-lg p-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">🟢 Enhancement (Fix When Possible)</h4>
                    <ul className="text-brand-green-dark text-sm space-y-1">
                      <li>• Advanced ARIA labels</li>
                      <li>• Complex animations</li>
                      <li>• Advanced keyboard shortcuts</li>
                      <li>• Custom focus management</li>
                      </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display text-brand-green-dark mb-4">Documentation Strategy</h3>
                <p className="text-brand-green-dark mb-4 font-semibold">Keep simple records of your accessibility efforts:</p>
                <ul className="text-brand-green-dark space-y-2 text-sm">
                  <li><strong>Testing Log:</strong> Document when you tested, what tools you used, and what issues you found</li>
                  <li><strong>Fix Timeline:</strong> Record what you fixed, when, and how long it took</li>
                  <li><strong>Progress Photos:</strong> Screenshots showing before/after improvements</li>
                  <li><strong>Team Training:</strong> Records of accessibility training for your team</li>
                  <li><strong>Policy Updates:</strong> Documentation of accessibility policies and procedures</li>
                </ul>
                
                <div className="mt-4 bg-brand-blue/10 border border-brand-blue rounded-lg p-4">
                  <h4 className="font-semibold text-brand-green-dark mb-2">Why Simple Documentation Matters</h4>
                  <p className="text-brand-green-dark text-sm">If you ever face legal challenges, even basic documentation showing good-faith efforts to improve accessibility can significantly reduce your legal risk and potential penalties.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="mt-12">
            <NewsletterSection bgColor="bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark" />
          </section>

          {/* Back to Resources Link */}
          <section className="mt-12 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center text-white hover:text-brand-cream transition-colors"
              aria-label="Back to all resources"
            >
              <span className="mr-2">←</span>
              Back to All Resources
            </Link>
          </section>

          {/* Footer Information */}
          <section className="mt-12 bg-white/90 border border-brand-green-accent rounded-2xl p-6 text-center">
            <div className="border-t border-brand-green-dark pt-4">
              <p className="text-sm text-brand-green-dark mb-2">
                This starting guide provides educational information about digital accessibility laws and requirements. It does not constitute legal advice and does not create an attorney-client relationship. For specific legal matters, consult with a qualified attorney licensed in your jurisdiction.
              </p>
              <p className="text-sm text-brand-green-dark">
                <strong>Resource Author:</strong> Amanda Nelson, Senior Software Engineer & Accessibility Advocate<br />
                <strong>Last Updated:</strong> September 2025<br />
                <strong>Version:</strong> 1.0
              </p>
            </div>
          </section>

          {/* Update Banner */}
          <div className="mt-12 bg-brand-green-accent/20 text-white text-center py-2 px-4 rounded-lg" role="status" aria-label="Content update status">
            <p className="text-sm">✨ Last updated: September 2025 ✨</p>
          </div>
        </div>
      </div>
    </main>
  )
}