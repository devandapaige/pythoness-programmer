import { sectionStyles } from './shared/Styles'
import RecipeCard from './shared/RecipeCard'

const recipes = {
  lazyDoubleBatch: {
    title: "Lazy Double Batch of Sourdough Bread",
    yield: "Makes 2 loaves",
    ingredients: [
      "250g fed and risen starter",
      "750g water",
      "1000g bread flour (or all purpose flour, or mix)",
      "20g sea salt"
    ],
    method: [
      "Kneed starter, water, and flour for 2-3 minutes. The dough will be shaggy, trust the process.",
      "Let stand for 2 hours covered.",
      "Add salt and stretch and fold the dough over on itself for 3-4 minutes. The dough will start to become more formed together.",
      "Let stand for 2 hours covered.",
      "Divide the dough into 2, and form two loaves with tension.",
      "Cover the loaves and let them rest in the fridge for at least 1 hour to overnight.",
      "Form the resting loaves into loaves again. (This is the time to add any inclusions or fillings to the dough)",
      "Bake at 450ºF for 30min covered and 20min uncovered in a dutch oven, or loaf pan covered in foil."
    ]
  },
  buttermilkBiscuits: {
    title: "Discard - Buttermilk Biscuits",
    yield: "Makes 8-10",
    ingredients: [
      "270g all-purpose flour",
      "2 TB baking powder",
      "1 tsp salt",
      "1 tsp sugar",
      "3/4 cup + 1 TB of milk",
      "3/4 tsp white vinegar (added to milk to make \"buttermilk\")",
      "113g sourdough discard",
      "1 stick frozen butter - grated / shredded"
    ],
    method: [
      "Preheat oven to 425ºF",
      "Mix all ingredients except butter (and 1 TB of buttermilk) to form a dough.",
      "Add grated butter and roughly form dough.",
      "Laminate the dough by folding the dough over itself at least 3 times before cutting out biscuit shapes.",
      "Coat biscuit shapes with the reserve 1 TB of buttermilk.",
      "Bake for 18-20min."
    ]
  },
  hamburgerBuns: {
    title: "Discard - Hamburger Buns",
    yield: "",
    ingredients: [],
    method: [],
    isExternal: true,
    externalLink: "https://www.pantrymama.com/sourdough-discard-hamburger-buns/",
    externalNote: "💡 The Pantry Mama has a lot of other great recipes too, but you can add discard to anything to give it extra flavor."
  }
}

export default function RecipesSection() {
  return (
    <section id="recipes" className="py-16 bg-brand-purple-light">
      <div className={sectionStyles.container}>
        <div className={sectionStyles.content}>
          <h2 className={`${sectionStyles.heading.h2} text-left`}>
            My Go-To Recipes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <RecipeCard {...recipes.lazyDoubleBatch} />
            <RecipeCard {...recipes.buttermilkBiscuits} />
          </div>

          <div className="mt-8">
            <RecipeCard {...recipes.hamburgerBuns} />
          </div>
        </div>
      </div>
    </section>
  )
} 