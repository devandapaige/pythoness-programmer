import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import NewsletterSection from '../components/home/NewsletterSection'

// Define types for our content
interface FrameworkPillar {
  title: string;
  quickTip: string;
  reflectionQuestion: string;
  keyPoints: string[];
}

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: 'Mindful Automation: Systems That Work For You - The Pythoness Programmer',
  description: 'Explore mindful automation strategies for neurodivergent developers, focusing on systems that work with your existing tools and energy patterns.',
  openGraph: {
    title: 'Mindful Automation: Systems That Work For You',
    description: 'Unlock sustainable automation strategies tailored for neurodivergent thinkers—no new software subscriptions required.',
    type: 'website',
    url: 'https://www.pythonessprogrammer.com/mindful-automation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindful Automation: Systems That Work For You',
    description: 'Unlock sustainable automation strategies tailored for neurodivergent thinkers—no new software subscriptions required.',
  },
}

// Content data
const frameworkPillars: FrameworkPillar[] = [
  {
    title: 'Y - Your Unique Brain',
    quickTip: 'Start by identifying your peak focus hours',
    reflectionQuestion: 'When do you feel most energized and focused?',
    keyPoints: [
      'Understanding your natural information processing',
      'Identifying energy-draining vs. energizing tasks',
      'Recognizing your natural thinking patterns',
    ],
  },
  {
    title: 'O - Observe & Optimize',
    quickTip: 'Group similar tasks to reduce context switching',
    reflectionQuestion: 'What patterns do you notice in your most productive days?',
    keyPoints: [
      'Noticing workflow friction points',
      'Tracking daily energy patterns',
      'Monitoring cognitive load impact',
    ],
  },
  {
    title: 'U - Uncomplicate & Understand',
    quickTip: 'Document one automation win each week',
    reflectionQuestion: 'What small automation has made the biggest difference?',
    keyPoints: [
      'Starting with small, focused automations',
      'Building clear error handling',
      'Creating brain-friendly documentation',
    ],
  },
];

// Y.O.U. Framework Pillar Colors (for future reference):
// Y: Yellow - fill #ffde59, border #ffd52c
// O: Orange - fill #ffbd59, border #ff914d
// U: Blue   - fill #5ce1e6, border #0cc0df

