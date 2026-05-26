import Link from 'next/link'
import HeroCard from '../components/HeroCard'
import HomeAboutTeaser from '../components/HomeAboutTeaser'
import NewsletterCard from '../components/NewsletterCard'
import ServiceCard from '../components/ServiceCard'
import { bookingUrls } from '../config/booking'
import {
  canonicalPhrases,
  forYouLists,
  freeResources,
  howItWorks,
  metadataCopy,
  servicesSection,
  sessions,
  struggleBlock,
} from '../data/siteCopy'
import {
  marketingContainer,
  marketingContainerWide,
  marketingGrid,
  marketingHeading,
  marketingHomeBlock,
  marketingHomeSection,
  marketingHomeSectionCompact,
  marketingHomeRhythm,
  marketingHomeSectionTightTop,
  marketingSubheading,
  siteHeaderOffset,
} from '../lib/marketingLayout'

export const metadata = {
  title: 'Tech That Works, for People Like Us',
  description: metadataCopy.home.description,
  openGraph: {
    title: 'Pythoness Programmer | Tech That Works, for People Like Us',
    description: metadataCopy.home.openGraphDescription,
    url: '/',
    type: 'website',
    siteName: 'Pythoness Programmer',
  },
  other: {
    'p:domain_verify': '18888270799e128d4d49644962be5ab6',
  },
}

const sessionBookingUrls = {
  async: bookingUrls.async,
  live20: bookingUrls.live20,
  deep60: bookingUrls.deep60,
} as const

export default async function Home() {
  const asyncSession = sessions.async
  const live20Session = sessions.live20
  const deep60Session = sessions.deep60

  return (
    <main className={marketingHomeRhythm}>
      <section className={`bg-brand-green-dark ${siteHeaderOffset} md:pt-20 pb-[5px] overflow-hidden`}>
        <HeroCard />
      </section>

      <section className={`bg-brand-green-dark ${marketingHomeSection} overflow-hidden`}>
        <div className={`${marketingContainer} max-w-3xl text-center text-white`}>
          <h2 className={`text-3xl md:text-4xl font-display ${marketingSubheading}`}>{struggleBlock.headline}</h2>
          <p className="text-lg text-brand-cream/90 mb-4 md:mb-6 leading-relaxed">{struggleBlock.validation}</p>
          <p className="text-xl text-brand-cream leading-relaxed">
            {struggleBlock.closing} <em>{canonicalPhrases.signatureQuestion}</em> {canonicalPhrases.thirdTime}
          </p>
        </div>
      </section>

      <section className={`bg-brand-green-dark ${marketingHomeSectionTightTop} overflow-hidden`}>
        <div className={marketingContainer}>
          <h2 className={`text-3xl md:text-4xl font-display text-white text-center ${marketingHeading}`}>
            {howItWorks.title}
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-white ${marketingHomeBlock}`}>
            {howItWorks.steps.map((step) => (
              <div key={step.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10">
                <h3 className="text-xl font-display text-brand-green-accent mb-2 md:mb-3">{step.title}</h3>
                <p className="text-brand-cream/90">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={bookingUrls.live20}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold text-center"
            >
              Book a Session
            </Link>
            <Link
              href="/services"
              className="inline-block bg-white/10 border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold text-center"
            >
              See All Services
            </Link>
            <Link
              href="/resources"
              className="inline-block bg-white/10 border-2 border-brand-cream/30 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold text-center"
            >
              Browse Free Resources
            </Link>
          </div>
        </div>
      </section>

      <section className={`${marketingHomeSection} bg-brand-green-dark text-white overflow-hidden`}>
        <div className={marketingContainerWide}>
          <div className={`text-center ${marketingHomeBlock}`}>
            <h2 className={`text-4xl md:text-5xl font-display mb-4 md:mb-6 text-white`}>{servicesSection.title}</h2>
            <p className="text-xl text-brand-cream max-w-3xl mx-auto">{servicesSection.subtitle}</p>
          </div>

          <div className={marketingHomeBlock}>
            <h3 className={`text-3xl font-display text-center ${marketingHeading} text-brand-cream`}>Featured Service</h3>
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
                textColor="text-brand-green-dark"
                note={asyncSession.note}
                customStyling={{
                  backgroundColor: 'from-brand-cream to-white',
                  textColor: 'text-brand-green-dark',
                  accentColor: 'brand-green-accent',
                  borderColor: 'border-brand-green-accent',
                  badgeText: 'ASYNC',
                  badgeColor: 'brand-green-accent',
                }}
              />
            </div>
          </div>

          <div className={marketingHomeBlock}>
            <h3 className={`text-3xl font-display text-center mb-2 md:mb-4 text-brand-cream`}>Live 1:1 Sessions</h3>
            <p className={`text-brand-cream/80 text-center ${marketingSubheading}`}>
              Interactive sessions with real-time guidance
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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

      <section
        className={`${marketingHomeSection} bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark overflow-hidden`}
      >
        <div className={marketingContainer}>
          <div className={`grid grid-cols-1 md:grid-cols-2 ${marketingGrid}`}>
            <div>
              <h2 className={`text-2xl md:text-3xl font-display mb-4 md:mb-6 text-brand-green-dark`}>
                This Is For You If...
              </h2>
              <ul className="space-y-3 text-lg text-brand-green-dark/90">
                {forYouLists.forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={`text-2xl md:text-3xl font-display mb-4 md:mb-6 text-brand-green-dark`}>
                This Isn&apos;t For You If...
              </h2>
              <ul className="space-y-3 text-lg text-brand-green-dark/90">
                {forYouLists.notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-dark/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${marketingHomeSection} bg-brand-green-dark text-white overflow-hidden`}>
        <div className={`${marketingContainer} max-w-3xl text-center`}>
          <h2 className={`text-3xl md:text-4xl font-display mb-4 md:mb-6`}>{freeResources.title}</h2>
          <p className="text-xl text-brand-cream/90 mb-[34px] md:mb-[42px] leading-relaxed">{freeResources.description}</p>
          <Link
            href="/resources"
            className="inline-block bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
          >
            Explore Free Resources
          </Link>
        </div>
      </section>

      <section
        className={`${marketingHomeSection} bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white overflow-hidden`}
      >
        <div className={marketingContainerWide}>
          <HomeAboutTeaser />
        </div>
      </section>

      <section className={`${marketingHomeSectionCompact} overflow-hidden`}>
        <div className={marketingContainerWide}>
          <NewsletterCard />
        </div>
      </section>
    </main>
  )
}
