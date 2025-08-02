import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import NewsletterSection from '../components/home/NewsletterSection'

// Define types for our content
interface DesignPrinciple {
  title: string;
  description: string;
  keyPoints: string[];
  practicalExample: string;
}

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: 'Neuroinclusive Design: Building Accessible Tech for All Brains - The Pythoness Programmer',
  description: 'Explore neuroinclusive design principles that create better experiences for all users, from the margins to the mainstream.',
  openGraph: {
    title: 'Neuroinclusive Design: Building Accessible Tech for All Brains',
    description: 'Learn how designing for neurodivergent users creates better experiences for everyone—moving beyond accommodation to proactive inclusion.',
    type: 'website',
    url: 'https://www.pythonessprogrammer.com/neuroinclusive-design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neuroinclusive Design: Building Accessible Tech for All Brains',
    description: 'Learn how designing for neurodivergent users creates better experiences for everyone—moving beyond accommodation to proactive inclusion.',
  },
}

// Content data
const designPrinciples: DesignPrinciple[] = [
  {
    title: 'Multiple Access Points',
    description: 'Offer information in multiple formats to accommodate different learning styles and processing preferences.',
    keyPoints: [
      'Visual, written, and audio content options',
      'Diverse learning style accommodation',
      'Expanded reach and impact',
    ],
    practicalExample: 'Provide both video tutorials and written documentation for the same feature.',
  },
  {
    title: 'Clear Structure',
    description: 'Create predictable, consistent navigation patterns that reduce cognitive load.',
    keyPoints: [
      'Consistent navigation patterns',
      'Predictable interface behavior',
      'Reduced mental effort',
    ],
    practicalExample: 'Use consistent heading hierarchies (H1 → H2 → H3) and logical tab order.',
  },
  {
    title: 'Flexible Interaction',
    description: 'Offer different ways to engage and complete tasks based on user preferences.',
    keyPoints: [
      'Varied input methods',
      'Alternative task completion',
      'User choice and autonomy',
    ],
    practicalExample: 'Allow users to complete forms via keyboard, mouse, or voice input.',
  },
  {
    title: 'Explicit Communication',
    description: 'Use clear, concrete language that eliminates ambiguity and reduces confusion.',
    keyPoints: [
      'Simple, direct language',
      'Avoid jargon and complexity',
      'Clarity over cleverness',
    ],
    practicalExample: 'Replace "Click here to proceed" with "Click Submit to save your changes."',
  },
];