export default function May2025LandingPage(): ReactNode {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Hero Section with Value Proposition */}
          <section className="mb-6 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2 mt-0">
              Mindful Automation: Systems That Work For Y.O.U.
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-4 mt-0">
              Unlock sustainable automation strategies tailored for neurodivergent thinkers—no new software subscriptions required.
            </p>
            <Link 
              href="#you-framework"
              className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors text-lg font-semibold shadow-lg mt-0"
              aria-label="Start learning about the Y.O.U. Framework"
            >
              Start the Y.O.U. Framework
            </Link>
          </section>

          {/* Podcast Section */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-2 text-brand-green-dark text-center mt-1">Listen to the Mindful Automation Episode</h2>
            <p className="text-brand-green-dark text-center mb-2">Learn how to create automation systems that work with your unique brain patterns, not against them.</p>
            <div className="w-full mt-0">
              <iframe 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/episode/6qqXLsuiHMGisicEDRLSye?utm_source=generator" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Mindful Automation Podcast Episode"
                aria-label="Spotify podcast player for Mindful Automation episode"
              />
            </div>
          </section>

          {/* Y.O.U. Framework Section */}
          <section id="you-framework" className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl font-display mb-2 text-brand-green-dark text-center tracking-tight mt-1">THE Y.O.U. FRAMEWORK</h2>
            <p className="text-lg md:text-xl text-brand-green-dark mb-4 text-center max-w-2xl mx-auto" style={{lineHeight: 1.4}}>
              The Y.O.U. Framework helps you build automation systems that work with your unique thinking style, not against it. No more forcing yourself into rigid productivity systems that don&apos;t fit your brain.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-0">
              {frameworkPillars.map((pillar, i) => {
                // Assign color classes and hex codes for each pillar
                const colorStyles = [
                  {
                    border: 'border-[#ffd52c]',
                    bg: 'bg-[#ffde59]/30',
                    iconBg: '#ffde59',
                    iconBorder: '#ffd52c',
                    letter: 'Y',
                  },
                  {
                    border: 'border-[#ff914d]',
                    bg: 'bg-[#ffbd59]/30',
                    iconBg: '#ffbd59',
                    iconBorder: '#ff914d',
                    letter: 'O',
                  },
                  {
                    border: 'border-[#0cc0df]',
                    bg: 'bg-[#5ce1e6]/30',
                    iconBg: '#5ce1e6',
                    iconBorder: '#0cc0df',
                    letter: 'U',
                  },
                ][i];
                // Remove the letter from the title for the header
                const headerTitle = pillar.title.replace(/^\w\s-\s/, '');
                return (
                  <div
                    key={pillar.title}
                    className={`relative rounded-2xl shadow-lg p-5 md:p-6 border-t-8 ${colorStyles.border} ${colorStyles.bg} hover:scale-105 transition-transform duration-200`}
                  >
                    {/* Icon Circle with Letter */}
                    <div className="mb-3 flex justify-center">
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: colorStyles.iconBg,
                        border: `3px solid ${colorStyles.iconBorder}`,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                        fontWeight: 700,
                        fontSize: 24,
                        color: '#234236', // brand-green-dark
                        letterSpacing: '0.05em',
                        fontFamily: 'Norwester, Arial, sans-serif',
                      }}>
                        {colorStyles.letter}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display mb-2 text-brand-green-dark text-center mt-1" style={{lineHeight: 1.2}}>{headerTitle}</h3>
                    <div className="mb-2 text-brand-purple-dark font-semibold text-center" style={{lineHeight: 1.2}}>Quick Tip:</div>
                    <p className="mb-3 text-center" style={{lineHeight: 1.4}}>{pillar.quickTip}</p>
                    <div className="mb-1 text-brand-green-dark font-semibold text-center" style={{lineHeight: 1.2}}>Ask Yourself:</div>
                    <p className="mb-3 text-center" style={{lineHeight: 1.4}}>{pillar.reflectionQuestion}</p>
                    <ul className="list-disc pl-5 text-brand-green-dark text-sm" style={{lineHeight: 1.4}}>
                      {pillar.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PDF Resource Section */}
          <section className="mb-6 mt-0 bg-gradient-to-br from-[#ffde59]/30 via-[#ffbd59]/30 to-[#5ce1e6]/30 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl text-center">
            <h2 className="text-3xl font-display mb-4 text-white">Download the Y.O.U. Framework Guide</h2>
            <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
              Get your comprehensive guide to implementing the Y.O.U. Framework in your daily workflow. Includes worksheets, templates, and step-by-step instructions.
            </p>
            <Link 
              href="/mindful-automation/youframework.pdf"
              className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors text-lg font-semibold shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF Guide
            </Link>
          </section>

          {/* Weekly Recaps Section */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-3xl font-display mb-2 text-brand-green-dark text-center mt-1">WEEKLY DEEP DIVES</h2>
            <p className="text-lg text-brand-green-dark mb-4 text-center">
              Each week we explore a different aspect of mindful automation, with practical resources and real-world examples.
            </p>

            <div className="space-y-8">
              {/* Week 1 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 1: Your Unique Brain</h3>
                <p className="text-brand-green-dark mb-4">
                  Understanding your unique brain patterns and learning to observe and optimize your workflow. Start with simple, maintainable automations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/the-you-framework"
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
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 2: Energy-Aware Automation</h3>
                <p className="text-brand-green-dark mb-4">
                  Mapping your daily energy patterns, creating automations that respect your boundaries, and building in rest and recovery time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/mindful-automation-systems"
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
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 3: Error-Proofing Your Systems</h3>
                <p className="text-brand-green-dark mb-4">
                  Creating robust backup processes, building clear documentation that works for your brain, and setting up effective error notifications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/error-proofing-your-automation"
                    className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Newsletter
                  </Link>
                  <Link 
                    href="/mindful-automation/error-proofing-worksheet.pdf"
                    className="inline-block bg-brand-green-accent text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Worksheet
                  </Link>
                </div>
              </div>

              {/* Week 4 */}
              <div className="bg-brand-green-dark/10 p-6 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-brand-green-dark mt-1">Week 4: Bringing It All Together</h3>
                <p className="text-brand-green-dark mb-4">
                  Reviewing and refining your automation strategy, creating your personal automation playbook, and building a support system for your automated workflows.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://newsletter.pythonessprogrammer.com/p/bringing-it-all-together-mindful-automation-1"
                    className="inline-block bg-brand-purple-dark text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Newsletter
                  </Link>
                  <Link 
                    href="https://www.canva.com/design/DAGorHEU8wY/lXRelW3MghRn5kUZKERZUw/view?utm_content=DAGorHEU8wY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hab887fd650"
                    className="inline-block bg-brand-green-accent text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Whiteboard
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="mt-12">
            <NewsletterSection bgColor="bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark" />
          </section>

          {/* Update Banner - Moved to bottom */}
          <div className="mt-12 bg-brand-green-accent/20 text-white text-center py-2 px-4 rounded-lg" role="status" aria-label="Content update status">
            <p className="text-sm">✨ Last updated: May 2025 ✨</p>
          </div>
        </div>
      </div>
    </main>
  )
} 