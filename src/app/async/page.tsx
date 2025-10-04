import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Async Project & Web Presence Reading - $30 | The Pythoness Programmer',
  description: 'Transform your digital footprint with a comprehensive project and web presence reading. Pattern recognition meets spiritual insight for entrepreneurs ready to level up their digital game.',
  openGraph: {
    title: 'Async Project & Web Presence Reading - $30',
    description: 'Transform your digital footprint with a comprehensive project and web presence reading. Pattern recognition meets spiritual insight for entrepreneurs ready to level up their digital game.',
    type: 'website',
    url: 'https://www.pythonessprogrammer.com/async',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Async Project & Web Presence Reading - $30',
    description: 'Transform your digital footprint with a comprehensive project and web presence reading. Pattern recognition meets spiritual insight for entrepreneurs ready to level up their digital game.',
  },
}

export default function AsyncServicePage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Hero Section */}
          <section className="mb-8 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4 mt-0">
              Async Project & Web Presence Reading
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-6 mt-0">
              Receive a potent 20-minute intuitive reading delivered as a private video recording
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white font-light leading-relaxed mb-8">
              This is an asynchronous session—no live meeting required. You provide the details, and I record a personalized reading for you with a tarot pull to start and end. Perfect for busy schedules and allows you to watch and re-watch the insights at your own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/pythoness/async"
                target="_blank"
                className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
              >
                Book Your Reading - $30
              </Link>
              <Link
                href="#what-you-get"
                className="inline-block bg-transparent border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-brand-cream/10 hover:border-brand-cream/50 transition-all duration-300 text-lg font-semibold"
              >
                Learn More
              </Link>
            </div>
          </section>

          {/* What You Get Section */}
          <section id="what-you-get" className="mb-8 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center mt-0">What You Get</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-display text-brand-green-dark">20-Minute Video Reading</h3>
                <ul className="list-disc pl-5 text-brand-green-dark space-y-2">
                  <li>Personalized video recording (not live)</li>
                  <li>Tarot card pull at start and end of session</li>
                  <li>Deep dive into your project and web presence</li>
                  <li>Pattern recognition insights from cross-industry experience</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-display text-brand-green-dark">Asynchronous Benefits</h3>
                <ul className="list-disc pl-5 text-brand-green-dark space-y-2">
                  <li>Watch and re-watch at your own pace</li>
                  <li>Perfect for busy schedules</li>
                  <li>No need to coordinate meeting times</li>
                  <li>Private video link delivered to your email</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why This Approach Section */}
          <section className="mb-8 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center">Why This Approach?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-display mb-3 text-brand-green-dark">Pattern Recognition</h3>
                <p className="text-brand-green-dark">
                  My background in sociology, civics, and politics gives me a unique lens for seeing how systems truly work—and where they&apos;re designed to fail.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-display mb-3 text-brand-green-dark">Cross-Industry Insights</h3>
                <p className="text-brand-green-dark">
                  I make unsettling connections across law, marketing, and tech—industries that have historically gatekept knowledge from the people who need it most.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-display mb-3 text-brand-green-dark">Spiritual Creation</h3>
                <p className="text-brand-green-dark">
                  Creation and ideation are spiritual processes. I combine the mystical with the practical to get at the heart of what your business truly needs.
                </p>
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="mb-8 mt-0 bg-gradient-to-br from-brand-purple-dark/20 via-brand-green-dark/20 to-brand-purple-dark/20 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-white text-center">Perfect For</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-white">Entrepreneurs & Founders</h3>
                <p className="text-white/90">
                  Ready to transform your digital presence and take your project to the next level with strategic insights and actionable recommendations.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-white">Small Business Owners</h3>
                <p className="text-white/90">
                  Looking to optimize your web presence, streamline your digital systems, and connect with your ideal audience more effectively.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-white">Content Creators</h3>
                <p className="text-white/90">
                  Seeking to understand your digital footprint, optimize your content strategy, and build a more cohesive online presence.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-white">Service Providers</h3>
                <p className="text-white/90">
                  Wanting to refine your digital marketing approach, improve your client acquisition, and create systems that work for your unique business model.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-8 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center">How It Works</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-bold text-brand-green-accent">1</span>
                </div>
                <h3 className="text-lg font-display mb-2 text-brand-green-dark">Book a Time</h3>
                <p className="text-sm text-brand-green-dark">
                  Reserve your spot in my schedule. This is the deadline by which I will complete your reading.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-bold text-brand-green-accent">2</span>
                </div>
                <h3 className="text-lg font-display mb-2 text-brand-green-dark">Provide Context</h3>
                <p className="text-sm text-brand-green-dark">
                  Answer the intake questions when booking. The more detail and links you provide, the deeper the reading.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-bold text-brand-green-accent">3</span>
                </div>
                <h3 className="text-lg font-display mb-2 text-brand-green-dark">Receive Your Video</h3>
                <p className="text-sm text-brand-green-dark">
                  I record your personalized session and deliver the private video link to your email by your scheduled time.
                </p>
              </div>
            </div>
          </section>

          {/* Investment Section */}
          <section className="mb-8 mt-0 bg-gradient-to-r from-brand-green-accent/20 to-brand-purple-dark/20 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl text-center">
            <h2 className="text-3xl font-display mb-4 text-white">Investment: $30</h2>
            <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
              A comprehensive project and web presence reading that would typically cost $200+ from a traditional consultant. 
              I&apos;m offering this at $30 because I believe in making strategic insights accessible to entrepreneurs who are ready to transform their digital game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/pythoness/async"
                target="_blank"
                className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
              >
                Book Your Reading Now
              </Link>
              <Link
                href="/services"
                className="inline-block bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg font-semibold"
              >
                View All Services
              </Link>
            </div>
          </section>

          {/* Important Policies Section */}
          <section className="mb-8 mt-0 bg-gradient-to-br from-brand-purple-dark/20 via-brand-green-dark/20 to-brand-purple-dark/20 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-white text-center">Important Policies</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-white">Booking Confirmation</h3>
                <p className="text-white/90">
                  You will receive a confirmation request after booking. Please be sure to verify your appointment booking via email in order to be officially added to my books and ensure your video can be delivered.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-white">Asynchronous Delivery</h3>
                <p className="text-white/90">
                  This is not a live meeting. There is no location to go to or session to &quot;join.&quot; Your personalized video will be recorded and delivered to your email before the end of your scheduled appointment time.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-white">No Cancellations/Refunds</h3>
                <p className="text-white/90">
                  Due to the nature of this focused, asynchronous work, this event is non-refundable and cannot be cancelled or rescheduled once booked. Please ensure you are ready to proceed before confirming.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-8 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-brand-green-dark">
                  What exactly do you analyze in my project and web presence?
                </h3>
                <p className="text-brand-green-dark">
                  I review your website, social media presence, content strategy, branding consistency, user experience, 
                  technical setup, and overall digital ecosystem. I look for patterns, missed opportunities, and areas 
                  where your message could be clearer or more effective.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-brand-green-dark">
                  How is this different from a regular business consultation?
                </h3>
                <p className="text-brand-green-dark">
                  My approach combines technical expertise with pattern recognition and spiritual insight. I see connections 
                  across industries that others miss, and I focus on empowering you to solve your own problems rather than 
                  just giving you solutions. Plus, it&apos;s delivered as a private video you can watch and re-watch.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-brand-green-dark">
                  When will I receive my video?
                </h3>
                <p className="text-brand-green-dark">
                  Your personalized video will be recorded and delivered to your email by the end of your scheduled 
                  appointment time. The video link is private and you can watch it as many times as you need.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="text-center mt-12">
            <h2 className="text-3xl font-display mb-4 text-white">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
              Don&apos;t let another month pass with a digital presence that doesn&apos;t reflect your true potential. 
              Book your Async Project & Web Presence Reading today and start seeing your digital world through new eyes.
            </p>
            <Link
              href="https://cal.com/pythoness/async"
              target="_blank"
              className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-white px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
            >
              Book Your Reading - $30
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}
