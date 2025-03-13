import Header from './components/Header'
import Introduction from './components/Introduction'
import ContentSection from './components/ContentSection'
import ImportantNote from './components/ImportantNote'
import CallToAction from './components/CallToAction'
import { sections } from './data/sections'

export const metadata = {
  title: 'Vibe Coding Cheatsheet | Pythoness Programmer',
  description: 'A comprehensive cheatsheet for neurodivergent developers to enhance their coding experience and productivity.',
}

export default function VibeCodingCheatsheet() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Header />
        <div className="prose prose-lg max-w-none">
          <Introduction />
          
          {sections.map((section, index) => (
            <ContentSection
              key={index}
              title={section.title}
              subsections={section.subsections}
              bgColor={section.bgColor}
            />
          ))}

          <ImportantNote />
          <CallToAction />
        </div>
      </div>
    </main>
  )
} 