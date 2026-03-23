import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate program | Pythoness Programmer',
  description:
    'Refer clients to Software Psychic sessions and earn 20% commission. Optional payout as cash (Stripe) or credit toward your own sessions at 50% off. Small, invitation-based program.',
  openGraph: {
    title: 'Affiliate program | Pythoness Programmer',
    description:
      'Monetize referrals to tarot-informed Software Psychic sessions for neurodivergent business owners. 20% commission; flexible payout options.',
    url: '/affiliate-program',
    type: 'website',
    siteName: 'Pythoness Programmer',
  },
}

export default function AffiliateProgramPage() {
  return (
    <main className="min-h-screen bg-brand-green-dark text-white py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-white mb-6 text-center">
          Affiliate program
        </h1>
        <p className="text-xl text-brand-cream/90 text-center mb-12 leading-relaxed">
          A small, invitation-based program for people who want to be <strong className="text-brand-cream">paid for referrals</strong> when their clients
          book Software Psychic sessions—async video, live reading, or deep dive.
        </p>

        <section className="mb-12 space-y-4 text-brand-cream/90 text-lg leading-relaxed">
          <h2 className="font-display text-2xl text-white mb-4">Who it&apos;s for</h2>
          <p>
            Coaches, consultants, therapists, and other professionals who serve <strong>neurodivergent business owners</strong> (or adjacent audiences) and
            want a straightforward way to recommend intuitive, tech-aware session work—without managing the booking chaos themselves.
          </p>
          <p>
            This is <strong>not</strong> a mass affiliate network. The program stays intentionally small so tracking and relationships stay human.
          </p>
        </section>

        <section className="mb-12 space-y-4 text-brand-cream/90 text-lg leading-relaxed">
          <h2 className="font-display text-2xl text-white mb-4">How referrals are tracked</h2>
          <p>
            Bookings run through <strong>Zoom Scheduler</strong> with <strong>Stripe</strong> at checkout. Approved partners get <strong>direct links</strong>{' '}
            to each session type (async video, live 20, deep 60)—same pricing as{' '}
            <Link href="/services" className="text-brand-green-accent underline hover:no-underline">
              /services
            </Link>
            .
          </p>
          <p>
            Attribution uses an optional <strong>referral partner code</strong> on the booking form (or another method we agree on at enrollment), so paid
            sessions can be tied to you for commission. You share your links; clients book and pay in one flow.
          </p>
        </section>

        <section className="mb-12 bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8">
          <h2 className="font-display text-2xl text-white mb-4">Commission</h2>
          <p className="text-brand-cream/90 text-lg leading-relaxed mb-4">
            <strong className="text-brand-cream">20%</strong> of the <strong>paid</strong> session price for bookings correctly attributed to you, under the
            terms you&apos;ll receive at enrollment (including how refunds and no-shows are handled).
          </p>
          <p className="text-brand-cream/80 text-base leading-relaxed">
            Payouts are processed through <strong>Stripe</strong> on a <strong>monthly</strong> or agreed schedule while the program runs at manual or
            semi-manual scale—no promise of instant automation, just a clear rhythm and transparent math.
          </p>
        </section>

        <section className="mb-12 space-y-4 text-brand-cream/90 text-lg leading-relaxed">
          <h2 className="font-display text-2xl text-white mb-4">How you can use your earnings</h2>
          <p>Partners can choose how balances are used (subject to enrollment terms):</p>
          <ul className="list-disc pl-6 space-y-3 text-brand-cream/90">
            <li>
              <strong className="text-brand-cream">Cash via Stripe</strong> — Periodic payouts to your connected account or agreed Stripe workflow.
            </li>
            <li>
              <strong className="text-brand-cream">Credit toward your own sessions at 50% off</strong> — Apply eligible affiliate balance toward{' '}
              <strong>your own</strong> Software Psychic bookings at <strong>half off</strong> the listed price, so the work comes back to your business
              and your nervous system. Dollar amounts and eligibility are confirmed in writing when you join.
            </li>
          </ul>
          <p className="text-sm text-brand-cream/70">
            You can pick one path or combine them over time if that fits your agreement—details are finalized per partner, not on this page alone.
          </p>
        </section>

        <section className="mb-12 space-y-4 text-brand-cream/90 text-lg leading-relaxed">
          <h2 className="font-display text-2xl text-white mb-4">Disclosure and ethics</h2>
          <p>
            Referrals should follow honest, transparent practice: only recommend when it fits, and disclose your relationship when your profession or platform
            requires it (including FTC-style disclosure where applicable). The work remains <strong>professional intuitive counsel</strong>—not a guarantee
            of outcomes.
          </p>
        </section>

        <section className="mb-12 text-center">
          <h2 className="font-display text-2xl text-white mb-4">Apply or ask a question</h2>
          <p className="text-brand-cream/90 mb-6 max-w-xl mx-auto">
            If you&apos;d like to be considered—or you&apos;re already in conversation with me about partnering—email with &quot;Affiliate program&quot; in
            the subject and a sentence about your audience.
          </p>
          <Link
            href="mailto:help@pythonessprogrammer.com?subject=Affiliate%20program"
            className="inline-block bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
          >
            Email help@pythonessprogrammer.com
          </Link>
        </section>

        <p className="text-center text-brand-cream/60 text-sm border-t border-white/10 pt-8">
          <Link href="/services" className="text-brand-green-accent hover:underline">
            View services &amp; pricing
          </Link>
          {' · '}
          <Link href="/support" className="text-brand-green-accent hover:underline">
            Support the Pythoness
          </Link>
        </p>
      </div>
    </main>
  )
}
