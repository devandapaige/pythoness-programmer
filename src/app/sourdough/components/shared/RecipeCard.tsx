import { sectionStyles } from './Styles'

interface RecipeCardProps {
  title: string
  yield: string
  ingredients: string[]
  method: string[]
  isExternal?: boolean
  externalLink?: string
  externalNote?: string
}

export default function RecipeCard({
  title,
  yield: recipeYield,
  ingredients,
  method,
  isExternal,
  externalLink,
  externalNote,
}: RecipeCardProps) {
  return (
    <div className={sectionStyles.card}>
      <h3 className={sectionStyles.heading.h3}>{title}</h3>
      <p className="text-sm text-brand-purple-dark/60 mb-4">{recipeYield}</p>

      {!isExternal ? (
        <>
          <div className="mb-6">
            <h4 className={sectionStyles.heading.h4}>Ingredients:</h4>
            <ul className={sectionStyles.list.unordered}>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={sectionStyles.heading.h4}>Method:</h4>
            <ol className={sectionStyles.list.ordered}>
              {method.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </>
      ) : (
        <>
          <p className="mb-4">
            <a 
              href={externalLink}
              className={sectionStyles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View the recipe on Pantry Mama&apos;s website →
            </a>
          </p>
          {externalNote && (
            <p className="text-sm text-brand-purple-dark/80">
              {externalNote}
            </p>
          )}
        </>
      )}
    </div>
  )
} 