import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mindful Automation Resources',
  description: 'Download worksheets and resources for creating mindful automation systems that work with your brain.',
}

export default function MindfulAutomationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Mindful Automation Resources</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Mindful Automation Documentation</h2>
          <p className="mb-4">
            A comprehensive template for documenting your automation systems in a way that works with your brain.
          </p>
          <Link 
            href="/mindful-automation/Mindful Automation Documentation Template.pdf"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Download Template
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Error-Proofing Your Systems</h2>
          <p className="mb-4">
            Create resilient automation systems with clear documentation and effective error handling.
          </p>
          <Link 
            href="/mindful-automation/error-proofing-worksheet.pdf"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Download Worksheet
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <div className="grid gap-4">
          <Link 
            href="https://open.spotify.com/show/0VLZyZrD50Pk9JcyJL2AdX"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen on Spotify
          </Link>
          <Link 
            href="https://www.youtube.com/playlist?list=PLl8kW5pVKC-p8kzPChiNPoEHkfi_kR1LA"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </Link>
          <Link 
            href="https://pythoness.substack.com/"
            className="text-blue-600 hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read on Substack
          </Link>
        </div>
      </div>
    </div>
  )
} 