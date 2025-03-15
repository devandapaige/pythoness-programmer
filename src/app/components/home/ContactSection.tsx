import Link from 'next/link'
import { getMDXContent } from '@/lib/mdx'

export default async function ContactSection() {
  const { frontmatter } = await getMDXContent('home/contact.mdx')
  const { id, title, intro, sessions, benefits, contact, closing } = frontmatter

  return (
    <section id={id} className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-white via-brand-cream to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header with glass effect */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-brand-green-dark">
              {title}
            </h2>
            <div className="space-y-4">
              <p className="text-xl text-brand-purple-dark/90">
                {intro.mainText}
              </p>
              <p className="text-lg text-brand-purple-dark/80 italic">
                {intro.subText}
              </p>
            </div>
          </div>
        </div>

        {/* Session Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sessions.map((session: any, index: number) => (
            <div
              key={session.title}
              className={`group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] animate-fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-display text-brand-green-dark group-hover:text-brand-purple-dark transition-colors">
                  {session.title}
                </h3>
                <span className="text-2xl font-display text-brand-green-accent">
                  {session.price}
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                {session.duration}
              </p>
              <div className="mb-8">
                <h4 className="text-lg font-display mb-3 text-brand-purple-dark/80">
                  Perfect for:
                </h4>
                <ul className="space-y-3">
                  {session.perfectFor.map((item: string, itemIndex: number) => (
                    <li 
                      key={itemIndex}
                      className="flex items-center space-x-3 text-gray-600 group/item"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green-accent group-hover/item:scale-150 transition-transform"></span>
                      <span className="group-hover/item:text-brand-purple-dark transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={session.link}
                target="_blank"
                className="group/btn inline-flex w-full items-center justify-center bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg shadow-brand-green-accent/20"
              >
                <span className="relative">
                  <span className="block transform group-hover/btn:translate-x-1 transition-transform">
                    Book {session.title}
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div 
          className="max-w-3xl mx-auto mb-16 bg-gradient-to-br from-brand-purple-dark/10 to-brand-green-dark/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
        >
          <h3 className="text-2xl md:text-3xl font-display mb-8 text-brand-green-dark text-center">
            {benefits.title}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.items.map((item: string, index: number) => (
              <li 
                key={index} 
                className="flex items-center space-x-3 text-gray-600 group"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-green-accent group-hover:scale-150 transition-transform"></span>
                <span className="group-hover:text-brand-purple-dark transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div 
          className="text-center mb-16 animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <p className="text-gray-600">
            {contact.message}{' '}
            <a
              href={`mailto:${contact.email}`}
              className="text-brand-green-accent hover:text-brand-purple-dark transition-colors"
            >
              {contact.email}
            </a>
          </p>
        </div>

        {/* Closing */}
        <div 
          className="max-w-3xl mx-auto text-center animate-fade-in-up"
          style={{ animationDelay: '750ms' }}
        >
          <p className="text-lg text-gray-600 mb-8">
            {closing.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {closing.buttons.map((button: any, index: number) => (
              <Link
                key={index}
                href={button.link}
                target="_blank"
                className="group inline-flex items-center justify-center bg-brand-green-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg shadow-brand-green-accent/20"
              >
                <span className="relative">
                  <span className="block transform group-hover:translate-x-1 transition-transform">
                    {button.text}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 