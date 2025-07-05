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
                  With over 13 years of experience as a Senior Full Stack Software Engineer, I&apos;ve built and led projects for companies ranging from Amazon.com to small businesses and SaaS startups. My work spans e-commerce, accessibility, automation, and technical mentorship across the full spectrum of business sizes.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-brand-cream/80">
                  With over a decade of experience in web development and digital systems, I understand the overwhelm that comes with too many tools and not enough clarity.
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
              My journey into tech began like many others - with curiosity and a desire to solve problems. But what set my path apart was my neurodivergent brain and the unique challenges it presented when navigating the digital world.
            </p>
            
            <p>
              I discovered that traditional tech approaches often don&apos;t account for different ways of thinking and processing information. The overwhelm of too many options, the frustration of tools that don&apos;t work the way my brain does, and the constant feeling of being &quot;behind&quot; in an ever-changing landscape.
            </p>
            
            <p>
              This led me to develop a different approach - one that prioritizes clarity over complexity, accessibility over assumptions, and individual needs over one-size-fits-all solutions.
            </p>
            
            <p>
              Today, I combine my technical expertise with deep empathy for the neurodivergent experience to help others build digital fluency, support digital wellbeing, and create workflows that actually feel comfortable for your unique brain.
            </p>
            <p>
              Alongside my passion for making tech accessible, I&apos;ve had the privilege of working as a Senior Software Engineer and Product Developer, leading agile teams and building robust web applications for enterprise-level companies, global brands, and small businesses. My technical background means I bring not just empathy, but also deep expertise and proven results to every project, regardless of scale.
            </p>
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
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-2xl font-display mb-4 text-brand-cream">LGBTQIA+ Affirming</h3>
              <p className="text-brand-cream/80">
                I provide a safe, affirming space for LGBTQIA+ individuals and businesses, understanding the unique challenges and opportunities in our community.
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
                A comprehensive overview of my services and how I can help you build digital fluency, support your digital wellbeing, and make technology comfortable for you.
                <span className="block mt-2">
                  As a recognized expert in TypeScript, React, Node.js, and cloud platforms, I combine technical excellence with a people-first approach. Whether you&apos;re a small business owner or part of an enterprise team, you get solutions that are both powerful and truly usable.
                </span>
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-black to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Tech Coaching"
              subtitle="Personalized guidance for your digital journey"
              description="One-on-one sessions focused on your specific tech challenges and goals."
              features={[
                "Personalized tech assessment",
                "Workflow optimization",
                "Tool selection guidance",
                "Ongoing support and accountability"
              ]}
              ctaLink="/services"
              ctaText="Learn More"
              icon="🎯"
              textColor="text-black"
            />

            <ServiceCard
              title="Web Development"
              subtitle="Custom websites that work for your brain"
              description="Full-stack development with a focus on accessibility and user experience."
              features={[
                "Custom website design",
                "Accessibility-first approach",
                "SEO optimization",
                "Ongoing maintenance"
              ]}
              ctaLink="/services"
              ctaText="Learn More"
              icon="💻"
              highlight={true}
              textColor="text-black"
            />

            <ServiceCard
              title="System Integration"
              subtitle="Connect your tools seamlessly"
              description="Help you build workflows that actually work for your unique needs."
              features={[
                "Workflow analysis",
                "Tool integration",
                "Automation setup",
                "Training and documentation"
              ]}
              ctaLink="/services"
              ctaText="Learn More"
              icon="🔗"
              textColor="text-black"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/90 to-brand-purple-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
            Ready to Make Tech Comfortable?
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to create a digital environment that supports your wellbeing and helps you become fluent and comfortable with technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://cal.com/pythoness/15min"
              target="_blank"
              className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
            >
              Book a Free Consultation
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
