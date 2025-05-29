import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'May 2025: Mindful Automation - The Pythoness Programmer',
  description: 'Explore mindful automation strategies for neurodivergent developers, focusing on systems that work with your existing tools and energy patterns.',
}

export default function May2025LandingPage(): ReactNode {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="font-display font-normal text-4xl md:text-5xl text-white mb-6">
            Mindful Automation: Systems That Work For You
          </h1>
          
          {/* Overview Section */}
          <section className="mb-12">
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-6">
              May 2025 focused on &ldquo;Mindful Automation&rdquo; - setting up systems that work with your existing tools rather than adding new software subscriptions.
            </p>
            <p className="text-lg md:text-xl text-white font-light leading-relaxed">
              We explored how simple if/then thinking can help neurodivergent brains create essential external systems while maintaining control over tech spending 
              and avoiding automation overwhelm.
            </p>
          </section>

          {/* Weekly Content Sections */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Week 1 */}
            <section className="bg-white/90 p-6 rounded-lg shadow-md border border-brand-green-accent">
              <h2 className="text-2xl font-semibold mb-4 text-brand-green-dark">Week 1: The Y.O.U. Framework</h2>
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-brand-green-dark">Key Components:</h3>
                <ul className="list-disc pl-5 text-brand-green-dark">
                  <li>Understanding your unique brain patterns</li>
                  <li>Learning to observe and optimize your workflow</li>
                  <li>Starting with simple, maintainable automations</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-brand-green-dark">The 2-Minute Y.O.U. Check-In:</h3>
                <ol className="list-decimal pl-5 text-brand-green-dark">
                  <li>Does this reduce my cognitive load?</li>
                  <li>Can I maintain this system?</li>
                  <li>What&apos;s my backup plan?</li>
                  <li>Can I do this with my existing tools?</li>
                </ol>
              </div>
            </section>

            {/* Week 2 */}
            <section className="bg-white/90 p-6 rounded-lg shadow-md border border-brand-green-accent">
              <h2 className="text-2xl font-semibold mb-4 text-brand-green-dark">Week 2: Energy-Aware Automation</h2>
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-brand-green-dark">Daily Energy Structure:</h3>
                <ul className="list-disc pl-5 text-brand-green-dark">
                  <li>Morning (Low Energy): Morning pages, calendar review</li>
                  <li>First Work Block (High Energy): Deep work, no interruptions</li>
                  <li>Afternoon Break (Low Energy): Admin tasks, meal prep</li>
                  <li>Second Work Block (High Energy): Creative work, content creation</li>
                </ul>
              </div>
            </section>

            {/* Week 3 */}
            <section className="bg-white/90 p-6 rounded-lg shadow-md border border-brand-green-accent">
              <h2 className="text-2xl font-semibold mb-4 text-brand-green-dark">Week 3: Error-Proofing Your Systems</h2>
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-brand-green-dark">Key Elements:</h3>
                <ul className="list-disc pl-5 text-brand-green-dark">
                  <li>Creating robust backup processes</li>
                  <li>Building clear documentation</li>
                  <li>Setting up effective error notifications</li>
                  <li>Maintaining systems without overwhelm</li>
                </ul>
              </div>
              <Link 
                href="/mindful-automation/error-proofing-worksheet.pdf"
                className="inline-block bg-brand-green-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Download Error-Proofing Worksheet
              </Link>
            </section>

            {/* Week 4 */}
            <section className="bg-white/90 p-6 rounded-lg shadow-md border border-brand-green-accent">
              <h2 className="text-2xl font-semibold mb-4 text-brand-green-dark">Week 4: Bringing It All Together</h2>
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-brand-green-dark">Key Components:</h3>
                <ul className="list-disc pl-5 text-brand-green-dark">
                  <li>Reviewing and refining your automation strategy</li>
                  <li>Creating your personal automation playbook</li>
                  <li>Building a support system for your workflows</li>
                </ul>
              </div>
              <Link 
                href="https://www.canva.com/design/your-template-link"
                className="inline-block bg-brand-purple-dark text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Get Canva Whiteboard Template
              </Link>
            </section>
          </div>

          {/* Resources Section */}
          <section className="mt-12 bg-white/90 border border-brand-green-accent rounded-2xl p-6 text-center shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-brand-green-dark">Additional Resources</h2>
            <div className="grid gap-4">
              <Link 
                href="https://open.spotify.com/show/0VLZyZrD50Pk9JcyJL2AdX"
                className="text-brand-green-accent hover:text-brand-purple-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen on Spotify
              </Link>
              <Link 
                href="https://www.youtube.com/playlist?list=PLl8kW5pVKC-p8kzPChiNPoEHkfi_kR1LA"
                className="text-brand-green-accent hover:text-brand-purple-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube
              </Link>
              <Link 
                href="https://pythoness.substack.com/"
                className="text-brand-green-accent hover:text-brand-purple-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on Substack
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 