import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pythoness Network | Free Slack Community',
  description: 'Join the Pythoness Network - a free Slack community for mindful productivity, tech support, and co-working sessions.',
}

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-brand-green-dark text-white">
      {/* Hero Section */}
      <div className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl text-white mb-6">
            Pythoness Network
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Our Slack Community for Mindful Tech & Productivity
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="https://join.slack.com/t/pythoness-network/shared_invite/zt-39an3ft5g-aECsS7ST9aapySR9yGewZw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green-accent text-brand-green-dark px-8 py-4 rounded-lg font-medium text-lg hover:bg-brand-green-accent/90 transition-colors"
            >
              Join the Community
            </Link>
            <Link
              href="https://www.addevent.com/calendar/em600805"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Add to Calendar
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Co-Working Sessions */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
            <div className="text-3xl mb-4">🗓️</div>
            <h3 className="font-display text-xl text-white mb-3">Facilitated Co-Working</h3>
            <p className="text-white/80 mb-4">
              Join our scheduled sessions for focused work and community connection.
            </p>
            <ul className="text-white/70 text-sm space-y-2">
              <li><strong>Weekly Wrap-Up:</strong> Fridays @ 1-3 PM ET</li>
              <li><strong>Monthly Workshop:</strong> Last Tuesday @ 8-9:30 PM ET</li>
            </ul>
          </div>

          {/* Tech Support */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="font-display text-xl text-white mb-3">Tech Support Hub</h3>
            <p className="text-white/80 mb-4">
              Get help with your tech challenges in a supportive environment.
            </p>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• All questions welcome</li>
              <li>• Structured problem-solving</li>
              <li>• Community-driven solutions</li>
            </ul>
          </div>

          {/* Brain Hacks */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="font-display text-xl text-white mb-3">Brain Hacks & Strategies</h3>
            <p className="text-white/80 mb-4">
              Access frameworks and tools for mindful productivity.
            </p>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• The Y.O.U. Framework</li>
              <li>• The GRIT Framework</li>
              <li>• Brain Dump Processing</li>
            </ul>
          </div>

          {/* Accessibility */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="font-display text-xl text-white mb-3">Accessibility Library</h3>
            <p className="text-white/80 mb-4">
              Community-curated resources for neuroinclusive design.
            </p>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• WCAG Guidelines</li>
              <li>• Testing Tools</li>
              <li>• Best Practices</li>
            </ul>
          </div>

          {/* Celebrate Wins */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="font-display text-xl text-white mb-3">Celebrate Your Wins</h3>
            <p className="text-white/80 mb-4">
              Share your progress and celebrate with the community.
            </p>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Project launches</li>
              <li>• Bug fixes</li>
              <li>• Milestones</li>
            </ul>
          </div>

          {/* Huddles */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="font-display text-xl text-white mb-3">Start Huddles</h3>
            <p className="text-white/80 mb-4">
              Create impromptu co-working sessions anytime.
            </p>
            <ul className="text-white/70 text-sm space-y-2">
              <li>• Voice calls</li>
              <li>• Screen sharing</li>
              <li>• Body doubling</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-display text-3xl text-white text-center mb-12">Our Community Bargains</h2>
        
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
            <h3 className="font-display text-xl text-white mb-4">Core Agreements</h3>
            <div className="space-y-4 text-white/80">
              <div>
                <h4 className="font-medium text-white mb-2">1. Lead with Support, Not Solutions</h4>
                <p className="text-sm">Our default mode is validation and empathy. Acknowledge experiences before offering advice.</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">2. Prioritize Impact Over Intent</h4>
                <p className="text-sm">We are responsible for the impact of our words, regardless of our intentions.</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">3. Contribute, Don&apos;t Correct</h4>
                <p className="text-sm">Share diverse experiences without debating which is more &quot;correct.&quot;</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">4. Practice a &quot;Right to Pass&quot;</h4>
                <p className="text-sm">You&apos;re not obligated to respond to every comment. Disengage when needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-display text-3xl text-white text-center mb-8">Upcoming Events</h2>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl text-white mb-4">Weekly Wrap-Up</h3>
              <p className="text-white/80 mb-4">
                Join us for a dedicated session to finish the week strong. This is a great time to complete any pressing tasks before the weekend.
              </p>
              <div className="text-brand-green-accent font-medium">
                Fridays @ 1 PM - 3 PM ET
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-xl text-white mb-4">Monthly Accessibility & Meditation Workshop</h3>
              <p className="text-white/80 mb-4">
                A 90-minute session combining a deep dive into digital accessibility with a guided meditation to help us recenter.
              </p>
              <div className="text-brand-green-accent font-medium">
                Last Tuesday @ 8 PM - 9:30 PM ET
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              href="https://www.addevent.com/calendar/em600805"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green-accent text-brand-green-dark px-6 py-3 rounded-lg font-medium hover:bg-brand-green-accent/90 transition-colors"
            >
              Subscribe to Calendar
            </Link>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="font-display text-3xl text-white mb-6">Ready to Join?</h2>
        <p className="text-xl text-white/80 mb-8">
          Ready to be part of a community built on mutual support and a shared desire for digital clarity? Your voice is a valuable part of our perspective.
        </p>
        <Link
          href="https://join.slack.com/t/pythoness-network/shared_invite/zt-39an3ft5g-aECsS7ST9aapySR9yGewZw"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-green-accent text-brand-green-dark px-8 py-4 rounded-lg font-medium text-lg hover:bg-brand-green-accent/90 transition-colors inline-block"
        >
          Join Pythoness Network
        </Link>
      </div>
    </div>
  )
}
