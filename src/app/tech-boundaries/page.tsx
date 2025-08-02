import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import NewsletterSection from '../components/home/NewsletterSection'

// Define types for our content
interface BoundaryPillar {
  title: string;
  description: string;
  keyPoints: string[];
  practicalExample: string;
}

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: 'Tech Boundaries: Building Brain-Friendly Digital Systems - The Pythoness Programmer',
  description: 'Learn to create digital boundaries that work with your brain, not against it. Transform tech overwhelm into creative fuel.',
  openGraph: {
    title: 'Tech Boundaries: Building Brain-Friendly Digital Systems',
    description: 'Small boundaries, big energy gains—sustainable habits to make your digital world work with you.',
    type: 'website',
    url: 'https://www.pythonessprogrammer.com/tech-boundaries',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Boundaries: Building Brain-Friendly Digital Systems',
    description: 'Small boundaries, big energy gains—sustainable habits to make your digital world work with you.',
  },
}

// Content data
const boundaryPillars: BoundaryPillar[] = [
  {
    title: 'Design Your Digital Space',
    description: 'Create a digital workspace that feels as intuitive and supportive as your favorite physical desk or studio.',
    keyPoints: [
      'Everything has a home (PARA method)',
      'Reduce cognitive load through organization',
      'Archive completed work for mental space',
      'Create distraction-free zones',
    ],
    practicalExample: 'Use the PARA method: Projects (active work), Areas (ongoing responsibilities), Resources (reference materials), Archive (completed work).',
  },
  {
    title: 'Automate for Your Energy',
    description: 'Build respectful automation that adapts to your energy levels, not the other way around.',
    keyPoints: [
      'Energy-aware workflow design',
      'Respectful automation principles',
      'High, medium, and low energy setups',
      'Graceful error handling',
    ],
    practicalExample: 'High energy: Build complex systems. Medium energy: Use simple scripts. Low energy: Lean on passive systems like dashboards.',
  },
  {
    title: 'Build Sustainable Habits',
    description: 'Create flexible routines that support you every day, not just during short-term sprints.',
    keyPoints: [
      'Gentle consistency framework',
      '15-minute weekly check-ins',
      'Honor natural creative cycles',
      'Build in recovery time',
    ],
    practicalExample: 'Weekly check-in: What worked? What didn&apos;t? Is my workspace still helping me? Set one small intention for next week.',
  },
];

