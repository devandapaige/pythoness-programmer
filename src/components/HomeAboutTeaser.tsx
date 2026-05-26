import Image from 'next/image'
import Link from 'next/link'
import { homeAboutTeaser } from '../data/siteCopy'

export default function HomeAboutTeaser() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <div className="relative mx-auto max-w-sm w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-brand-green-accent/30">
            <Image
              src="/pythoness-main.png"
              alt="Amanda Nelson - Pythoness Programmer"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-white/10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-display mb-4 md:mb-6 text-white">{homeAboutTeaser.title}</h2>
          <p className="text-lg text-white/90 mb-6 md:mb-8 leading-relaxed">{homeAboutTeaser.description}</p>
          <Link
            href={homeAboutTeaser.linkHref}
            className="inline-block bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
          >
            {homeAboutTeaser.linkText}
          </Link>
        </div>
      </div>
    </div>
  )
}
