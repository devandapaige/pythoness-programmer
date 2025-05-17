import { sectionStyles } from './shared/Styles'

export default function ToolsAndResourcesSection() {
  return (
    <section id="tools-resources" className="py-16 bg-brand-green-dark">
      <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
          <h3 className="text-2xl font-display mb-6 text-brand-green-dark">
            Amanda&apos;s Favorite Flours and Tools
          </h3>
          
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-brand-cream p-6 rounded-lg">
                <h3 className={sectionStyles.heading.h3}>
                  Flours
                </h3>
                <ul className={sectionStyles.list.unordered}>
                  <li>King Arthur Organic Rye Flour — this is what I used to make the starter from scratch</li>
                  <li>Any non-bleached all-purpose flour — King Arthur is usually the brand I reach for. Generic all-purpose flours don&apos;t work as well when feeding the starter, though they&apos;re perfectly fine for recipes.</li>
                  <li>Any non-bleached bread flour — currently I&apos;ve been getting the generic brand at Costco</li>
                </ul>
              </div>

              <div className="bg-brand-cream p-6 rounded-lg">
                <h3 className={sectionStyles.heading.h3}>
                  Tools
                </h3>
                <ul className={sectionStyles.list.unordered}>
                  <li>
                    <a href="https://amzn.to/4i09Bmr" target="_blank" rel="noopener noreferrer" className="text-brand-purple-dark hover:text-brand-purple-light">
                      Simple Kitchen Scale
                    </a>
                  </li>
                  <li>
                    <a href="https://amzn.to/4bt23WF" target="_blank" rel="noopener noreferrer" className="text-brand-purple-dark hover:text-brand-purple-light">
                      OXO Airtight Flour Storage
                    </a>
                    <span className="text-brand-purple-dark/80"> (what I&apos;m slowly saving up for my baking items)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-cream p-6 rounded-lg my-8">
              <h3 className={sectionStyles.heading.h3}>
                Videos and Other Resources
              </h3>
              <div className="mt-6">
                <a
                  href="https://www.tiktok.com/@pythoness_programmer/collection/sourdough-7352284778902604587?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  Sourdough Playlist Collection on TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 