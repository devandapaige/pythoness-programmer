import { sectionStyles } from './shared/Styles'

export default function ToolsAndResourcesSection() {
  return (
    <section className="py-16 bg-brand-cream/30">
      <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
          <h2 className={sectionStyles.heading.h2}>
            Amanda's Favorite Flours and Tools
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className={sectionStyles.heading.h3}>
                  Flours
                </h3>
                <ul className={sectionStyles.list.unordered}>
                  <li>King Arthur Organic Rye Flour — this is what I used to make the starter from scratch</li>
                  <li>Any non-bleached all-purpose flour — King Arthur is usually the brand I reach for. Generic all-purpose flours don't work as well when feeding the starter, though they're perfectly fine for recipes.</li>
                  <li>Any non-bleached bread flour — currently I've been getting the generic brand at Costco</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
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
                    <span className="text-brand-purple-dark/80"> (what I'm slowly saving up for my baking items)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-purple-light/30 p-6 rounded-lg my-8">
              <h3 className={sectionStyles.heading.h3}>
                Videos and Other Resources
              </h3>
              <ul className={sectionStyles.list.unordered}>
                <li>
                  <a href="https://www.tiktok.com/@pythoness_programmer/collection/sourdough-7352284778902604587?is_from_webapp=1&sender_device=pc" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-brand-purple-dark hover:text-brand-purple-light">
                    Sourdough Playlist Collection on TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 