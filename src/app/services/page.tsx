import Link from 'next/link'
import ServiceCard from '../../components/ServiceCard'
import { bookingUrls } from '../../config/booking'

export const metadata = {
  title: 'Services',
  description:
    'Software Psychic sessions for neurodivergent business owners: async video reflection ($75), 20-minute live reading ($95), and 60-minute deep dive ($255). Tarot-informed intuitive counsel—not fortune-telling.',
  openGraph: {
    title: 'Services | Pythoness Programmer',
    description:
      'Reflection, not rescue. Async video readings, live sessions, and deep-dive business counsel with the Software Psychic.',
    url: '/services',
    type: 'website',
    siteName: 'Pythoness Programmer',
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-white">
            Software Psychic — intuitive counsel for neurodivergent business owners
          </h1>
          <p className="text-xl text-brand-cream/90 mb-6 leading-relaxed">
            I&apos;m Amanda — the <strong className="text-brand-cream">Software Psychic</strong>. I offer{' '}
            <strong className="text-brand-cream">tarot-based intuitive guidance</strong> when you&apos;re spinning on{' '}
            <strong className="text-brand-cream">software choices</strong>, <strong className="text-brand-cream">business strategy</strong>, and{' '}
            <strong className="text-brand-cream">creative direction</strong>. This is{' '}
            <strong className="text-brand-cream">reflection, not rescue</strong>: a grounded space to name what&apos;s going on, trust your judgment
            more clearly, and move forward with confidence.
          </p>
          <p className="text-lg text-brand-cream/85 mb-6 leading-relaxed">
            I bring <strong className="text-brand-cream/95">technical context</strong>,{' '}
            <strong className="text-brand-cream/95">deep empathy for how neurodivergent brains decide under pressure</strong>, and{' '}
            <strong className="text-brand-cream/95">business strategy</strong> into one conversation — so you&apos;re not translating your reality to
            someone who only speaks productivity culture.
          </p>
          <p className="text-lg text-brand-cream leading-relaxed">
            <strong>You don&apos;t need to know tarot.</strong> The cards are a structure for insight, not a prediction game. This is{' '}
            <strong>professional intuitive counsel</strong>, not fortune-telling.
          </p>
        </div>
      </section>

      {/* The Sessions */}
      <section id="services" className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-16 text-white text-center">
            The sessions
          </h2>

          {/* Async — first */}
          <div id="async-reflection" className="mb-16 scroll-mt-24">
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                title="20-Minute Async Reflection"
                subtitle="Private video reading on your schedule. No live call."
                price="$75"
                description={
                  <>
                    <p>
                      <strong>What you get:</strong> A <strong>personalized video recording</strong> on <strong>one focused question or situation</strong>
                      — tarot at start and end, read through the lens of tech, business, and how <em>your</em> mind works.
                    </p>
                    <p>
                      <strong>How it works:</strong> You complete the <strong>intake first</strong> (required before you can book). Then you choose a
                      booking slot—that time is <strong>when your private video will be delivered by</strong>. I record your reading; you get a{' '}
                      <strong>private video link</strong> by email — watch once or rewatch on your own time.
                    </p>
                    <p>
                      <strong>What shifts:</strong> Room to stop doom-scrolling options and <strong>name the pattern</strong> under the stuckness — so you
                      can act from clarity instead of anxiety, without having to coordinate a live slot.
                    </p>
                  </>
                }
                features={[
                  'Private video (not live; watch and rewatch at your pace)',
                  'Tarot pull at start and end of the recording',
                  'Software, strategy, and creative blocks',
                  'Concrete framing — not vague mysticism',
                ]}
                ctaLink={bookingUrls.async}
                ctaText="Book Async Reflection — $75"
                icon="🎥"
                highlight={true}
                isNew={true}
                textColor="text-brand-cream"
                note={
                  <>
                    <strong>Best for:</strong> A specific fork in the road, a tool or workflow decision, or a stuck point where you want perspective
                    without a live call.
                    <br />
                    <strong>Important:</strong> This is not a live meeting — you&apos;re booking when your <strong>recorded video</strong> will be ready,
                    not a call to join. <strong>Non-refundable</strong> once booked. Please confirm via email so delivery reaches you.
                  </>
                }
                customStyling={{
                  backgroundColor: 'from-brand-cream/10 to-white/5',
                  textColor: 'text-brand-cream',
                  accentColor: 'brand-green-accent',
                  borderColor: 'border-brand-green-accent',
                  badgeText: 'ASYNC',
                  badgeColor: 'brand-green-accent',
                }}
              />
            </div>
          </div>

          {/* Live 20 */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                title="20-Minute Live Reading"
                subtitle="Real-time video or voice. Interactive tarot and counsel."
                price="$95"
                description={
                  <>
                    <p>
                      <strong>What you get:</strong> A <strong>real-time video or voice session</strong>: interactive tarot and intuitive counsel with
                      room for <strong>follow-up questions</strong> in the moment.
                    </p>
                    <p>
                      <strong>How it works:</strong> You book a slot, show up with your question or context, and we <strong>move together</strong> —
                      pulling cards, naming what&apos;s loud in the system, and testing what fits your capacity and values.
                    </p>
                    <p>
                      <strong>What shifts:</strong> <strong>Immediate clarity</strong> when the decision feels urgent, or when you process better{' '}
                      <strong>out loud</strong> with someone who won&apos;t rush you to &quot;just pick one.&quot;
                    </p>
                  </>
                }
                features={[
                  'Tarot pull at start and end',
                  'Live back-and-forth on a focused decision or stuck point',
                  'Software and business context without the hustle-culture script',
                  'You leave with a clearer read on what to try next',
                ]}
                ctaLink={bookingUrls.live20}
                ctaText="Book Live Reading — $95"
                icon="🔮"
                textColor="text-brand-cream"
                note={
                  <>
                    <strong>Best for:</strong> Time-sensitive decisions, emotional charge around a choice, or when you want live exchange alongside
                    strategic reflection.
                  </>
                }
              />
            </div>
          </div>

          {/* Deep 60 */}
          <div className="mb-16">
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                title="60-Minute Deep Dive"
                subtitle="Extended intuitive business counsel. Optional 20-minute follow-up within 30 days."
                price="$255"
                description={
                  <>
                    <p>
                      <strong>What you get:</strong> An <strong>extended intuitive business counsel session</strong>: a fuller spread, deeper pattern
                      work, and <strong>strategic guidance</strong> across software, operations, and creative direction — as much as we can hold well in
                      one sitting.
                    </p>
                    <p>
                      <strong>How it works:</strong> We book an hour, you share context and goals, and we go <strong>below the surface</strong> —
                      recurring blocks, opportunities you might be avoiding, and what sustainable next steps look like for <strong>your</strong> brain and
                      business.
                    </p>
                    <p>
                      <strong>What shifts:</strong> A <strong>sturdier read on the whole picture</strong> — not just the symptom — so you&apos;re not
                      running the same decision loop every quarter.
                    </p>
                    <p>
                      <strong>Included:</strong> <strong>Optional 20-minute follow-up consultation within 30 days</strong> if you want to check in on
                      what&apos;s landing (book when you&apos;re ready).
                    </p>
                  </>
                }
                features={[
                  'Tarot pull at start and end',
                  'Deep reflection on recurring patterns across tech, business, and creative work',
                  'What productivity culture sold you vs. what your brain actually needs',
                  'Neurodivergent-friendly angles on tools, workflows, and strategy',
                  'Optional 20-minute follow-up consultation within 30 days',
                ]}
                ctaLink={bookingUrls.deep60}
                ctaText="Book Deep Dive — $255"
                icon="🔮"
                textColor="text-brand-cream"
                note={
                  <>
                    <strong>Best for:</strong> Major transitions, complex or intertwined decisions, or foundational questions about how you want to run
                    the work.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-8 text-white text-center">
            What makes this different
          </h2>
          <p className="text-xl text-brand-cream/90 leading-relaxed mb-6">
            A lot of advice around tech and business assumes a neurotypical pace, a linear plan, and a definition of success that isn&apos;t yours. It
            pushes you toward more hustle, more tools, more optimization — on someone else&apos;s terms.
          </p>
          <p className="text-xl text-brand-cream/90 leading-relaxed mb-6">
            That&apos;s not what this is. I work with <strong className="text-brand-cream">software decisions</strong>,{' '}
            <strong className="text-brand-cream">strategy</strong>, and <strong className="text-brand-cream">creative projects</strong> as places where
            your nervous system and your values actually show up — not as problems to &quot;fix&quot; in one afternoon.
          </p>
          <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
            I&apos;ve been the person decoding a new diagnosis while building a career with no roadmap and a body already at its limit. I know what it
            feels like when &quot;best practice&quot; makes you feel worse, not better — and how hard it is to trust your gut when the noise is loud.
          </p>
          <p className="text-xl text-brand-cream font-medium leading-relaxed">
            This work is built for brains and businesses the mainstream wasn&apos;t designed for.
          </p>
        </div>
      </section>

      {/* Who These Sessions Are For / Aren't For */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-brand-green-dark/90 mb-12 text-center">
            You&apos;re already capable. You&apos;re already working on it. You need someone who can:
          </p>
          <ul className="space-y-4 text-lg text-brand-green-dark/90 mb-16 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              See patterns in your tech, business, and creative choices that you&apos;re too close to notice
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Reflect with you in plain language — no tarot expertise required on your side
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Validate that the friction you feel is real, and explore directions that fit how you actually think
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Help you build judgment that sticks — reflection and agency, not dependency
            </li>
          </ul>
          <h2 className="text-2xl font-display mb-4 text-brand-green-dark text-center">
            Who this isn&apos;t for
          </h2>
          <ul className="space-y-3 text-brand-green-dark/80 max-w-2xl mx-auto mb-8">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-dark/40" />
              People looking for emergency tech rescue or someone to &quot;just do it for you&quot;
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-dark/40" />
              Anyone who wants predictions, guarantees, or fortune-telling instead of counsel
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-dark/40" />
              Folks who aren&apos;t open to reflection, pattern recognition, or naming what&apos;s underneath the symptom
            </li>
          </ul>
        </div>
      </section>

      {/* What every offering includes */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display mb-8 text-white text-center">
            What every offering includes
          </h2>
          <ul className="space-y-4 text-brand-cream/90 text-lg">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              <span>
                <strong className="text-brand-cream">Live sessions</strong> start and end with a tarot pull. <strong className="text-brand-cream">Async</strong>{' '}
                is a <strong className="text-brand-cream">recorded video</strong> with tarot at start and end — same reflective process, on your timeline.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Judgment-free, affirming space (LGBTQIA+ &amp; SW affirming)
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Grounded language — clarity and agency, not vague mysticism
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Pattern recognition and strategic perspective, not a one-size-fits-all stack
            </li>
          </ul>
        </div>
      </section>

      {/* Book, expect, policies */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-10 text-white text-center">
            How to book, what to expect, policies
          </h2>

          <div className="space-y-10 text-brand-cream/90 text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-display text-brand-cream mb-3">How to book</h3>
              <p>
                Use the <strong className="text-brand-cream">Zoom Scheduler</strong> link on the offering you want. Intake is part of booking so I&apos;m
                not guessing your context—async requires a <strong className="text-brand-cream">complete intake before you can book</strong>. Not sure
                which tier fits? Email{' '}
                <a href="mailto:help@pythonessprogrammer.com" className="text-brand-green-accent underline hover:no-underline">
                  help@pythonessprogrammer.com
                </a>{' '}
                with one sentence about the decision — you&apos;re not bothering me.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-display text-brand-cream mb-3">What to expect</h3>
              <p className="mb-3">
                <strong className="text-brand-cream">Warm, direct, grounded</strong> conversation. I may suggest tools or framings; you stay in charge of
                what you implement.
              </p>
              <p>
                <strong className="text-brand-cream">Live</strong> sessions are conversational and interactive. <strong className="text-brand-cream">Async</strong>{' '}
                is a <strong className="text-brand-cream">private video</strong> you receive by link — watch and rewatch on your own time (no live meeting).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-display text-brand-cream mb-3">Policies</h3>
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  <strong className="text-brand-cream">Live sessions (20- and 60-minute):</strong> Reschedule or cancel with{' '}
                  <strong>at least 24 hours&apos; notice</strong> when possible. Cancellations inside that window may be <strong>non-refundable</strong>.
                </li>
                <li>
                  <strong className="text-brand-cream">Async video readings:</strong> <strong>Non-refundable</strong> once booked. Your video is delivered
                  by the <strong>booking slot time you selected</strong> (intake is completed before you book).
                </li>
                <li>
                  This is <strong>professional intuitive counsel</strong>, not medical, mental health, legal, or financial advice. It is{' '}
                  <strong>not</strong> emergency tech support.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mt-14">
            <Link
              href={bookingUrls.async}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold text-center"
            >
              Book Async — $75
            </Link>
            <Link
              href={bookingUrls.live20}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold text-center"
            >
              Book Live 20 — $95
            </Link>
            <Link
              href={bookingUrls.deep60}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold text-center"
            >
              Book Deep 60 — $255
            </Link>
            <Link
              href="mailto:help@pythonessprogrammer.com"
              className="inline-block bg-white/10 border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold text-center"
            >
              Email a question
            </Link>
            <Link
              href="/resources"
              className="inline-block bg-white/10 border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold text-center"
            >
              Browse free resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
