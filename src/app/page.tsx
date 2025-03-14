import HeroSection from './components/home/HeroSection'
import ProcessSection from './components/home/ProcessSection'
import ServicesSection from './components/home/ServicesSection'
import WorkSection from './components/home/WorkSection'
import CraftSection from './components/home/CraftSection'
import ContactSection from './components/home/ContactSection'
import NewsletterSection from './components/home/NewsletterSection'

export const metadata = {
  title: 'Pythoness Programmer | Tech Coaching & Development',
  description: 'Tech coaching, web development, and digital crafts for conscious creators and business owners.',
}

export default async function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <ServicesSection />
      <WorkSection />
      <CraftSection />
      <ContactSection />
      <NewsletterSection />
    </main>
  )
}
