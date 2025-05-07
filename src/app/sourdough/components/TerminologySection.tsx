import { sectionStyles } from './shared/Styles'

export default function TerminologySection() {
  return (
    <section id="terminology" className="py-16 bg-white">
      <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className={sectionStyles.heading.h2}>
                "Starter" Sourdough Terms
              </h2>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Starter</dt>
                  <dd className="text-brand-purple-dark/80">A fermented mixture of flour and water that contains wild yeast and beneficial bacteria. It's used as a natural leavening agent instead of commercial yeast.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Feeding</dt>
                  <dd className="text-brand-purple-dark/80">The process of adding fresh flour and water to your starter to keep the microorganisms alive and active. Typically done using specific ratios (like 1:2:2).</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Discard</dt>
                  <dd className="text-brand-purple-dark/80">The portion of starter removed before feeding to maintain a manageable quantity. Can be used in various recipes rather than throwing away.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Hydration</dt>
                  <dd className="text-brand-purple-dark/80">The ratio of water to flour in your starter or dough, usually expressed as a percentage.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Active/Ripe</dt>
                  <dd className="text-brand-purple-dark/80">When your starter is most active, usually 4-8 hours after feeding, showing lots of bubbles and approximately doubling in size.</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className={sectionStyles.heading.h2}>
                Baking Terminology
              </h2>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Levain</dt>
                  <dd className="text-brand-purple-dark/80">A portion of starter specifically built for a recipe, sometimes with different flour types or ratios than your regular starter.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Lamination</dt>
                  <dd className="text-brand-purple-dark/80">A technique where dough is folded repeatedly to create layers, resulting in improved structure and texture. Often used for pastries but also beneficial for some sourdough breads.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Inclusions</dt>
                  <dd className="text-brand-purple-dark/80">Additional ingredients incorporated into bread dough such as nuts, seeds, dried fruits, herbs, or cheese that add flavor, texture, and visual appeal.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Autolyse</dt>
                  <dd className="text-brand-purple-dark/80">A rest period where flour and water are mixed and left to sit before adding starter and salt, allowing for better flour hydration and gluten development.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Bulk Fermentation</dt>
                  <dd className="text-brand-purple-dark/80">The first rise of the dough after mixing all ingredients, where the majority of fermentation happens, typically lasting 4-12 hours depending on temperature.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Stretch and Fold</dt>
                  <dd className="text-brand-purple-dark/80">A gentle dough handling technique that builds strength without excessive kneading, involving stretching the dough and folding it over itself periodically during bulk fermentation.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Scoring</dt>
                  <dd className="text-brand-purple-dark/80">Cutting the surface of bread dough before baking to control how it expands and creates an attractive pattern.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-purple-dark">Crumb</dt>
                  <dd className="text-brand-purple-dark/80">The interior texture of bread, which can be described as open (with large holes), tight, or anything in between.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 