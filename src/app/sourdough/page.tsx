import { Metadata } from 'next'
import HeroSection from './components/HeroSection'
import StarterGuideSection from './components/StarterGuideSection'
import RecipesSection from './components/RecipesSection'
import ToolsAndResourcesSection from './components/ToolsAndResourcesSection'
import TerminologySection from './components/TerminologySection'

export const metadata: Metadata = {
  title: 'Sourdough Resources | Pythoness',
  description: 'A comprehensive guide to sourdough baking, including recipes, techniques, and troubleshooting tips.',
}

export default function SourdoughPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StarterGuideSection />
      <TerminologySection />
      <ToolsAndResourcesSection />
      <RecipesSection />
    </main>
  )
}
