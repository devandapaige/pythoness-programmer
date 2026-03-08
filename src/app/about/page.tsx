import Image from 'next/image'
import Link from 'next/link'
import { calculateYearsOfExperience } from '@/lib/utils'

export const metadata = {
  title: 'About Amanda | Pythoness Programmer',
  description: 'I philosophize with other decolonizing neurodivergents about how our tech struggles reveal what we\'ve internalized and what our brains actually need. Reflection, pattern recognition, and brain-friendly clarity—not rescue.',
}

export default function AboutPage() {
  // Calculate years of experience (automatically updates)
  const softwareEngineeringYears = calculateYearsOfExperience(2021, 10) // Started October 2021
  const communicationsYears = calculateYearsOfExperience(2011, 1) // Started January 2011
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-display mb-6 text-white">
                  I&apos;m Amanda, the Pythoness
                </h1>
                <p className="text-xl text-brand-cream/90 leading-relaxed italic mb-6">
                  I philosophize with other decolonizing neurodivergents about how our tech struggles reveal what we&apos;ve internalized and what our brains actually need.
                </p>
                <p className="text-xl text-brand-cream/90 leading-relaxed">
                  I&apos;m not here to rescue you from tech emergencies. I&apos;m here to sit with you in the aftermath of your last tech hurdle and ask: What is this struggle trying to teach you?
                </p>
                <p className="text-lg text-brand-cream/80 mt-4">
                  You&apos;re already doing the work. You&apos;re building your own systems, learning your tools, making progress. But you keep hitting the same walls. The same friction points. The same patterns that slow you down or make you feel like you&apos;re failing when you&apos;re not.
                </p>
                <p className="text-lg text-brand-cream/80 mt-4">
                  I help you see what you can&apos;t see alone: the internalized assumptions hiding in your workflow, the colonial logic baked into your folder structure, the ways your tools are working against your neurodivergent brain instead of with it.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-brand-cream/80">
                  I don&apos;t swoop in with quick fixes. I guide you through reflection and pattern recognition so you understand why your systems keep breaking—and discover new pathways forward.
                </p>
                <p className="text-lg text-brand-cream/80">
                  With {softwareEngineeringYears} years of software engineering and {communicationsYears}+ years in communications, customer service, and business operations, I bring deep technical expertise plus a lens for how systems are designed to work—or fail. That background informs my coaching; I don&apos;t build custom websites or software for clients under this brand. My sessions blend that expertise with tarot-guided intuition and neurodivergent-centered design. We start and end with a tarot pull to guide our reflection.
                </p>
              </div>

            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden ring-4 ring-brand-green-accent/30">
                <Image
                  src="/images/headshot.png"
                  alt="Amanda Nelson - The Pythoness Programmer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-green-accent/20 rounded-full"></div>
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
              <strong>Who this is for:</strong> You&apos;re looking for a guide who helps you understand your tech struggles, not just solve them. You might be a neurodivergent creative who keeps hitting the same workflow walls; someone who&apos;s tried all the &quot;productivity&quot; tools and they all feel wrong; a small business owner tired of tech that doesn&apos;t fit how your brain works; a person doing decolonizing work who wants tech that aligns with your values; or anyone who wants to learn, not just be rescued.
            </p>
            <p>
              <strong>Who this isn&apos;t for:</strong> People looking for emergency tech rescue; anyone wanting me to &quot;just fix it&quot; without understanding why it broke; folks who aren&apos;t interested in reflection or pattern work; or anyone expecting me to have all the answers. I&apos;m a guide, not a guru.
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
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-brand-green-accent/20">
              <h3 className="text-2xl font-display mb-4 text-brand-green-accent">
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

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-brand-green-accent/20">
              <h3 className="text-2xl font-display mb-4 text-brand-green-accent">
                Accommodating Chronic Illness & Chronic Pain
              </h3>
              <p className="text-brand-cream/90">
                This schedule isn&apos;t just about tradition—it&apos;s about sustainability and self-care. Living with chronic illnesses and chronic pain means I need to honor my body&apos;s needs and limitations. The rest period allows me to manage my health, reduce stress, and prevent burnout that would otherwise compromise the quality of my work and my ability to serve clients well.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-brand-green-accent/20">
              <h3 className="text-2xl font-display mb-4 text-brand-green-accent">
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
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              My Philosophy
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
              <p className="text-xl text-brand-cream/90 max-w-3xl">
                The core values that guide how I work with you: learning over dependency, resourcefulness, serenity, inclusion, humor, and resilience.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Learning */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Learning</h3>
              <p className="text-brand-cream/80">
                I believe in building digital fluency, not dependency. My goal is to guide you to your own aha moments—to help you understand your tech deeply enough that you can troubleshoot your own patterns.
              </p>
            </div>

            {/* Resourcefulness */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Resourcefulness</h3>
              <p className="text-brand-cream/80">
                There are so many tools, approaches, and frameworks that don&apos;t get mainstream attention but might be perfect for your brain. I love pointing people toward resources they&apos;ve never heard of—the hidden gems that change everything.
              </p>
            </div>

            {/* Serenity */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌙</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Serenity</h3>
              <p className="text-brand-cream/80">
                Tech struggles are stressful enough. Our sessions are calm, grounded spaces where we can slow down and actually think. No pressure, no judgment, no urgency—just clarity.
              </p>
            </div>

            {/* Inclusion */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌈</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Inclusion</h3>
              <p className="text-brand-cream/80">
                This is a safe, affirming space for LGBTQIA+ folks, sex workers, and anyone marginalized by mainstream tech culture. I center neurodivergent experiences and decolonizing practices in everything I do.
              </p>
            </div>

            {/* Humor */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Humor</h3>
              <p className="text-brand-cream/80">
                Sometimes the best way through a tech struggle is to laugh at the absurdity of it all. I bring levity and perspective—because taking our work seriously doesn&apos;t mean we can&apos;t have fun.
              </p>
            </div>

            {/* Resilience */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Resilience</h3>
              <p className="text-brand-cream/80">
                You&apos;ve survived every tech hurdle so far. My job is to help you build systems and understanding that make you even stronger for the next one. We&apos;re not just solving problems—we&apos;re building capacity.
              </p>
            </div>
          </div>

          {/* Centered Rest & Renewal Statement */}
          <div className="mt-16 text-center">
            <div className="bg-brand-green-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-brand-green-accent/20 shadow-2xl max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
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
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
            Ready to Reflect?
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            If you&apos;re tired of repeating the same tech mistakes and ready to understand what your struggles are trying to teach you, let&apos;s work together. I offer Software Psychic sessions—reflection sessions with tarot-guided insight and pattern recognition—so you don&apos;t make it a third time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/services"
              className="inline-block bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
            >
              View Services &amp; Pricing
            </Link>
            <Link
              href="https://cal.com/pythoness/async"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 border-2 border-brand-cream/50 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold"
            >
              Book Async Reading — $30
            </Link>
          </div>
          <p className="text-brand-cream/80 text-sm mb-2">
            Or book a live session: <Link href="https://cal.com/pythoness/20min" target="_blank" rel="noopener noreferrer" className="text-brand-green-accent hover:underline font-medium">20-min</Link> or <Link href="https://cal.com/pythoness/60min" target="_blank" rel="noopener noreferrer" className="text-brand-green-accent hover:underline font-medium">60-min</Link>
          </p>
          <p className="text-brand-cream/70 text-sm">
            Stay in the loop: <Link href="https://newsletter.pythonessprogrammer.com/" target="_blank" rel="noopener noreferrer" className="text-brand-green-accent hover:underline">Subscribe to our newsletter</Link> for insights and updates.
          </p>
        </div>
      </section>
    </main>
  )
}