export default function TechBoundariesPage(): ReactNode {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Hero Section */}
          <section className="mb-6 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2 mt-0">
              Tech Boundaries: Building Brain-Friendly Digital Systems
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-4 mt-0">
              Small boundaries, big energy gains—sustainable habits to make your digital world work with you.
            </p>
            <Link 
              href="#boundary-pillars"
              className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors text-lg font-semibold shadow-lg mt-0"
              aria-label="Start learning about tech boundary principles"
            >
              Explore Boundary Principles
            </Link>
          </section>

          {/* Video Section */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-2 text-brand-green-dark text-center mt-1">Watch the Tech Boundaries Video</h2>
            <p className="text-brand-green-dark text-center mb-2">A powerful, bite-sized video recap of brain-friendly tech boundaries in action.</p>
            <div className="w-full mt-0">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/WeN2Kvq2XeM?si=yvOH22935eJQrymH" 
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
            <h2 className="text-2xl font-display mb-2 text-brand-green-dark text-center mt-1">Listen to the Tech Boundaries Episode</h2>
            <p className="text-brand-green-dark text-center mb-2">Learn how to transform tech overwhelm into creative fuel with brain-friendly digital systems.</p>
            <div className="w-full mt-0">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/lJKFr9fwmzk?si=Z9-g6YxcrSATpMSu" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                style={{borderRadius: '12px'}}
              />
            </div>
          </section>

          {/* Problem Statement Section */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-4xl font-display mb-4 text-brand-green-dark text-center tracking-tight mt-1">DOES THIS SOUND FAMILIAR?</h2>
            <p className="text-lg md:text-xl text-brand-green-dark mb-6 text-center max-w-3xl mx-auto">
                             If your digital world feels less like a creative partner and more like a roadblock, you&apos;re not alone.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#ff39bc]/10 border-2 border-[#ff39bc] rounded-2xl p-6">
                <h3 className="text-2xl font-display text-black mb-3">Common Pain Points</h3>
                <ul className="text-black space-y-2">
                  <li>Losing ideas in a sea of 100 open tabs</li>
                  <li>Creative momentum shattered by missing files</li>
                  <li>Energy drain from constant task switching</li>
                  <li>Digital systems fighting your brain</li>
                  <li>Tech that feels like a frustration</li>
                </ul>
              </div>
              
              <div className="bg-[#32D24D]/10 border-2 border-[#32D24D] rounded-2xl p-6">
                <h3 className="text-2xl font-display text-black mb-3">Brain-Friendly Solution</h3>
                <ul className="text-black space-y-2">
                  <li>Everything has a designated home</li>
                  <li>Systems that respect your energy</li>
                  <li>Automation that adapts to you</li>
                  <li>Tech that feels like a joy to use</li>
                  <li>Digital spaces that support creativity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Three Pillars Section */}
          <section id="boundary-pillars" className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-4xl font-display mb-4 text-brand-green-dark text-center tracking-tight mt-1">THREE CORE PILLARS</h2>
            <p className="text-lg md:text-xl text-brand-green-dark mb-6 text-center max-w-3xl mx-auto">
              These principles help you build digital systems that work with your brain, not against it.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3">
              {boundaryPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-gradient-to-br from-brand-green-accent/10 to-brand-purple-dark/10 border-2 border-brand-green-accent rounded-2xl p-6 hover:scale-105 transition-transform duration-200"
                >
                  <h3 className="text-xl md:text-2xl font-display text-brand-green-dark mb-3">{pillar.title}</h3>
                  <p className="text-brand-green-dark mb-4">{pillar.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-brand-green-dark mb-2">Key Points:</h4>
                    <ul className="list-disc pl-5 text-brand-green-dark text-sm space-y-1">
                      {pillar.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-brand-green-accent/20 rounded-lg p-3">
                    <h4 className="font-semibold text-brand-green-dark mb-1">Practical Example:</h4>
                    <p className="text-brand-green-dark text-sm">{pillar.practicalExample}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PARA Method Section */}
          <section className="mb-6 mt-0 bg-gradient-to-br from-brand-green-accent/30 to-brand-purple-dark/30 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-4 text-white text-center">THE PARA METHOD</h2>
            <p className="text-lg text-white mb-6 text-center max-w-2xl mx-auto">
                             Tiago Forte&apos;s brilliant system for organizing everything based on how you use information.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-brand-green-dark mb-2">P - Projects</h3>
                                 <p className="text-brand-green-dark text-sm">Stuff you&apos;re actively working on now. Current deadlines and deliverables.</p>
              </div>
              
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-brand-green-dark mb-2">A - Areas</h3>
                <p className="text-brand-green-dark text-sm">Ongoing responsibilities like finances, health, or team management.</p>
              </div>
              
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-brand-green-dark mb-2">R - Resources</h3>
                <p className="text-brand-green-dark text-sm">Reference materials, templates, and knowledge you might need later.</p>
              </div>
              
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-brand-green-dark mb-2">A - Archive</h3>
                <p className="text-brand-green-dark text-sm">Completed work and inactive projects. The secret to mental space.</p>
              </div>
            </div>
          </section>

          {/* Energy-Aware Automation Section */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-3xl font-display mb-4 text-brand-green-dark text-center mt-1">ENERGY-AWARE AUTOMATION</h2>
            <p className="text-lg text-brand-green-dark mb-6 text-center">
              Build automation that respects your natural energy cycles and creative rhythms.
            </p>

            <div className="space-y-8">
              {/* High Energy */}
              <div className="bg-[#ff39bc]/10 border-2 border-[#ff39bc] rounded-lg p-6">
                <h3 className="text-2xl font-display mb-4 text-black mt-1">High Energy Days</h3>
                <p className="text-black mb-4">
                  Tackle complex automation projects and build new systems. This is when you create the foundation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-[#ff39bc]/20 text-black px-3 py-1 rounded-full text-sm">Build complex Make.com workflows</span>
                  <span className="bg-[#ff39bc]/20 text-black px-3 py-1 rounded-full text-sm">Create new automation systems</span>
                  <span className="bg-[#ff39bc]/20 text-black px-3 py-1 rounded-full text-sm">Design new processes</span>
                </div>
              </div>

              {/* Medium Energy */}
              <div className="bg-[#D8B9F7]/10 border-2 border-[#D8B9F7] rounded-lg p-6">
                <h3 className="text-2xl font-display mb-4 text-black mt-1">Medium Energy Days</h3>
                <p className="text-black mb-4">
                  Focus on routine automation and maintenance. Keep systems running smoothly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-[#D8B9F7]/20 text-black px-3 py-1 rounded-full text-sm">Use Stream Deck shortcuts</span>
                  <span className="bg-[#D8B9F7]/20 text-black px-3 py-1 rounded-full text-sm">Run simple scripts</span>
                  <span className="bg-[#D8B9F7]/20 text-black px-3 py-1 rounded-full text-sm">Maintain existing systems</span>
                </div>
              </div>

              {/* Low Energy */}
              <div className="bg-[#32D24D]/10 border-2 border-[#32D24D] rounded-lg p-6">
                <h3 className="text-2xl font-display mb-4 text-black mt-1">Low Energy Days</h3>
                <p className="text-black mb-4">
                  Lean on passive systems and gentle organization. Recovery is just as important as creation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-[#32D24D]/20 text-black px-3 py-1 rounded-full text-sm">Use momentum dashboards</span>
                  <span className="bg-[#32D24D]/20 text-black px-3 py-1 rounded-full text-sm">Tidy up archives</span>
                  <span className="bg-[#32D24D]/20 text-black px-3 py-1 rounded-full text-sm">Review and reflect</span>
                </div>
              </div>
            </div>
          </section>

          {/* Weekly Deep Dives Section */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-3xl font-display mb-4 text-brand-green-dark text-center mt-1">WEEKLY DEEP DIVES</h2>
            <p className="text-lg text-brand-green-dark mb-6 text-center">
              Each week we explored different aspects of building brain-friendly tech boundaries.
            </p>

            <div className="space-y-8">
              {/* Week 1 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 1: Tech Boundaries & Digital Wellness</h3>
                <p className="text-brand-green-dark mb-4">
                  Your month of intentional tech use begins with understanding how to build digital environments that support your creativity instead of draining it.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/july-6th-2025-tech-boundaries-digital-wellness-your-month-of-intentional-tech-use-da64e2e781dd0784"
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
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 2: Pythoness Network Launch</h3>
                <p className="text-brand-green-dark mb-4">
                  Launching the FREE Slack community and exploring how to create digital environments that amplify creativity instead of draining it.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/tech-boundaries-digital-wellness-your-month-of-intentional-tech-use-my-free-slack-community-9af738de"
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
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 3: Workspace Design for Creative Flow</h3>
                <p className="text-brand-green-dark mb-4">
                  Organizing your digital environment for maximum creativity and setting up distraction-free writing and design environments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/july-16th-2025-workspace-design-for-creative-flow-organizing-your-digital-environment"
                    className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Newsletter
                  </Link>
                </div>
              </div>

              {/* Week 4 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 4: Tech Tools That Respect Your Boundaries</h3>
                <p className="text-brand-green-dark mb-4">
                  Automation that respects your energy levels and tools that amplify creativity without overwhelming your unique brain patterns.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/july-23rd-2025-tech-tools-that-respect-your-boundaries-automation-that-works-with-your-brain"
                    className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Newsletter
                  </Link>
                </div>
              </div>

              {/* Week 5 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 5: Building Sustainable Digital Habits</h3>
                <p className="text-brand-green-dark mb-4">
                  Your complete tech wellness toolkit for creating tech routines that prevent overwhelm and building systems that grow with your creative practice.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/july-31st-2025-building-sustainable-digital-habits-your-complete-tech-wellness-toolkit"
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

          {/* Quick Start Section */}
          <section className="mb-6 mt-0 bg-gradient-to-br from-brand-purple-dark/30 to-brand-green-accent/30 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl text-center">
            <h2 className="text-3xl font-display mb-6 text-white">READY TO START?</h2>
            <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
              Begin with one small, manageable step. Here are three simple ways to get started:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="font-display text-brand-green-dark mb-2">Create Your First Archive</h3>
                <p className="text-brand-green-dark text-sm">Move a couple of completed projects into an archive folder and notice how it feels to get that mental space back.</p>
              </div>
              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="font-display text-brand-green-dark mb-2">Set Up Distraction-Free Mode</h3>
                <p className="text-brand-green-dark text-sm">Create a writing mode on your computer that blocks notifications and minimizes visual clutter.</p>
              </div>
              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="font-display text-brand-green-dark mb-2">Organize Browser Bookmarks</h3>
                                 <p className="text-brand-green-dark text-sm">Sort your bookmarks into categories and delete the ones you haven&apos;t used in months.</p>
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
