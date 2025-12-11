import Image from 'next/image'
import Link from 'next/link'
import { calculateYearsOfExperience } from '@/lib/utils'

export const metadata = {
  title: 'About Amanda | Pythoness Programmer',
  description: 'Learn about Amanda Nelson, the Pythoness Programmer. Tech coaching and development services with a focus on neurodivergent-friendly approaches and digital confidence.',
}

export default function AboutPage() {
  // Calculate years of experience (automatically updates)
  const softwareEngineeringYears = calculateYearsOfExperience(2021, 10) // Started October 2021
  const communicationsYears = calculateYearsOfExperience(2011, 1) // Started January 2011
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/90 to-brand-purple-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-display mb-6 text-white">
                  I&apos;m Amanda, the Pythoness
                </h1>
                <p className="text-xl text-brand-cream/90 leading-relaxed">
                  I help small business owners find their tech stack simple, easy, and functional—so you can manage it yourself without needing a regular IT person &quot;on-call.&quot;
                </p>
                <p className="text-lg text-brand-cream/80 mt-4">
                  With {softwareEngineeringYears} years of software engineering experience and {communicationsYears}+ years in communications, customer service, and business operations, I bring a unique perspective to tech challenges. My background spans access control security, training and hiring, managing, scheduling, order fulfillment, law settlements and recalls—experience that translates tremendously to understanding how businesses actually work and how systems are designed to succeed or fail.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-brand-cream/80">
                  What makes me unique? I don&apos;t want you dependent on me—I want you independent and confident. My goal is to help you build a tech stack that&apos;s simple enough to manage yourself, powerful enough to grow your business, and flexible enough to adapt as you evolve.
                </p>
                <p className="text-lg text-brand-cream/80">
                  My approach is rooted in empathy, accessibility, and the belief that technology should work for you, not against you. No more feeling like you need an IT person on speed dial—just clear, practical solutions you can understand and maintain.
                </p>
              </div>

              <div className="bg-brand-purple-light/20 backdrop-blur-sm rounded-2xl p-6 border border-brand-purple-light/30">
                <p className="text-lg text-brand-cream mb-2">
                  <strong>Current Status:</strong> Rest Mode
                </p>
                <p className="text-brand-cream/90">
                  Services resume <strong>March 2026</strong>. Active season: March - November 2026.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden ring-4 ring-brand-purple-light/30">
                <Image
                  src="/images/headshot.png"
                  alt="Amanda Nelson - The Pythoness Programmer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-purple-light/20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-cream/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-brand-green-dark">
              My Story
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-green-dark to-transparent"></div>
              <p className="text-xl text-brand-green-dark/80 max-w-2xl">
                How I became the Pythoness and why I&apos;m passionate about helping others find tech clarity.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-green-dark to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
            My journey into tech has always been about making sense of the chaos. I&apos;ve found that the biggest breakthroughs—in code and in life—often come after periods of deep confusion. My gift is sitting with that complexity until the &apos;aha&apos; moment arrives, and then sharing that clarity with others. But it&apos;s not just about solving problems—it&apos;s about seeing the patterns others miss and connecting dots across industries that have historically gatekept knowledge.
            </p>
            
            <p>
              I discovered that traditional tech approaches often don&apos;t account for different ways of thinking and processing information. The overwhelm of too many options, the frustration of tools that don&apos;t work the way my brain does, and the constant feeling of being &quot;behind&quot; in an ever-changing landscape. But more than that, I realized that many industries—law, marketing, tech—are designed to keep people dependent rather than empowered.
            </p>
            
            <p>
              This led me to develop a different approach - one that prioritizes clarity over complexity, accessibility over assumptions, and individual needs over one-size-fits-all solutions. I don&apos;t want clients who want me to solve their problems—I want clients who want to solve their own problems but need a hand in bringing their vision to life.
            </p>
            
            <p>
              Today, I combine my technical expertise with deep empathy for the neurodivergent experience to help small business owners build digital fluency, support digital wellbeing, and create workflows that actually feel comfortable for your unique brain. My approach comes from a place of deep inner knowledge and connected insights from my background in sociology, civics, politics, and human rights.
            </p>
            <p>
              Alongside my passion for making tech accessible, I&apos;ve had the privilege of working as a Software Engineer since October 2021, when I completed a bootcamp and pivoted into tech. But my real superpower comes from my {communicationsYears}+ years in communications and customer service across access control security, training and hiring, managing, scheduling, order fulfillment (both in-person and online), law settlements and recalls, and other communication patterns. This diverse background translates tremendously to my tech work—I understand how businesses actually operate, how people communicate, and how systems are designed to work (or fail). My technical background means I bring not just empathy, but also deep operational insights and proven results to every project. But what truly sets me apart is my ability to see patterns others miss—connections across law, marketing, and tech that reveal how systems are designed to work, and where they&apos;re designed to fail.
            </p>
            <p>
              <strong>Who I serve:</strong> Small business owners who are tired of feeling dependent on IT support. You want a tech stack that&apos;s simple, easy to understand, and functional—something you can manage yourself without needing someone on-call. You&apos;re ready to take control of your technology, but you need guidance to get there. That&apos;s where I come in. I help you build systems you can actually understand and maintain, so you can focus on running your business instead of managing tech emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* The "Psychic" Approach Section */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              Why &quot;Digital Psychic&quot;?
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <p className="text-xl text-white max-w-3xl">
                My insights aren&apos;t mystical predictions—they&apos;re real connections drawn from deep pattern recognition across industries that have historically gatekept knowledge.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
                <h3 className="text-2xl font-display mb-4 text-brand-cream">Pattern Recognition</h3>
                <p className="text-white/90">
                  My background in sociology, civics, and politics gives me a unique lens for seeing how systems truly work—and where they&apos;re designed to fail. I don&apos;t just see the surface-level tech issues; I see the deeper structural problems that create them.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
                <h3 className="text-2xl font-display mb-4 text-brand-cream">Industry Connections</h3>
                <p className="text-white/90">
                  I make unsettling connections across law, marketing, and tech—industries that have historically gatekept knowledge from the people who need it most. My recommendations come from understanding how these systems interconnect and where the gaps are designed to keep people dependent.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
                <h3 className="text-2xl font-display mb-4 text-brand-cream">Spiritual Creation</h3>
                <p className="text-white/90">
                  Creation and ideation are spiritual processes. I combine the mystical with the practical to get at the heart of what your business truly needs. The tarot cards aren&apos;t about fortune-telling—they&apos;re about accessing deeper intuition and wisdom.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
                <h3 className="text-2xl font-display mb-4 text-brand-cream">Empowering, Not Enabling</h3>
                <p className="text-white/90">
                  I don&apos;t want clients who want me to solve their problems. I want clients who want to solve their own problems but need a hand in bringing their vision to life. My role is to guide you to your own insights and help you implement them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active & Rest Periods Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/90 to-brand-purple-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              Active & Rest Periods
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
              <p className="text-xl text-brand-cream/90 max-w-3xl">
                Following the ancient tradition of the Pythia Oracles of Delphi
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-brand-purple-light/20">
              <h3 className="text-2xl font-display mb-4 text-brand-purple-light">
                The Tradition of Rest
              </h3>
              <p className="text-brand-cream/90 mb-4">
                Just as the Pythia, the high priestess of the Temple of Apollo at Delphi, observed periods of rest during the winter months, I honor cycles of rest and renewal. The Pythia understood that wisdom and service require periods of restoration—times to withdraw, reflect, and prepare for the active season ahead.
              </p>
              <p className="text-brand-cream/90">
                <strong>Active Season:</strong> March - November<br />
                <strong>Rest Period:</strong> November - March
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-brand-purple-light/20">
              <h3 className="text-2xl font-display mb-4 text-brand-purple-light">
                Accommodating Chronic Illness & Chronic Pain
              </h3>
              <p className="text-brand-cream/90">
                This schedule isn&apos;t just about tradition—it&apos;s about sustainability and self-care. Living with chronic illnesses and chronic pain means I need to honor my body&apos;s needs and limitations. The rest period allows me to manage my health, reduce stress, and prevent burnout that would otherwise compromise the quality of my work and my ability to serve clients well.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-brand-purple-light/20">
              <h3 className="text-2xl font-display mb-4 text-brand-purple-light">
                Nurturing Creativity Through Slowness
              </h3>
              <p className="text-brand-cream/90">
                The rest period also forces me to live a slower life—and that&apos;s intentional. In our fast-paced world, creativity often gets squeezed out by constant productivity demands. By committing to rest, I create space for reflection, inspiration, and the kind of deep thinking that leads to breakthrough insights. This slower pace isn&apos;t a limitation—it&apos;s a feature that makes my active season more powerful and my insights more valuable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Philosophy Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/90 to-brand-purple-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              My Philosophy
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
              <p className="text-xl text-brand-cream/90 max-w-3xl">
                The core principles that guide my approach to tech coaching and development, including honoring rest as a mirror to the Oracles of Delphi.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-purple-light/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Brain-Friendly Design</h3>
              <p className="text-brand-cream/80">
                Technology should adapt to how your brain works, not force you to adapt to it. I design solutions that respect neurodivergent thinking patterns.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Clarity Over Complexity</h3>
              <p className="text-brand-cream/80">
                The best solution is often the simplest one. I help you cut through the noise and find what actually works for your specific needs.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Judgment-Free Support</h3>
              <p className="text-brand-cream/80">
                No question is too basic, no challenge too small. I provide a safe space to explore technology without fear of judgment or shame.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Sustainable Solutions</h3>
              <p className="text-brand-cream/80">
                I focus on building systems that grow with you, not ones that require constant maintenance or cause burnout.
              </p>
            </div>

            {/* Principle 5 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Empowering Independence</h3>
              <p className="text-brand-cream/80">
                My goal is to help you develop the confidence and skills to navigate technology independently, with ongoing support when needed.
              </p>
            </div>

            {/* Principle 6 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-purple-light/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Community-Centered Bargains</h3>
              <p className="text-brand-cream/80">
                I believe in clear, fair exchanges. When we work together, whether in a coaching session or in the free community, my commitment is to provide immense value in exchange for your trust and engagement. We build this space together.
              </p>
            </div>
          </div>

          {/* Centered Rest & Renewal Statement */}
          <div className="mt-16 text-center">
            <div className="bg-brand-purple-light/10 backdrop-blur-sm rounded-2xl p-8 border border-brand-purple-light/20 shadow-2xl max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-brand-purple-light/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🌙</span>
              </div>
              <h3 className="text-3xl font-display mb-6 text-brand-cream">
                Honoring Rest & Renewal
              </h3>
              <p className="text-xl text-brand-cream/90 leading-relaxed max-w-3xl mx-auto">
                Following the tradition of the Pythia Oracles of Delphi, I honor cycles of rest and renewal. This schedule accommodates my chronic illnesses and chronic pain while nurturing creativity through intentional slowness. Rest isn&apos;t a limitation—it&apos;s essential for sustainable service and deeper insights. By forcing myself to live a slower life, I create space for reflection, inspiration, and the kind of deep thinking that leads to breakthrough insights.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/90 to-brand-purple-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
            Services Resume March 2026
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            We&apos;re currently in a period of rest and renewal. When we return, I&apos;ll be ready to guide you with pattern recognition, spiritual insight, and deep technical understanding—but the solutions will be yours.
          </p>
          <div className="bg-brand-purple-light/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-purple-light/30 max-w-2xl mx-auto">
            <p className="text-lg text-brand-cream mb-4">
              Subscribe to our newsletter to be the first to know when our schedule reopens.
            </p>
            <Link
              href="https://newsletter.pythonessprogrammer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-purple-light text-brand-purple-dark px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
