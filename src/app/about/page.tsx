import Image from 'next/image'
import Link from 'next/link'
import {
  aboutCta,
  aboutForYouLists,
  aboutHero,
  aboutStory,
  canonicalPhrases,
  coreValues,
  howIWork,
  metadataCopy,
  tarotAndName,
} from '../../data/siteCopy'
import {
  marketingBlock,
  marketingContainer,
  marketingContainerWide,
  marketingGrid,
  marketingHeading,
  marketingScrollAnchor,
  marketingSection,
  marketingSectionTightTop,
} from '../../lib/marketingLayout'

export const metadata = {
  title: 'About Amanda',
  description: metadataCopy.about.description,
  openGraph: {
    title: 'About Amanda | Pythoness Programmer',
    description: metadataCopy.about.openGraphDescription,
    url: '/about',
    type: 'website',
    siteName: 'Pythoness Programmer',
  },
}

function BulletList({ items, accent = 'bg-brand-green-accent' }: { items: readonly string[]; accent?: string }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className={`flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full ${accent}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section
        className={`${marketingSection} bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white overflow-hidden`}
      >
        <div className={marketingContainerWide}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 ${marketingGrid} items-center`}>
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 md:mb-6 text-white">
                {aboutHero.headline}
              </h1>
              {aboutHero.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-lg md:text-xl text-brand-cream/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative">
              <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden ring-4 ring-brand-green-accent/30">
                <Image
                  src="/images/headshot.png"
                  alt="Amanda Nelson - The Pythoness Programmer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-green-accent/20 rounded-full" aria-hidden="true" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-cream/20 rounded-full" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${marketingSection} bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark`}
      >
        <div className={marketingContainer}>
          <h2 className={`text-4xl md:text-5xl font-display ${marketingHeading} text-brand-green-dark`}>
            {aboutStory.title}
          </h2>
          <div className="space-y-4 md:space-y-6 text-lg leading-relaxed">
            {aboutStory.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${marketingSection} bg-brand-green-dark text-white`}>
        <div className={marketingContainer}>
          <h2 className={`text-4xl md:text-5xl font-display mb-4 md:mb-6 text-white`}>{howIWork.title}</h2>
          <p className="text-xl text-brand-cream/90 mb-6 md:mb-8 leading-relaxed">{howIWork.philosophy}</p>
          <p className="text-lg text-brand-cream/80 mb-4 md:mb-6">
            Together we ask: <em>{canonicalPhrases.signatureQuestion}</em>
          </p>
          <BulletList items={[...howIWork.bullets]} />
          <p className="text-lg text-brand-cream/80 mt-6 md:mt-8">{howIWork.closing}</p>
          <Link
            href="/services"
            className="inline-block mt-6 md:mt-8 bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
          >
            View sessions &amp; book
          </Link>
        </div>
      </section>

      <section
        className={`${marketingSectionTightTop} bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white`}
      >
        <div className={marketingContainer}>
          <h2 className={`text-4xl md:text-5xl font-display mb-4 md:mb-6 text-white`}>{tarotAndName.title}</h2>
          <div className="space-y-4 md:space-y-6 text-lg text-brand-cream/80 leading-relaxed">
            {tarotAndName.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="values"
        className={`${marketingSection} bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark ${marketingScrollAnchor}`}
      >
        <div className={marketingContainerWide}>
          <h2 className={`text-4xl md:text-5xl font-display ${marketingHeading} text-brand-green-dark text-center`}>
            My Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 lg:p-8 border border-brand-green-dark/10"
              >
                <h3 className="text-2xl font-display mb-3 md:mb-4 text-brand-green-dark">{value.title}</h3>
                <p className="text-brand-green-dark/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${marketingSection} bg-brand-green-dark text-white`}>
        <div className={marketingContainer}>
          <p className={`text-xl text-brand-cream/90 ${marketingBlock} text-center`}>{aboutForYouLists.intro}</p>
          <div className={`grid grid-cols-1 md:grid-cols-2 ${marketingGrid}`}>
            <div>
              <h2 className={`text-2xl md:text-3xl font-display mb-4 md:mb-6 text-brand-green-accent`}>
                Who This Is For
              </h2>
              <BulletList items={[...aboutForYouLists.forYou]} />
            </div>
            <div>
              <h2 className={`text-2xl md:text-3xl font-display mb-4 md:mb-6 text-brand-cream`}>
                Who This Isn&apos;t For
              </h2>
              <BulletList items={[...aboutForYouLists.notForYou]} accent="bg-brand-cream/60" />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${marketingSection} bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white`}
      >
        <div className={`${marketingContainer} text-center`}>
          <h2 className={`text-4xl md:text-5xl font-display mb-4 md:mb-6 text-white`}>{aboutCta.title}</h2>
          <p className="text-xl text-brand-cream/90 mb-6 md:mb-8 max-w-2xl mx-auto">{aboutCta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
            >
              View sessions &amp; book
            </Link>
            <Link
              href="/resources"
              className="inline-block bg-white/10 border-2 border-brand-cream/50 text-brand-cream px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-semibold"
            >
              Explore Free Resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
