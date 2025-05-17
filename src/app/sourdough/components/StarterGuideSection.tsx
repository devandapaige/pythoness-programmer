import { sectionStyles } from './shared/Styles'

export default function StarterGuideSection() {
  return (
    <section id="starter-guide" className="py-16 bg-white">
      <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
          <h2 className={sectionStyles.heading.h2}>
            WTF do I do with this starter?
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-brand-purple-dark/80">
              You probably received about 50g of my sourdough starter in a Mason jar. The jar is the ideal vessel for feeding your new starter, which came from my rye starter Martha.
            </p>

            <div className="bg-brand-cream/50 p-6 rounded-lg my-8">
              <h3 className={sectionStyles.heading.h3}>
                How to feed Martha:
              </h3>
              <p className="mb-4">
                Martha likes the typical 1:2:2 ratio—for every 1 part of starter, add 2 parts flour and 2 parts water.
              </p>
              <ul className={sectionStyles.list.unordered}>
                <li>So for the starter you received from Amanda, add 100g flour and 100g of lukewarm water (50g:100g:100g).</li>
                <li>To avoid killing the active yeasts, don&apos;t use hot water or bleached flours when feeding.</li>
                <li>Use a rubber band to mark the starter&apos;s level after feeding, so you can track its growth.</li>
                <li>Keep your starter in a warm place (around 75-80°F) for optimal fermentation.</li>
                <li>Use a loose-fitting lid or cover with a cloth to prevent forming a seal. Make sure it&apos;s sealed when resting in the fridge.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-brand-purple-light/30 p-6 rounded-lg">
                <h3 className={sectionStyles.heading.h3}>
                  For an Active Starter (Room Temperature):
                </h3>
                <ul className={sectionStyles.list.unordered}>
                  <li>Feed once every 12-24 hours using the 1:2:2 ratio (50g starter + 100g flour + 100g water)</li>
                  <li>Best time to use in recipes: 4-8 hours after feeding, when starter has doubled and is bubbly</li>
                  <li>Keep jar loosely covered at room temperature (65-75°F)</li>
                </ul>
              </div>

              <div className="bg-brand-purple-light/30 p-6 rounded-lg">
                <h3 className={sectionStyles.heading.h3}>
                  For Maintenance Mode (Refrigerated):
                </h3>
                <ul className={sectionStyles.list.unordered}>
                  <li>Feed once before refrigerating</li>
                  <li>Store in refrigerator for up to 2 weeks between feedings</li>
                  <li>When ready to bake again:
                    <ul className={sectionStyles.list.unordered}>
                      <li>Remove from fridge and let sit at room temperature for 2 hours</li>
                      <li>Feed and wait 4-8 hours until active</li>
                      <li>Feed one more time if starter seems sluggish</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-green-dark/5 p-6 rounded-lg my-8">
              <h3 className={sectionStyles.heading.h3}>
                Signs Your Starter is Healthy:
              </h3>
              <ul className={sectionStyles.list.unordered}>
                <li>Doubles in size after feeding</li>
                <li>Smells pleasantly sour (like yogurt or beer)</li>
                <li>Has consistent bubbles throughout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 