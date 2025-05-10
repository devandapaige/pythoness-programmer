import HeroSection from './components/home/HeroSection'
import AboutSection from './components/home/AboutSection'
import ServicesSection from './components/home/ServicesSection'
import WorkSection from './components/home/WorkSection'
import ContactSection from './components/home/ContactSection'
import NewsletterSection from './components/home/NewsletterSection'

export const metadata = {
  title: 'Pythoness Programmer | Tech Coaching & Development',
  description: 'Tech coaching, web development, and digital crafts for conscious creators and business owners.',
  other: {
    'p:domain_verify': '18888270799e128d4d49644962be5ab6'
  }
}

export default async function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
      <NewsletterSection />
    </main>
  )
}
