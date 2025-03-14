import Link from 'next/link'
import Section from '@/components/Section'
import { contactSection } from '@/app/data/homeData'

export default function ContactSection() {
  return (
    <Section id={contactSection.id} title={contactSection.title} className="bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark text-white">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-2xl font-light text-white leading-relaxed">
              {contactSection.intro.mainText}
            </p>
            <p className="text-lg text-brand-purple-light leading-relaxed">
              {contactSection.intro.subText}
            </p>
          </div>
          <div className="space-y-6">
            {contactSection.sessions.map((session, index) => (
              <Link 
                key={index}
                href={session.link}
                target="_blank"
                className="block"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-brand-green-accent/50 transition-all duration-300">
                  <h3 className="font-display text-xl mb-3 text-brand-cream">{session.title}</h3>
                  <p className="text-white/90 mb-4">Perfect for:</p>
                  <ul className="space-y-2 text-white/80 mb-6">
                    {session.perfectFor.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <span className="text-brand-green-accent text-xl leading-none mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-display text-brand-cream">{session.price}</span>
                    <span className="text-white/80">{session.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 space-y-6">
          <h3 className="font-display text-xl text-brand-cream">{contactSection.benefits.title}</h3>
          <ul className="space-y-4">
            {contactSection.benefits.items.map((item, index) => (
              <li key={index} className="flex items-start space-x-4">
                <span className="text-brand-green-accent text-2xl leading-none mt-1">✓</span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6">
            <p className="text-white/80">
              {contactSection.contact.message}{' '}
              <a 
                href={`mailto:${contactSection.contact.email}`}
                className="text-brand-cream hover:text-brand-green-accent transition-colors duration-300"
              >
                {contactSection.contact.email}
              </a>
            </p>
          </div>
          <div className="pt-6">
            <p className="text-lg text-white/90">
              {contactSection.closing.text}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {contactSection.closing.buttons.map((button, index) => (
              <Link 
                key={index}
                href={button.link}
                target="_blank"
                className="inline-block w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center"
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
} 