import NewsletterCard from './NewsletterCard'

export default function RestPeriodHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-purple-dark via-brand-purple-dark/95 to-brand-purple-dark">
      {/* Hero Section - Rest Mode Announcement */}
      <section className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-display mb-6 text-brand-cream">
              Rest Mode
            </h1>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-brand-purple-light to-transparent mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl text-brand-cream/90 mb-8 leading-relaxed">
              We are currently in a period of rest and reflection, following the ancient tradition of the Pythia Oracles of Delphi.
            </p>
            <div className="bg-brand-purple-light/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-brand-purple-light/30">
              <p className="text-xl md:text-2xl text-brand-cream mb-4">
                Consulting services will resume
              </p>
              <p className="text-3xl md:text-4xl font-display text-brand-purple-light mb-6">
                March 2026
              </p>
              <p className="text-lg md:text-xl text-brand-cream/80">
                Active season: March - November 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pythia Oracles Background Section */}
      <section className="py-16 px-4 md:px-6 bg-brand-purple-dark/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-brand-purple-light/20">
            <h2 className="text-3xl md:text-4xl font-display mb-6 text-brand-cream">
              The Tradition of Rest: Pythia Oracles of Delphi
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-brand-cream/90 text-lg leading-relaxed mb-6">
                The Pythia, the high priestess of the Temple of Apollo at Delphi, was one of the most important religious figures in ancient Greece. She delivered prophecies and guidance to those who sought wisdom, but her practice was deeply connected to cycles of rest and renewal.
              </p>
              
              <p className="text-brand-cream/90 text-lg leading-relaxed mb-6">
                The Pythia did not provide oracles year-round. She observed specific periods of rest, particularly during the winter months when the sacred site was closed. These rest periods were essential for maintaining the integrity and power of her practice. During these times, she would withdraw, reflect, and prepare for the active season ahead.
              </p>

              <p className="text-brand-cream/90 text-lg leading-relaxed mb-8">
                This tradition recognizes that wisdom and service require periods of restoration. Just as the Pythia honored cycles of rest, we honor the need for reflection, renewal, and preparation before returning to active service.
              </p>

              <div className="border-t border-brand-purple-light/30 pt-8 mt-8">
                <h3 className="text-2xl font-display mb-4 text-brand-purple-light">
                  Learn More
                </h3>
                <p className="text-brand-cream/80 mb-6">
                  For those curious about the historical and cultural context of the Pythia Oracles:
                </p>
                <ul className="space-y-3 text-brand-cream/90">
                  <li>
                    <a 
                      href="https://www.britannica.com/topic/Pythia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-purple-light hover:text-brand-cream underline transition-colors"
                    >
                      Britannica: Pythia
                    </a>
                    {' '}— Comprehensive overview of the Pythia and her role
                  </li>
                  <li>
                    <a 
                      href="https://www.worldhistory.org/Delphi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-purple-light hover:text-brand-cream underline transition-colors"
                    >
                      World History Encyclopedia: Delphi
                    </a>
                    {' '}— History of the Oracle at Delphi
                  </li>
                  <li>
                    <a 
                      href="https://www.history.com/topics/ancient-greece/delphi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-purple-light hover:text-brand-cream underline transition-colors"
                    >
                      History.com: Delphi
                    </a>
                    {' '}— The Oracle of Delphi in ancient Greek culture
                  </li>
                  <li>
                    <a 
                      href="https://www.metmuseum.org/toah/hd/delp/hd_delp.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-purple-light hover:text-brand-cream underline transition-colors"
                    >
                      The Metropolitan Museum of Art: Delphi
                    </a>
                    {' '}— Art and archaeology of the site
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <NewsletterCard
            title="Stay Connected During Rest"
            description="While we're in rest mode, stay updated with our newsletter. You'll receive updates about our return and continue to get strategic insights on tech, systems, and accessible solutions."
            bgColor="bg-brand-purple-dark/30"
          />
        </div>
      </section>
    </main>
  )
}
