import Link from 'next/link'
import ServiceCard from '../../components/ServiceCard'
import SessionComparison from '../../components/SessionComparison'
import { bookingUrls } from '../../config/booking'
import {
  metadataCopy,
  offeringIncludes,
  policies,
  servicesDifferent,
  servicesForYouLists,
  servicesHero,
  sessions,
} from '../../data/siteCopy'
import {
  marketingBlock,
  marketingContainer,
  marketingContainerWide,
  marketingHeading,
  marketingScrollAnchor,
  marketingSection,
  marketingSectionTightTop,
} from '../../lib/marketingLayout'

export const metadata = {
  title: 'Services',
  description: metadataCopy.services.description,
  openGraph: {
    title: 'Services | Pythoness Programmer',
    description: metadataCopy.services.openGraphDescription,
    url: '/services',
    type: 'website',
    siteName: 'Pythoness Programmer',
  },
}

const sessionBookingUrls = {
  async: bookingUrls.async,
  live20: bookingUrls.live20,
  deep60: bookingUrls.deep60,
} as const

function BulletList({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={className ?? 'space-y-3'}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ServicesPage() {
  const asyncSession = sessions.async
  const live20Session = sessions.live20
  const deep60Session = sessions.deep60

  return (
    <main className="min-h-screen">
      <section
        id="services"
        className={`${marketingSection} bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white overflow-hidden`}
      >
        <div className={marketingContainerWide}>
          <header className={`${marketingContainer} text-center ${marketingBlock}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 md:mb-6 text-white">
              {servicesHero.title}
            </h1>
            {servicesHero.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg md:text-xl text-brand-cream/90 mb-4 md:mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </header>

          <h2 className={`text-4xl md:text-5xl font-display ${marketingHeading} text-white text-center`}>
            The sessions
          </h2>
          <SessionComparison />

          <div id="async-reflection" className={`${marketingBlock} ${marketingScrollAnchor}`}>
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                title={asyncSession.title}
                subtitle={asyncSession.subtitle}
                price={asyncSession.price}
                description={asyncSession.description}
                features={asyncSession.features}
                ctaLink={sessionBookingUrls.async}
                ctaText={asyncSession.ctaText}
                icon={asyncSession.icon}
                highlight={asyncSession.highlight}
                isNew={asyncSession.isNew}
                textColor="text-brand-cream"
                note={asyncSession.note}
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

          <div className={marketingBlock}>
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                title={live20Session.title}
                subtitle={live20Session.subtitle}
                price={live20Session.price}
                description={live20Session.description}
                features={live20Session.features}
                ctaLink={sessionBookingUrls.live20}
                ctaText={live20Session.ctaText}
                icon={live20Session.icon}
                textColor="text-brand-cream"
                note={live20Session.note}
              />
            </div>
          </div>

          <div className={marketingBlock}>
            <div className="max-w-2xl mx-auto">
              <ServiceCard
                title={deep60Session.title}
                subtitle={deep60Session.subtitle}
                price={deep60Session.price}
                description={deep60Session.description}
                features={deep60Session.features}
                ctaLink={sessionBookingUrls.deep60}
                ctaText={deep60Session.ctaText}
                icon={deep60Session.icon}
                textColor="text-brand-cream"
                note={deep60Session.note}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${marketingSectionTightTop} bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white`}>
        <div className={marketingContainer}>
          <h2 className={`text-4xl md:text-5xl font-display mb-6 md:mb-8 text-white text-center`}>
            {servicesDifferent.title}
          </h2>
          <div className="space-y-4 md:space-y-6">
            {servicesDifferent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg md:text-xl text-brand-cream/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${marketingSection} bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark`}
      >
        <div className={marketingContainer}>
          <p className={`text-xl text-brand-green-dark/90 mb-6 md:mb-8 text-center`}>{servicesForYouLists.intro}</p>
          <BulletList
            items={servicesForYouLists.forYou}
            className="space-y-3 md:space-y-4 text-lg text-brand-green-dark/90 mb-8 md:mb-10 max-w-2xl mx-auto"
          />
          <h2 className={`text-2xl font-display mb-3 md:mb-4 text-brand-green-dark text-center`}>
            Who this isn&apos;t for
          </h2>
          <BulletList
            items={servicesForYouLists.notForYou}
            className="space-y-3 text-brand-green-dark/80 max-w-2xl mx-auto"
          />
        </div>
      </section>

      <section className={`${marketingSection} bg-brand-green-dark text-white`}>
        <div className={marketingContainer}>
          <h2 className={`text-3xl md:text-4xl font-display mb-6 md:mb-8 text-white text-center`}>
            {offeringIncludes.title}
          </h2>
          <BulletList items={[...offeringIncludes.items]} className="space-y-3 md:space-y-4 text-brand-cream/90 text-lg" />
        </div>
      </section>

      <section
        className={`${marketingSection} bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white`}
      >
        <div className={`${marketingContainer} max-w-3xl`}>
          <h2 className={`text-4xl md:text-5xl font-display mb-6 md:mb-8 text-white text-center`}>{policies.title}</h2>

          <div className="space-y-6 md:space-y-8 text-brand-cream/90 text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-display text-brand-cream mb-2 md:mb-3">How to book</h3>
              <ul className="space-y-2 list-disc pl-5">
                {policies.howToBook.map((item) => (
                  <li key={item.slice(0, 30)}>{item}</li>
                ))}
                <li>
                  Not sure which tier fits? Email{' '}
                  <a
                    href="mailto:help@pythonessprogrammer.com"
                    className="text-brand-green-accent underline hover:no-underline"
                  >
                    help@pythonessprogrammer.com
                  </a>{' '}
                  with one sentence about the decision.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-display text-brand-cream mb-2 md:mb-3">What to expect</h3>
              <ul className="space-y-2 list-disc pl-5">
                {policies.whatToExpect.map((item) => (
                  <li key={item.slice(0, 30)}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-display text-brand-cream mb-2 md:mb-3">Policies</h3>
              <ul className="space-y-2 md:space-y-3 list-disc pl-5">
                {policies.policyItems.map((item) => (
                  <li key={item.slice(0, 30)}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mt-8 md:mt-10">
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
