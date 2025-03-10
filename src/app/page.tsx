import Header from '@/components/Header'
import Section from '@/components/Section'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-24 px-4 md:px-6 bg-gradient-to-b from-brand-green-dark to-brand-purple-dark text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.07] bg-[url('/pattern.svg')] bg-repeat animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute inset-0 opacity-[0.07] bg-[url('/pattern.svg')] bg-repeat [transform:rotate(60deg)] animate-[spin_80s_linear_reverse_infinite]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8 tracking-tight text-brand-cream">Where Code Meets Calm</h1>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-brand-purple-light font-light leading-relaxed">
              As a Senior Software Engineer with over 13 years of combined experience in development, marketing, and management, 
              I create tech solutions that feel intuitive, not intimidating.
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-brand-purple-light/90 font-light leading-relaxed">
              My approach blends cutting-edge technology with mindful, sustainable practices that honor both your business goals 
              and your neurological wiring.
            </p>
          </div>
          <div className="mt-12 space-x-6">
            <Link 
              href="#services"
              className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
            >
              Explore Services
            </Link>
            <Link 
              href="#contact"
              className="inline-block bg-white/10 backdrop-blur-sm text-brand-cream border border-brand-cream/20 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section id="services" title="Technical Expertise That Speaks Human" className="bg-brand-cream">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-xl text-brand-purple-dark leading-relaxed">
            I don't just build websites—I create digital spaces where anxiety dissolves and creativity flows. 
            My code works <em>for you</em>, adapting to your unique needs while maintaining performance, security, and scalability.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Development Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <div className="h-48 relative bg-gradient-to-br from-brand-green-dark to-brand-purple-dark">
              {/* Placeholder for development-related image */}
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Development Image</span>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-display text-brand-green-dark">Full-Stack Development</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Custom web applications with React & Next.js</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Scalable backend solutions with Node.js & PostgreSQL</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Cloud infrastructure optimization (AWS, Digital Ocean)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Workflow automation & systems integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Accessibility-focused design & implementation</span>
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-sm text-brand-purple-dark/80 italic">Available for Contract Work Starting April 2025</p>
              </div>
            </div>
          </div>

          {/* Coaching Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group">
            <div className="h-48 relative bg-gradient-to-br from-brand-green-dark to-brand-purple-dark">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Coaching Image</span>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-display text-brand-green-dark">Tech Execution Coaching</h3>
              <p className="text-brand-purple-dark/90">Transform Your Business Systems Without the Tech Anxiety</p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Demystify complex tech concepts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Create systems that work with your brain</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Build sustainable solutions without burnout</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Enhance your digital confidence</span>
                </li>
              </ul>
              <div className="pt-4 space-y-2">
                <p className="font-medium text-brand-green-dark">Available Sessions:</p>
                <ul className="space-y-2 text-sm text-brand-purple-dark">
                  <li>• 30-Minute Clarity Call</li>
                  <li>• 60-Minute Deep Dive</li>
                  <li>• Custom Coaching Packages</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Craft Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group md:col-span-2 lg:col-span-1">
            <div className="h-48 relative bg-gradient-to-br from-brand-green-dark to-brand-purple-dark">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Craft Image</span>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-display text-brand-green-dark">Digital Craft Services</h3>
              <p className="text-brand-purple-dark/90">From Screen to Hand: Custom Creations</p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Custom retail stickers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Event materials & decorations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">HTV vinyl art projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                  <span className="flex-1 text-brand-purple-dark">Handcrafted zines & print materials</span>
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-sm text-brand-purple-dark/80">Based in New Kent, Virginia | Serving Richmond area</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Development Process */}
      <Section id="process" title="My Development Approach" className="bg-gradient-to-br from-brand-green-dark to-brand-purple-dark text-white">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-display mb-6 text-brand-cream">Mindful Development Process</h3>
            <div className="space-y-6">
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-green-accent flex items-center justify-center mr-6 shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="font-display text-lg">01</span>
                </div>
                <div>
                  <h4 className="font-display text-xl mb-3 text-brand-purple-light">Discovery</h4>
                  <p className="text-brand-cream/90">Understanding your needs, goals, and constraints through focused consultation.</p>
                </div>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-green-accent flex items-center justify-center mr-6 shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="font-display text-lg">02</span>
                </div>
                <div>
                  <h4 className="font-display text-xl mb-3 text-brand-purple-light">Planning</h4>
                  <p className="text-brand-cream/90">Creating a clear roadmap with achievable milestones and expectations.</p>
                </div>
              </div>
              <div className="flex items-start group hover:transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-green-accent flex items-center justify-center mr-6 shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="font-display text-lg">03</span>
                </div>
                <div>
                  <h4 className="font-display text-xl mb-3 text-brand-purple-light">Development</h4>
                  <p className="text-brand-cream/90">Building your solution with regular check-ins and adjustments.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] bg-white/10 rounded-lg">
            {/* Placeholder for process illustration or screenshot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm">Process Illustration</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Work */}
      <Section id="work" title="Featured Projects">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((project) => (
            <div key={project} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-video bg-brand-green-dark relative">
                {/* Project thumbnail placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <span className="text-sm">Project {project} Thumbnail</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-brand-green-dark/90 text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="font-display text-xl mb-2">Project Title</h3>
                <p className="mb-4">Brief description of the project and its impact.</p>
                <Link 
                  href="#"
                  className="inline-block bg-brand-green-accent px-4 py-2 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let's Create Together" className="bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark text-white">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <p className="text-2xl font-light text-brand-cream leading-relaxed">
              Ready to bring your vision to life? Let's discuss how we can work together
              to create something amazing.
            </p>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-brand-green-accent/50 transition-all duration-300">
                <h3 className="font-display text-xl mb-3 text-brand-purple-light">Quick Consultation</h3>
                <p className="text-brand-cream/90 mb-6">30-minute call to discuss your needs and potential solutions</p>
                <Link 
                  href="#"
                  className="inline-block bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
                >
                  Book Now
                </Link>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-brand-green-accent/50 transition-all duration-300">
                <h3 className="font-display text-xl mb-3 text-brand-purple-light">Project Discussion</h3>
                <p className="text-brand-cream/90 mb-6">60-minute deep dive into your project requirements</p>
                <Link 
                  href="#"
                  className="inline-block bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
                >
                  Schedule Call
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] bg-white/10 rounded-lg">
            {/* Placeholder for contact/collaboration image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm">Contact Image</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
