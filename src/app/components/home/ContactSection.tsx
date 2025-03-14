import Link from 'next/link'
import { getMDXContent } from '@/lib/mdx'

export default async function ContactSection() {
  const { frontmatter } = await getMDXContent('home/contact.mdx')
  const { id, title, intro, sessions, benefits, contact, closing } = frontmatter

  return (
    <section id={id} className="py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-brand-green-dark">
            {title}
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            {intro.mainText}
          </p>
          <p className="text-lg text-gray-600">
            {intro.subText}
          </p>
        </div>

        {/* Session Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sessions.map((session: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-display mb-2 text-brand-green-dark">
                  {session.title}
                </h3>
                <p className="text-xl text-brand-green-accent font-semibold">
                  {session.price} • {session.duration}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-display mb-3 text-brand-green-dark">
                  Perfect for:
                </h4>
                <ul className="space-y-2">
                  {session.perfectFor.map((item: string, itemIndex: number) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <span className="text-brand-green-accent mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={session.link}
                target="_blank"
                className="inline-block w-full text-center bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-display mb-8 text-brand-green-dark text-center">
            {benefits.title}
          </h3>
          <ul className="space-y-4">
            {benefits.items.map((item: string, index: number) => (
              <li key={index} className="flex items-start text-gray-600">
                <span className="text-brand-green-accent mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-16">
          <p className="text-gray-600">
            {contact.message}{' '}
            <a
              href={`mailto:${contact.email}`}
              className="text-brand-green-accent hover:underline"
            >
              {contact.email}
            </a>
          </p>
        </div>

        {/* Closing */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            {closing.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {closing.buttons.map((button: any, index: number) => (
              <Link
                key={index}
                href={button.link}
                target="_blank"
                className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
              >
                {button.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 