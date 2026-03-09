import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Amanda',
  description: 'Amanda Nelson—the Pythoness Programmer. Senior Full Stack Software Engineer, late-identified neurodivergent, chronic illness navigator. How I got here, how I work, why tarot, and the story behind the name.',
  openGraph: {
    title: 'About Amanda | Pythoness Programmer',
    description: 'Amanda Nelson—the Pythoness Programmer. Late-identified neurodivergent, software engineer, and guide for reflection sessions that ask: What is this struggle trying to teach you?',
    url: '/about',
    type: 'website',
    siteName: 'Pythoness Programmer',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-white">
                I spent 15 years being good at systems. I just didn&apos;t know why — or what it was costing me.
              </h1>
              <p className="text-xl text-brand-cream/90 leading-relaxed">
                I&apos;m Amanda Nelson — the Pythoness Programmer. Senior Full Stack Software Engineer. Late-identified neurodivergent. Chronic illness navigator. And someone who built the reflection skills I now teach entirely by necessity, in the hardest stretch of my life so far.
              </p>
              <p className="text-lg text-brand-cream/80">
                Here&apos;s the version of my story that actually matters for why you&apos;re here.
              </p>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden ring-4 ring-brand-green-accent/30">
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

      {/* How I Got Here */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-12 text-brand-green-dark">
            How I Got Here
          </h2>
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              I came to software engineering sideways. Before code, I spent over 15 years in communications, customer service, and systems building — work that required exactly the kind of pattern recognition, detail orientation, and systems thinking that neurodivergent brains are often exceptional at. I just didn&apos;t have that language for it yet.
            </p>
            <p>
              In 2020, during the pandemic, I enrolled in a part-time software development bootcamp. I wanted to make the formal leap into tech. What I didn&apos;t know was that I was also walking into the most clarifying — and most destabilizing — period of my life.
            </p>
            <p>
              I got my first engineering job in 2021 at Zappos.com. I was proud. I was also, quietly, falling apart in ways I couldn&apos;t name yet.
            </p>
            <p>
              That same year I received an official ADHD diagnosis. I&apos;d had it my whole life. Suddenly, a lot of things made sense — and a lot of other things got harder, because now I had to actually look at them.
            </p>
            <p>
              I&apos;d been living with fibromyalgia since 2016 and chronic migraines since the same year. In 2018 I was bedbound for nine months. My body had been telling me something for years. I was only beginning to learn how to listen.
            </p>
            <p>
              Being a new software engineer while also being a newly-diagnosed neurodivergent person with a chronic illness, no direct manager, and no roadmap — that&apos;s not a gap year story. That&apos;s just what it was. Hard. Clarifying. Mine.
            </p>
            <p>
              What helped wasn&apos;t a system. It was people. A TikTok community of late-identified and lifelong neurodivergent adults who were naming patterns I&apos;d been carrying alone. Marginalized voices who had been talking for years about how our systems — tech systems, productivity systems, social systems — were built to serve a particular kind of brain and body, and how everyone else was just expected to adapt.
            </p>
            <p>
              I&apos;m near Richmond, Virginia — where I went to college, where I took my first steps into adulthood, and where, in 2020, I watched confederate statues come down in the streets. That wasn&apos;t just a national moment. It was a collective reckoning happening in a place I know, in a community I belong to — a visible, physical act of examining what had been inherited, erected, and normalized, and deciding to stop carrying it.
            </p>
            <p>
              The BLM protests of 2020 cracked something open in me about decolonization — about what it means to look honestly at the systems we&apos;ve inherited and internalized, and stop blaming ourselves for struggling inside them. That framework didn&apos;t just change how I thought about society. It changed how I thought about my tools. Not how everyone else was using them — how <em>I</em> was using them, and what that revealed about what I&apos;d absorbed without question.
            </p>
            <p>
              That&apos;s where the Pythoness Programmer comes from. Not from having it all figured out. From building the reflection skills in the middle of the hardest stretch — and refusing to stop once I got through it.
            </p>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
            How I Work
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8 leading-relaxed">
            I philosophize with other decolonizing neurodivergents about how our tech struggles reveal what we&apos;ve internalized and what our brains actually need.
          </p>
          <p className="text-lg text-brand-cream/80 mb-8">
            I don&apos;t swoop in with quick fixes. I don&apos;t have all the answers, and I&apos;m not here to pretend otherwise. I&apos;m a guide, not a guru.
          </p>
          <p className="text-xl text-brand-cream mb-8 leading-relaxed">
            What I do is sit with you in the aftermath of your last tech hurdle and ask: <em>What is this struggle trying to teach you?</em>
          </p>
          <p className="text-lg text-brand-cream/80 mb-6">Together we:</p>
          <ul className="space-y-4 text-brand-cream/90 mb-8">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Reflect on the patterns you keep repeating — and why they keep failing
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Uncover what you&apos;ve internalized from ableist, productivity-obsessed tech culture
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Discover resources you didn&apos;t know existed — tools, approaches, and frameworks that actually fit your brain
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
              Build understanding so you don&apos;t make it a third time
            </li>
          </ul>
          <p className="text-lg text-brand-cream/80">
            My sessions blend deep technical expertise, tarot-guided intuition, and neurodivergent-centered design. We start and end with a tarot pull to guide our reflection.
          </p>
        </div>
      </section>

      {/* Why Tarot */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
            Why Tarot
          </h2>
          <p className="text-xl text-brand-cream/90 leading-relaxed mb-6">
            Because the best diagnostic tool isn&apos;t always a flowchart.
          </p>
          <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
            Tarot works for me the same way pattern recognition works — it surfaces what&apos;s already present and gives it a frame. I&apos;m not predicting your future. I&apos;m using it as a structured way to enter and exit the reflection space, to hold the complexity of what we&apos;re examining, and to give you something to carry with you after we&apos;re done.
          </p>
          <p className="text-lg text-brand-cream/80 leading-relaxed">
            If that&apos;s not your thing, you&apos;re still welcome here. But it&apos;s not going anywhere.
          </p>
        </div>
      </section>

      {/* The Name */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
            The Name
          </h2>
          <p className="text-xl text-brand-cream/90 leading-relaxed">
            The Pythia were ancient oracles — the ones people came to when they were standing at a crossroads and needed someone to sit with the complexity and speak plainly. They didn&apos;t give orders. They demystified.
          </p>
          <p className="text-xl text-brand-cream/90 leading-relaxed mt-6">
            That&apos;s the work. Tech is full of complexity that gets used to make people feel small. My job is to make it clear — and to remind you that your brain was never the problem.
          </p>
        </div>
      </section>

      {/* My Core Values */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-cream via-brand-cream/95 to-brand-cream text-brand-green-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-12 text-brand-green-dark text-center">
            My Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-brand-green-dark/10">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">Learning</h3>
              <p className="text-brand-green-dark/80">
                I believe in building digital fluency, not dependency. My goal is to guide you to your own aha moments, not create a reliance on mine.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-brand-green-dark/10">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">Resourcefulness</h3>
              <p className="text-brand-green-dark/80">
                There are so many tools, frameworks, and approaches that don&apos;t get mainstream attention but might be exactly right for your brain. I love finding them. Hidden gems are my thing.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-brand-green-dark/10">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">Serenity</h3>
              <p className="text-brand-green-dark/80">
                Tech struggles are stressful enough. Our sessions are calm, grounded spaces. No pressure, no judgment, no urgency. Just clarity.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-brand-green-dark/10">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">Inclusion</h3>
              <p className="text-brand-green-dark/80">
                This is a safe, affirming space for LGBTQIA+ folks, sex workers, and anyone marginalized by mainstream tech culture. I center neurodivergent experiences and decolonizing practices in everything I do.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-brand-green-dark/10">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">Humor</h3>
              <p className="text-brand-green-dark/80">
                Sometimes the most useful thing we can do is laugh at the absurdity of a system that was never built for us. I bring levity. It&apos;s part of the work.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-brand-green-dark/10">
              <h3 className="text-2xl font-display mb-4 text-brand-green-dark">Resilience</h3>
              <p className="text-brand-green-dark/80">
                You&apos;ve survived every tech hurdle so far. My job is to help you build the understanding that makes you stronger for the next one. We&apos;re not just working through a problem — we&apos;re building capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For / Who This Isn't For */}
      <section className="py-24 px-4 md:px-6 bg-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-brand-cream/90 mb-12 text-center">
            You&apos;re looking for a guide who helps you understand your tech struggles, not just patch them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-display mb-6 text-brand-green-accent">
                Who This Is For
              </h2>
              <p className="text-brand-cream/80 mb-4">You might be:</p>
              <ul className="space-y-3 text-brand-cream/90">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
                  A neurodivergent creative who keeps hitting the same workflow walls
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
                  Someone newly diagnosed — or in the middle of figuring out what your brain actually is — who&apos;s looking back at old patterns with new eyes
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
                  A small business owner tired of tech that doesn&apos;t fit how you think
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
                  Someone doing decolonizing work who wants their systems to align with their values
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-green-accent" />
                  A person who&apos;s tried every productivity tool and is starting to wonder if the tools are the problem
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display mb-6 text-brand-cream">
                Who This Isn&apos;t For
              </h2>
              <ul className="space-y-3 text-brand-cream/80">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-cream/60" />
                  People looking for emergency tech rescue
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-cream/60" />
                  Anyone who wants me to &quot;just fix it&quot; without understanding why it broke
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-cream/60" />
                  Folks who aren&apos;t interested in reflection or pattern work
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-cream/60" />
                  Anyone expecting me to have all the answers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-br from-brand-green-dark via-brand-green-dark/90 to-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-white">
            Ready to Reflect?
          </h2>
          <p className="text-xl text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            If you&apos;re tired of repeating the same tech patterns and ready to understand what they&apos;re trying to teach you, let&apos;s work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://cal.com/pythoness/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-green-accent text-black px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold"
            >
              Book a Session
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
