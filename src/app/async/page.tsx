import { Metadata } from 'next'
import Link from 'next/link'
import { bookingUrls } from '../../config/booking'

export const metadata: Metadata = {
  title: '20-Minute Async Reflection - $75 | The Pythoness Programmer',
  description:
    'Private tarot-guided video for neurodivergent business owners—software, strategy, and creative decisions. No live call. Delivered on a clear timeline.',
  openGraph: {
    title: '20-Minute Async Reflection - $75',
    description:
      'Professional intuitive counsel as a private video. One focused question, clear delivery, no meeting to coordinate.',
    type: 'website',
    url: 'https://www.pythonessprogrammer.com/async',
  },
  twitter: {
    card: 'summary_large_image',
    title: '20-Minute Async Reflection - $75',
    description:
      'Private tarot-guided video for software, strategy, and creative blocks. Reflection, not rescue.',
  },
}

export default function AsyncServicePage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4 mt-0">
              20-Minute Async Reflection
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-6 mt-0">
              Private video reading — <strong className="text-brand-cream font-semibold">$75</strong>. No live meeting.
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white font-light leading-relaxed mb-8">
              You complete the <strong className="text-white font-medium">intake first</strong> (required before you can book). Then you choose a slot—that
              time is <strong className="text-white font-medium">when your private video will be delivered by</strong>, not a live call. I record a{' '}
              <strong className="text-white font-medium">personalized video</strong> with tarot at start and end—grounded, concrete, and informed by tech and
              business context. You get a private link by email: watch once or rewatch on your own time. Built for neurodivergent business owners who want
              clarity <em>without</em> scheduling a live call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={bookingUrls.async}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-black px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
              >
                Book Async Reflection — $75
              </Link>
              <Link
                href="/services#async-reflection"
                className="inline-block bg-transparent border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-brand-cream/10 hover:border-brand-cream/50 transition-all duration-300 text-lg font-semibold"
              >
                All services &amp; policies
              </Link>
            </div>
          </section>

          <section id="what-you-get" className="mb-8 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center mt-0">What you get</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-display text-brand-green-dark">Video reading (async)</h3>
                <ul className="list-disc pl-5 text-brand-green-dark space-y-2">
                  <li>One focused question or situation (software, strategy, or creative direction)</li>
                  <li>Tarot pull at start and end of the recording—reflection in plain language</li>
                  <li>Pattern naming and next-step angles that fit your capacity</li>
                  <li>
                    Delivered by the <strong>booking slot time you select</strong>—your intake is already complete before you book
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-display text-brand-green-dark">Why async</h3>
                <ul className="list-disc pl-5 text-brand-green-dark space-y-2">
                  <li>Watch and rewatch on your own timeline</li>
                  <li>No live call to coordinate</li>
                  <li>Strong fit when you already know the decision you&apos;re circling</li>
                  <li>Professional intuitive counsel—not fortune-telling</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center">How it works</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-bold text-brand-green-accent">1</span>
                </div>
                <h3 className="text-lg font-display mb-2 text-brand-green-dark">Intake</h3>
                <p className="text-sm text-brand-green-dark">
                  Complete the intake <strong>before</strong> you can book—you can&apos;t schedule until it&apos;s filled out. The more honest context you
                  give, the more specific the reading can be.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-bold text-brand-green-accent">2</span>
                </div>
                <h3 className="text-lg font-display mb-2 text-brand-green-dark">Book</h3>
                <p className="text-sm text-brand-green-dark">
                  Reserve through Zoom Scheduler. The time you choose is <strong>when your private video will be delivered by</strong>—not a live meeting to
                  join.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green-accent/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl font-bold text-brand-green-accent">3</span>
                </div>
                <h3 className="text-lg font-display mb-2 text-brand-green-dark">Receive</h3>
                <p className="text-sm text-brand-green-dark">
                  I send your <strong>private video link</strong> by email by the <strong>booking slot time you selected</strong>.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8 mt-0 bg-gradient-to-r from-brand-green-accent/20 to-brand-purple-dark/20 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl text-center">
            <h2 className="text-3xl font-display mb-4 text-white">Investment: $75</h2>
            <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
              Specialized intuitive counsel for people making real decisions in tech and business. See{' '}
              <Link href="/services" className="text-brand-green-accent underline hover:no-underline">
                /services
              </Link>{' '}
              for live sessions and the full policy block.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={bookingUrls.async}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-black px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold"
              >
                Book now — $75
              </Link>
              <Link
                href="/services"
                className="inline-block bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg font-semibold"
              >
                Compare all offerings
              </Link>
            </div>
          </section>

          <section className="mb-8 mt-0 bg-gradient-to-br from-brand-purple-dark/20 via-brand-green-dark/20 to-brand-purple-dark/20 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-6 text-white text-center">Policies</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-white">Confirmation</h3>
                <p className="text-white/90">
                  You may receive a confirmation request after booking. Please verify via email so your reading is delivered to the right place.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-white">Not a live session</h3>
                <p className="text-white/90">
                  There is nothing to join live for this offering—you receive a <strong>recorded video link</strong> by the delivery time associated with your
                  booking.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-white">Refunds</h3>
                <p className="text-white/90">
                  Async readings are <strong>non-refundable</strong> once booked. You&apos;ll verify before you confirm payment—please be ready to proceed.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-3xl font-display mb-6 text-brand-green-dark text-center">FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-brand-green-dark">Do I need to know tarot?</h3>
                <p className="text-brand-green-dark">No. I translate the spread into plain language and actionable framing.</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-brand-green-dark">Is this therapy or legal advice?</h3>
                <p className="text-brand-green-dark">
                  No. It&apos;s intuitive and strategic counsel for business and creative decisions—not a substitute for licensed medical, mental health,
                  legal, or financial professionals.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-display mb-3 text-brand-green-dark">When will I receive my video?</h3>
                <p className="text-brand-green-dark">
                  By the <strong>booking slot time you selected</strong>. Your intake is already complete before you book, so that slot is the delivery
                  commitment.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mt-12">
            <h2 className="text-3xl font-display mb-4 text-white">Want to go deeper live?</h2>
            <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
              20-minute live readings and 60-minute deep dives are on the main services page—with pricing and policies in one place.
            </p>
            <Link
              href={bookingUrls.async}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-brand-green-accent to-brand-green-accent/90 text-black px-8 py-4 rounded-lg hover:from-brand-green-accent/90 hover:to-brand-green-accent transition-all duration-300 shadow-brand-green-accent/20 text-lg font-semibold mr-4 mb-4"
            >
              Book Async — $75
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-brand-cream/40 text-brand-cream px-8 py-4 rounded-lg hover:bg-brand-cream/10 transition-all duration-300 text-lg font-semibold mb-4"
            >
              View all sessions
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}