export default function NeuroinclusiveDesignPage(): ReactNode {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Hero Section */}
          <section className="mb-6 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2 mt-0">
              Neuroinclusive Design: Building Accessible Tech for All Brains
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-4 mt-0">
              Learn how designing for neurodivergent users creates better experiences for everyone—moving beyond accommodation to proactive inclusion.
            </p>
            <Link 
              href="#design-principles"
              className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors text-lg font-semibold shadow-lg mt-0"
              aria-label="Start learning about neuroinclusive design principles"
            >
              Explore Design Principles
            </Link>
          </section>

          {/* Video Section */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-2 text-brand-green-dark text-center mt-1">Watch the Neuroinclusive Design Video</h2>
            <p className="text-brand-green-dark text-center mb-2">A powerful, bite-sized video recap of neuroinclusive design principles in action.</p>
            <div className="w-full mt-0">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/xReJqQOSYS8?si=bUhAT3OcVDxKtu1g" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                style={{borderRadius: '12px'}}
              />
            </div>
          </section>

          {/* Podcast Section */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-2 text-brand-green-dark text-center mt-1">Listen to the Neuroinclusive Design Episode</h2>
            <p className="text-brand-green-dark text-center mb-2">Discover how designing for all brains creates better experiences for everyone, from the margins to the mainstream.</p>
            <div className="w-full mt-0">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/nblgz9lRcrM?si=BbFPB-9K0L-6LKqo" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                style={{borderRadius: '12px'}}
              />
            </div>
          </section>

          {/* Mindset Shift Section */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-4xl font-display mb-4 text-brand-green-dark text-center tracking-tight mt-1">THE MINDSET SHIFT</h2>
            <p className="text-lg md:text-xl text-brand-green-dark mb-6 text-center max-w-3xl mx-auto">
              The key to neuroinclusive design is moving from the reactive accommodation model to the proactive social contextual model.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#ff39bc]/10 border-2 border-[#ff39bc] rounded-2xl p-6">
                <h3 className="text-2xl font-display text-black mb-3">Old Model: Accommodation</h3>
                <ul className="text-black space-y-2">
                  <li>Reactive approach</li>
                  <li>Fixing people, not systems</li>
                  <li>One-off exceptions</li>
                  <li>After-the-fact adjustments</li>
                  <li>Individual-focused solutions</li>
                </ul>
              </div>
              
              <div className="bg-[#32D24D]/10 border-2 border-[#32D24D] rounded-2xl p-6">
                <h3 className="text-2xl font-display text-black mb-3">New Model: Social Contextual</h3>
                <ul className="text-black space-y-2">
                  <li>Proactive approach</li>
                  <li>Fixing environments, not people</li>
                  <li>Universal design from start</li>
                  <li>Built-in accessibility</li>
                  <li>System-focused solutions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Design Principles Section */}
          <section id="design-principles" className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-4xl font-display mb-4 text-brand-green-dark text-center tracking-tight mt-1">FOUR CORE PRINCIPLES</h2>
            <p className="text-lg md:text-xl text-brand-green-dark mb-6 text-center max-w-3xl mx-auto">
              These principles guide the creation of digital spaces that work for all brains, not just some.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              {designPrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="bg-gradient-to-br from-brand-green-accent/10 to-brand-purple-dark/10 border-2 border-brand-green-accent rounded-2xl p-6 hover:scale-105 transition-transform duration-200"
                >
                  <h3 className="text-xl md:text-2xl font-display text-black mb-3">{principle.title}</h3>
                  <p className="text-black mb-4">{principle.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Key Points:</h4>
                    <ul className="list-disc pl-5 text-black text-sm space-y-1">
                      {principle.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-brand-green-accent/20 rounded-lg p-3">
                    <h4 className="font-semibold text-black mb-1">Practical Example:</h4>
                    <p className="text-black text-sm">{principle.practicalExample}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Five-Minute Accessibility Check */}
          <section className="mb-6 mt-0 bg-gradient-to-br from-brand-green-accent/30 to-brand-purple-dark/30 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-4 text-white text-center">FIVE-MINUTE ACCESSIBILITY CHECK</h2>
            <p className="text-lg text-white mb-6 text-center max-w-2xl mx-auto">
              Start making your digital spaces more inclusive with this quick assessment you can do right now.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-black mb-2">1. Color Contrast</h3>
                <p className="text-black text-sm">Check if text is easily readable. Aim for WCAG 2.1 AA compliance (4.5:1 ratio).</p>
              </div>
              
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-black mb-2">2. Zoom Test</h3>
                <p className="text-black text-sm">Zoom to 200%. Does the page remain usable and readable?</p>
              </div>
              
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-black mb-2">3. Keyboard Navigation</h3>
                <p className="text-black text-sm">Put away your mouse. Can you navigate everything with just the Tab key?</p>
              </div>
              
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-black mb-2">4. Alt Text</h3>
                <p className="text-black text-sm">Do meaningful images have descriptive alt text? Decorative images should have empty alt attributes.</p>
              </div>
              
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-black mb-2">5. Heading Structure</h3>
                <p className="text-black text-sm">Are headings in logical order? One H1 per page, followed by H2, then H3.</p>
              </div>
              
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-black mb-2">Bonus: Screen Reader</h3>
                <p className="text-black text-sm">Test with NVDA (Windows) or VoiceOver (Mac) to experience your site as others do.</p>
              </div>
            </div>
          </section>

          {/* Weekly Deep Dives Section */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-3xl font-display mb-4 text-brand-green-dark text-center mt-1">WEEKLY DEEP DIVES</h2>
            <p className="text-lg text-brand-green-dark mb-6 text-center">
              Each week we explored different aspects of neuroinclusive design, with practical resources and real-world examples.
            </p>

            <div className="space-y-8">
              {/* Week 1 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 1: Understanding Neuroinclusive Design</h3>
                <p className="text-brand-green-dark mb-4">
                  Discover how neuroinclusive design principles create better digital experiences for everyone, moving from accommodation to social contextual models.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/neuroinclusive-design-building-accessible-tech-for-all-brains-b2885a3a6882ca6e"
                    className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Newsletter
                  </Link>
                </div>
              </div>

              {/* Week 2 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 2: Context is Everything</h3>
                <p className="text-brand-green-dark mb-4">
                  Building neurocomplex, conscious Slack channels and digital spaces that work for diverse thinking styles.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/context-is-everything-building-neurocomplex-conscious-slack-channels"
                    className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Newsletter
                  </Link>
                </div>
              </div>

              {/* Week 3 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 3: Building Sustainable Systems</h3>
                <p className="text-brand-green-dark mb-4">
                  Building accessible systems that don&apos;t burn you out—maintenance schedules, forever topics, and graceful degradation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/building-sustainable-accessible-systems"
                    className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Newsletter
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Key Statistics Section */}
          <section className="mb-6 mt-0 bg-gradient-to-br from-brand-purple-dark/30 to-brand-green-accent/30 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl text-center">
            <h2 className="text-3xl font-display mb-6 text-white">WHY THIS MATTERS</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/90 rounded-lg p-6">
                <div className="text-4xl font-display text-black mb-2">1 in 7</div>
                <p className="text-black">People are neurodivergent—this isn&apos;t a niche issue</p>
              </div>
              <div className="bg-white/90 rounded-lg p-6">
                <div className="text-4xl font-display text-black mb-2">100%</div>
                <p className="text-black">Benefit when we design for the margins</p>
              </div>
              <div className="bg-white/90 rounded-lg p-6">
                <div className="text-4xl font-display text-black mb-2">15%</div>
                <p className="text-black">Of teams achieve high trust with AI—context matters</p>
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

          {/* Update Banner */}
          <div className="mt-12 bg-brand-green-accent/20 text-white text-center py-2 px-4 rounded-lg" role="status" aria-label="Content update status">
            <p className="text-sm">✨ Last updated: August 2025 ✨</p>
          </div>
        </div>
      </div>
    </main>
  )
}
