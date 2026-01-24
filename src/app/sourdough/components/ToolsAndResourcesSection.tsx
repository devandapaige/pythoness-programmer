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
          </div>
        </div>
      </div>
    </section>
  )
} 