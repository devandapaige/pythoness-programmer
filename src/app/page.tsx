import Header from '@/components/Header'
import Section from '@/components/Section'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section - Gradient */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark text-white overflow-hidden">
        {/* Background pattern with adjusted opacity */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute inset-0 opacity-[0.05] bg-[url('/pattern.svg')] bg-repeat [transform:rotate(60deg)] animate-[spin_80s_linear_reverse_infinite]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8 tracking-tight text-white">Crafting Digital Joy</h1>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white font-light leading-relaxed">
              Tech doesn't have to be overwhelming. Together, we'll turn your digital challenges into opportunities for growth, learning, and (yes!) even fun.
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 font-light leading-relaxed">
              From coaching to coding to crafting, I blend technical expertise with creative problem-solving 
              to help you build a digital presence that feels authentically yours.
            </p>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="https://cal.com/pythoness/tech30"
              target="_blank"
              className="w-full sm:w-auto inline-block bg-brand-green-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20 text-center"
            >
              Book a $40 Clarity Call
            </Link>
            <Link 
              href="#services"
              className="w-full sm:w-auto inline-block bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center"
            >
              See How I Can Help
            </Link>
          </div>
        </div>
      </section>

      {/* Development Process - Solid */}
      <Section id="process" title="How Tech Coaching Works" className="bg-brand-green-dark text-white">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-display mb-6 text-brand-cream">Simple, Straightforward Support</h3>
            <div className="space-y-6">
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-green-accent flex items-center justify-center mr-6 shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="font-display text-lg">01</span>
                </div>
                <div>
                  <h4 className="font-display text-xl mb-3 text-brand-cream">Book Your Call</h4>
                  <p className="text-white/90">Choose a 30-min ($40) or 60-min ($70) session that fits your schedule.</p>
                </div>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-green-accent flex items-center justify-center mr-6 shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="font-display text-lg">02</span>
                </div>
                <div>
                  <h4 className="font-display text-xl mb-3 text-brand-cream">Share Your Challenge</h4>
                  <p className="text-white/90">Tell me about your tech struggles and what you want to achieve.</p>
                </div>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-green-accent flex items-center justify-center mr-6 shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="font-display text-lg">03</span>
                </div>
                <div>
                  <h4 className="font-display text-xl mb-3 text-brand-cream">Get Clear Solutions</h4>
                  <p className="text-white/90">Receive step-by-step guidance and actionable next steps you can implement right away.</p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <Link 
                href="https://cal.com/pythoness"
                target="_blank"
                className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
              >
                Schedule Your Session
              </Link>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 space-y-6">
            <h3 className="text-3xl font-display mb-6 text-brand-cream">Beyond Code: A Human-First Approach</h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              My journey through marketing, management, and software engineering gives me a perspective that goes beyond code. 
              I understand the human side of technology—how it feels when systems don't work, when websites don't convert, 
              and when digital tools create more stress than solutions.
            </p>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-display text-xl text-brand-cream">Technical Expertise</h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Proficient in React, Next.js, TypeScript, Node.js, Express, and PostgreSQL with 13+ years of combined experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Pioneered inclusive design practices ensuring seamless experiences for all users</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Digital Ocean, AWS, and other cloud platforms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Business automation with N8N, Make.com, and Zapier for streamlined workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Overview - Light Gradient */}
      <Section id="services" title="Your Digital Journey, Your Way" className="bg-gradient-to-b from-brand-cream to-white">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-xl text-brand-purple-dark leading-relaxed">
            Everyone learns and grows differently. I'm here to help you discover your own path to digital confidence, 
            with a healthy dose of humor and zero judgment along the way.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Business Tech Coaching Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <div className="h-48 relative bg-gradient-to-br from-brand-green-dark to-brand-purple-dark">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Business Tech Coaching</span>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-display text-brand-green-dark">Business Tech Coaching</h3>
              <p className="text-brand-purple-dark/90">Learn, Adapt, and Thrive in the Digital Space</p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Personalized website & platform guidance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Smart marketing systems that fit your style</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Practical AI & automation solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Sustainable tech strategies you'll love</span>
                </li>
              </ul>
              <div className="pt-4 space-y-2">
                <p className="font-medium text-brand-green-dark">Available Sessions:</p>
                <ul className="space-y-2 text-sm text-brand-purple-dark">
                  <li className="flex items-center justify-between">
                    <span>• 30-Minute Clarity Call</span>
                    <span className="font-medium">$40</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>• 60-Minute Deep Dive</span>
                    <span className="font-medium">$70</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link 
                    href="https://cal.com/pythoness"
                    target="_blank"
                    className="inline-block w-full bg-brand-green-accent text-white text-center px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    Book Your Session
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Coaching Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <div className="h-48 relative bg-gradient-to-br from-brand-green-dark to-brand-purple-dark">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Professional Coaching</span>
                </div>
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-display text-brand-green-dark">Professional Coaching</h3>
              <p className="text-brand-purple-dark/90">Growth at Your Own Pace</p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Empowering career transitions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Authentic leadership development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Flexible accountability partnerships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Inclusive, neurodiversity-affirming support</span>
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-sm text-brand-purple-dark/80 mb-4">Monthly coaching packages available after initial consultation</p>
                <Link 
                  href="https://cal.com/pythoness/15min"
                  target="_blank"
                  className="inline-block w-full bg-brand-purple-dark text-white text-center px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule 15min Vibe Check
                </Link>
              </div>
            </div>
          </div>

          {/* Development Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <div className="h-48 relative bg-gradient-to-br from-brand-green-dark to-brand-purple-dark">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Custom Development</span>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-display text-brand-green-dark">Custom Development</h3>
              <p className="text-brand-purple-dark/90">Solutions That Grow With You</p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Resilient web applications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Intuitive marketing automation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Thoughtful AI integrations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Universal, accessible design</span>
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-sm text-brand-purple-dark/80 italic">Available for Contract Work Starting April 2025</p>
                <div className="pt-4">
                  <Link 
                    href="#contact"
                    className="inline-block w-full bg-brand-purple-dark text-white text-center px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    Discuss Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Work - Solid */}
      <Section id="work" title="Professional Experience" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-display text-brand-green-dark">Project Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Implemented new features using React at an Amazon.com company, improving site engagement and workflow efficiency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Spearheaded development of new features at an AI startup, significantly enhancing site engagement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Integrated calendar scheduling features with third-party APIs, showcasing advanced API configuration skills</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Executed A/B Testing to refine UI designs, boosting customer satisfaction</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-display text-brand-green-dark">My Philosophy</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">I build systems that won't burn you out</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Accessibility isn't an afterthought, it's fundamental</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Technical guidance that respects your pace and process</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Finding the sweet spot between technical excellence and practical implementation</span>
                </li>
              </ul>
              <p className="text-lg text-brand-purple-dark/90 mt-8 italic">
                I believe creativity and anxiety exist on the same spectrum—when we reduce one, we amplify the other. 
                My work intentionally eliminates ambiguity, provides consistent structure, removes distractions, and 
                offers responsive feedback throughout the process.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Craft Services - Solid Purple */}
      <Section id="craft" title="Digital Meets Tangible" className="bg-brand-purple-dark text-white">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-display mb-6 text-brand-cream">Local Craft & Print Services</h3>
            <p className="text-xl text-white leading-relaxed">
              Based in Central Virginia, I create custom physical products for local businesses, events, and fellow creatives. 
              Supporting Virginia artists and businesses through accessible, personalized craft services.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-display text-xl text-brand-cream">Small-Batch Creations</h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Business promotional materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Custom party & event favors</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Small-run print materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Personalized vinyl designs</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-display text-xl text-brand-cream">How It Works</h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">01</span>
                    <span>Free project consultation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">02</span>
                    <span>Custom design mockups</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">03</span>
                    <span>Small-batch production</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">04</span>
                    <span>Local delivery or shipping</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8">
              <p className="text-white/90 mb-6">
                Fellow artists and creators: I'm open to trading services and collaborating on projects. 
                Let's discuss how we can support each other's work.
              </p>
              <Link 
                href="https://cal.com/pythoness/craft"
                target="_blank"
                className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
              >
                Book Craft Consultation
              </Link>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-display text-brand-cream">Small-Batch Excellence</h3>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Specializing in personalized, small-batch creations that make your business or event stand out. 
              Each project combines digital design precision with handcrafted care, perfect for local businesses 
              and events seeking that special touch.
            </p>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-display text-xl text-brand-cream">Perfect For</h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Small business promotional items</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Special event keepsakes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Custom branding materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                    <span>Artist collaborations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section - Gradient */}
      <Section id="contact" title="Let's Create Something Amazing" className="bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark text-white">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-2xl font-light text-white leading-relaxed">
                Every digital challenge is an opportunity to learn, grow, and maybe even laugh a little along the way. 
                Let's work together to find your path to tech confidence.
              </p>
              <p className="text-lg text-brand-purple-light leading-relaxed">
                Proudly serving all humans • LGBTQIA+ affirming • Neurodiversity celebrating • Always judgment-free
              </p>
            </div>
            <div className="space-y-6">
              <Link 
                href="https://cal.com/pythoness/tech30"
                target="_blank"
                className="block"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-brand-green-accent/50 transition-all duration-300">
                  <h3 className="font-display text-xl mb-3 text-brand-cream">30-Minute Clarity Call</h3>
                  <p className="text-white/90 mb-4">Perfect for:</p>
                  <ul className="space-y-2 text-white/80 mb-6">
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                      <span>Quick website tweaks & fixes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                      <span>Specific tech tool questions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                      <span>AI tool recommendations</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-display text-brand-cream">$40</span>
                    <span className="text-white/80">30 minutes</span>
                  </div>
                </div>
              </Link>
              <Link 
                href="https://cal.com/pythoness/tech60"
                target="_blank"
                className="block"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-brand-green-accent/50 transition-all duration-300">
                  <h3 className="font-display text-xl mb-3 text-brand-cream">60-Minute Deep Dive</h3>
                  <p className="text-white/90 mb-4">Perfect for:</p>
                  <ul className="space-y-2 text-white/80 mb-6">
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                      <span>Marketing funnel setup</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                      <span>Website overhaul planning</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                      <span>Complex system integrations</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-display text-brand-cream">$70</span>
                    <span className="text-white/80">60 minutes</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 space-y-6">
            <h3 className="font-display text-xl text-brand-cream">Why Book a Tech Coaching Session?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <span className="text-brand-green-accent text-2xl leading-none mt-1">✓</span>
                <span className="text-white/90">Get unstuck and move forward with your tech projects</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-brand-green-accent text-2xl leading-none mt-1">✓</span>
                <span className="text-white/90">Receive clear, actionable advice tailored to your needs</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-brand-green-accent text-2xl leading-none mt-1">✓</span>
                <span className="text-white/90">Learn about tools and solutions that fit your budget</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-brand-green-accent text-2xl leading-none mt-1">✓</span>
                <span className="text-white/90">Get judgment-free support for your unique situation</span>
              </li>
            </ul>
            <div className="pt-6">
              <p className="text-white/80">
                Questions? Email me at{' '}
                <a 
                  href="mailto:admin@pythonessprogrammer.com"
                  className="text-brand-cream hover:text-brand-green-accent transition-colors duration-300"
                >
                  admin@pythonessprogrammer.com
                </a>
              </p>
            </div>
            <div className="pt-6">
              <p className="text-lg text-white/90">
                Let's work together to create technology solutions that enhance your work, not complicate it. 
                My approach combines technical expertise with empathy, ensuring you get solutions that truly work for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                href="https://cal.com/pythoness/15min"
                target="_blank"
                className="inline-block w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Schedule Free 15min Vibe Check
              </Link>
              <Link 
                href="https://cal.com/pythoness/craft"
                target="_blank"
                className="inline-block w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Book Craft Consultation
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Newsletter Section - Solid */}
      <Section id="newsletter" title="Stay Connected" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xl text-brand-purple-dark leading-relaxed mb-6">
              Get strategic insights on navigating tech spaces, building sustainable systems, 
              and creating accessible solutions. No fluff, just practical expertise and industry awareness.
            </p>
            <div className="max-w-3xl mx-auto">
              <iframe 
                src="https://embeds.beehiiv.com/5eb2e329-cfe4-4c22-b470-7ed460e5e900" 
                data-test-id="beehiiv-embed" 
                width="100%" 
                height="320" 
                frameBorder="0" 
                scrolling="no" 
                style={{
                  borderRadius: '4px',
                  border: '2px solid #e5e7eb',
                  margin: '0',
                  backgroundColor: 'transparent'
                }}
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
