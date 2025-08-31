import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '../../components/ServiceCard'

export const metadata = {
  title: 'About Amanda | Pythoness Programmer',
  description: 'Learn about Amanda Nelson, the Pythoness Programmer. Tech coaching and development services with a focus on neurodivergent-friendly approaches and digital confidence.',
}

export default function AboutPage() {
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
                  I help neurodivergent creatives and small businesses build digital fluency through thoughtful tech guidance and brain-friendly workflows.
                </p>
                <p className="text-lg text-brand-cream/80 mt-4">
                  With 3 years of software engineering experience and 10+ years in communications, customer service, and business operations, I bring a unique perspective to tech challenges. My background spans access control security, training and hiring, managing, scheduling, order fulfillment, law settlements and recalls—experience that translates tremendously to understanding how businesses actually work and how systems are designed to succeed or fail.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-brand-cream/80">
                  With experience across both technical and operational systems, I understand the overwhelm that comes with too many tools and not enough clarity.
                </p>
                <p className="text-lg text-brand-cream/80">
                  My approach is rooted in empathy, accessibility, and the belief that technology should work for you, not against you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
                >
                  View My Services
                </Link>
                <Link
                  href="https://cal.com/pythoness"
                  target="_blank"
                  className="inline-block bg-transparent border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-brand-cream/10 hover:border-brand-cream/50 transition-all duration-300 text-lg font-semibold"
                >
                  Book a Call
                </Link>
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
              Today, I combine my technical expertise with deep empathy for the neurodivergent experience to help others build digital fluency, support digital wellbeing, and create workflows that actually feel comfortable for your unique brain. My approach comes from a place of deep inner knowledge and connected insights from my background in sociology, civics, politics, and human rights.
            </p>
            <p>
              Alongside my passion for making tech accessible, I&apos;ve had the privilege of working as a Software Engineer since 2021, when I completed a bootcamp and pivoted into tech. But my real superpower comes from my 10+ years in communications and customer service across access control security, training and hiring, managing, scheduling, order fulfillment (both in-person and online), law settlements and recalls, and other communication patterns. This diverse background translates tremendously to my tech work—I understand how businesses actually operate, how people communicate, and how systems are designed to work (or fail). My technical background means I bring not just empathy, but also deep operational insights and proven results to every project. But what truly sets me apart is my ability to see patterns others miss—connections across law, marketing, and tech that reveal how systems are designed to work, and where they&apos;re designed to fail.
            </p>
          </div>
        </div>
      </section>

      {/* The "Psychic" Approach Section */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
              Why &quot;Software Psychic&quot;?
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
                The core principles that guide my approach to tech coaching and development.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-cream to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-none shadow-2xl">
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
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
              <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">Community-Centered Bargains</h3>
              <p className="text-brand-cream/80">
                I believe in clear, fair exchanges. When we work together, whether in a coaching session or in the free community, my commitment is to provide immense value in exchange for your trust and engagement. We build this space together.
              </p>
            </div>
          </div>

          {/* Centered Affirming Statement */}
          <div className="mt-16 text-center">
            <div className="bg-brand-green-accent/10 backdrop-blur-sm rounded-2xl p-8 border border-brand-green-accent/20 shadow-2xl max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="text-3xl font-display mb-6 text-brand-cream">
                LGBTQIA+ & SW Affirming
              </h3>
              <p className="text-xl text-brand-cream/90 leading-relaxed max-w-3xl mx-auto">
                I provide a safe, affirming space for LGBTQIA+ individuals and SW, understanding the unique challenges and opportunities in our communities. This commitment to inclusivity and support is the foundation that makes all my other principles possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 text-black">
            <h2 className="text-4xl md:text-5xl font-display mb-6 text-black">
              What I Do
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-black to-transparent"></div>
              <p className="text-xl text-black/80 max-w-3xl">
                A comprehensive overview of my Software Psychic Sessions and how I can help you solve your own tech challenges through pattern recognition, spiritual insight, and deep technical understanding.
                <span className="block mt-2">
                  I don&apos;t solve your problems—I help you solve your own. Through my unique blend of technical expertise, pattern recognition, and spiritual insight, I guide you to bring your vision to life.
                </span>
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-black to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="20-Minute Software Psychic Session"
              subtitle="Quick guidance & ideation"
              description="Perfect for specific questions, quick wins, or exploring new ideas. We'll start and end with a tarot card pull to guide our session."
              features={[
                "Tarot card pull at start and end",
                "Quick software problem-solving",
                "Tool and workflow recommendations",
                "Action plan with next steps"
              ]}
              ctaLink="https://cal.com/pythoness/20min"
              ctaText="Book Now"
              icon="🔮"
              textColor="text-black"
            />

            <ServiceCard
              title="60-Minute Software Psychic Session"
              subtitle="Extended problem-solving & design"
              description="Extended time for comprehensive software problem-solving, system design, and workflow optimization. We'll start and end with a tarot card pull to guide our session."
              features={[
                "Tarot card pull at start and end",
                "Extended software problem-solving",
                "Deep workflow analysis & design",
                "Strategic planning & next steps"
              ]}
              ctaLink="https://cal.com/pythoness/60min"
              ctaText="Book Now"
              icon="🔮"
              highlight={true}
              textColor="text-black"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/90 to-brand-purple-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
            Ready to Solve Your Own Tech Challenges?
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to bring your vision to life. I&apos;ll guide you with pattern recognition, spiritual insight, and deep technical understanding—but the solutions will be yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://cal.com/pythoness/20min"
              target="_blank"
              className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
            >
              Book a Software Psychic Session
            </Link>
            <Link
              href="/services"
              className="inline-block bg-transparent border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-brand-cream/10 hover:border-brand-cream/50 transition-all duration-300 text-lg font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
