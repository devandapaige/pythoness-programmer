import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import NewsletterSection from '../components/home/NewsletterSection'

// Define types for our content
interface NewsletterWeek {
  title: string;
  description: string;
  keyPoints: string[];
  url: string;
  weekNumber: number;
}

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: 'Back to Basics: Digital Organization & AI-Ready Workflows - The Pythoness Programmer',
  description: 'Master the fundamental tech skills that make AI tools actually useful. From digital organization to creative workflows that serve your brain.',
  openGraph: {
    title: 'Back to Basics: Digital Organization & AI-Ready Workflows',
    description: 'Build the foundation that makes AI tools actually useful instead of frustrating.',
    type: 'website',
    url: 'https://www.pythonessprogrammer.com/back-to-basics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Back to Basics: Digital Organization & AI-Ready Workflows',
    description: 'Build the foundation that makes AI tools actually useful instead of frustrating.',
  },
}

// Content data
const newsletterWeeks: NewsletterWeek[] = [
  {
    weekNumber: 1,
    title: 'From Digital Chaos to Creative Flow: Why Your Folders Matter',
    description: 'How your digital filing system affects AI effectiveness and creative workflow, plus the 3-Folder Rule that changed everything.',
    keyPoints: [
      'The AI-Organization Connection: Why AI tools need well-organized inputs',
      'The 3-Folder Rule: Active Projects, Reference Materials, and Archive',
      'Obsidian for interconnected note-taking and project organization',
      'The Wooden Snake\'s "observe before you judge" principle for digital patterns',
    ],
    url: 'https://newsletter.pythonessprogrammer.com/p/from-digital-chaos-to-creative-flow-why-your-folders-matter',
  },
  {
    weekNumber: 2,
    title: 'The Creative Workflow Revolution: How Organization Becomes Your Creative Superpower',
    description: 'Transform your digital organization from a chore into a creative advantage that amplifies your ideas and energy.',
    keyPoints: [
      'Workflow systems that support your creative process',
      'Building systems that adapt to your energy levels',
      'Creating sustainable creative practices',
      'The connection between organization and creative flow',
    ],
    url: 'https://newsletter.pythonessprogrammer.com/p/the-creative-workflow-revolution-how-organization-becomes-your-creative-superpower',
  },
  {
    weekNumber: 3,
    title: 'Data Flow: From Chaos to Conscious',
    description: 'Understanding how data moves through your creative work and building systems that make information work for you.',
    keyPoints: [
      'Understanding data flow in your creative work',
      'Building information systems that serve creativity',
      'The Wooden Snake\'s wisdom applied to data organization',
      'Creating conscious data practices',
    ],
    url: 'https://newsletter.pythonessprogrammer.com/p/data-flow-from-chaos-to-conscious',
  },
  {
    weekNumber: 4,
    title: 'Basic Automation That Serves Your Creativity: From Data Flow to AI Agents',
    description: 'Learn to build automation systems that enhance your creative process instead of overwhelming it.',
    keyPoints: [
      'Basic automation that serves your creativity',
      'From data flow to AI agents',
      'Building automation that respects your brain patterns',
      'Creating sustainable tech habits',
    ],
    url: 'https://newsletter.pythonessprogrammer.com/p/basic-automation-that-serves-your-creativity-from-data-flow-to-ai-agents',
  },
];

export default function BackToBasicsPage(): ReactNode {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Hero Section */}
          <section className="mb-6 mt-0 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-2 mt-0">
              Back to Basics: Digital Organization & AI-Ready Workflows
            </h1>
            <p className="text-xl md:text-2xl text-brand-cream font-light tracking-wide mb-4 mt-0">
              Master the fundamental tech skills that make AI tools actually useful instead of frustrating.
            </p>
            <Link 
              href="#newsletter-series"
              className="inline-block bg-brand-green-accent text-white px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors text-lg font-semibold shadow-lg mt-0"
              aria-label="Start exploring the Back to Basics series"
            >
              Explore the Series
            </Link>
          </section>

          {/* Video Section */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-display mb-2 text-brand-green-dark text-center mt-1">Watch the Back to Basics Video</h2>
            <p className="text-brand-green-dark text-center mb-2">A comprehensive overview of building AI-ready digital foundations that support your creativity.</p>
            <div className="w-full mt-0">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/Hu8ichcK31M" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                style={{borderRadius: '12px'}}
              />
            </div>
          </section>

          {/* Problem Statement Section */}
          <section className="mb-6 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-4xl font-display mb-4 text-brand-green-dark text-center tracking-tight mt-1">DOES THIS SOUND FAMILIAR?</h2>
            <p className="text-lg md:text-xl text-brand-green-dark mb-6 text-center max-w-3xl mx-auto">
              If you&apos;re struggling to make AI tools work for your creative process, you&apos;re not alone.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#ff39bc]/10 border-2 border-[#ff39bc] rounded-2xl p-6">
                <h3 className="text-2xl font-display text-black mb-3">Common AI Frustrations</h3>
                <ul className="text-black space-y-2">
                  <li>AI tools that can&apos;t find your files or understand your content</li>
                  <li>Digital chaos that makes AI more of a liability than an asset</li>
                  <li>Spending more time organizing than creating</li>
                  <li>AI suggestions that don&apos;t match your actual workflow</li>
                  <li>Tech systems that fight against your creative process</li>
                </ul>
              </div>
              
              <div className="bg-[#32D24D]/10 border-2 border-[#32D24D] rounded-2xl p-6">
                <h3 className="text-2xl font-display text-black mb-3">AI-Ready Solution</h3>
                <ul className="text-black space-y-2">
                  <li>Digital organization that makes AI tools actually useful</li>
                  <li>Workflow systems that support your creative process</li>
                  <li>Data flow that serves your creativity</li>
                  <li>Automation that enhances instead of overwhelms</li>
                  <li>Tech foundations that grow with your practice</li>
                </ul>
              </div>
            </div>
          </section>

          {/* The Wooden Snake's Wisdom Section */}
          <section className="mb-6 mt-0 bg-gradient-to-br from-brand-purple-dark/30 to-brand-green-accent/30 border-2 border-brand-purple-dark rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-3xl font-display mb-4 text-white text-center">THE WOODEN SNAKE&apos;S WISDOM</h2>
            <p className="text-lg text-white mb-6 text-center max-w-2xl mx-auto">
              Building on August&apos;s AI myth-busting foundation, we&apos;re applying the Wooden Snake&apos;s wisdom about 
              <strong className="text-brand-green-accent"> patience, adaptability, and quiet transformation</strong> to your digital organization.
            </p>
            <p className="text-sm text-white/80 mb-6 text-center max-w-2xl mx-auto">
              <em>Learn more about the Wooden Snake&apos;s significance in 2025 and how it guides our approach to technology and creativity in our </em>
              <Link 
                href="https://newsletter.pythonessprogrammer.com/p/lunar-new-year-2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-green-accent hover:text-brand-green-accent/80 underline"
              >
                Lunar New Year edition
              </Link>
              <em>.</em>
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-brand-purple-dark mb-2">Observe</h3>
                <p className="text-brand-purple-dark text-sm">Understand your current digital patterns before implementing new systems.</p>
              </div>
              
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-brand-purple-dark mb-2">Adapt</h3>
                <p className="text-brand-purple-dark text-sm">Find systems that work with your unique brain patterns and energy cycles.</p>
              </div>
              
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-brand-purple-dark mb-2">Transform</h3>
                <p className="text-brand-purple-dark text-sm">Create quiet, sustainable changes that support your creative flow.</p>
              </div>
              
              <div className="bg-white/90 rounded-lg p-4">
                <h3 className="font-display text-brand-purple-dark mb-2">Prepare</h3>
                <p className="text-brand-purple-dark text-sm">Build foundations that make AI tools actually useful instead of frustrating.</p>
              </div>
            </div>
          </section>

          {/* Week 1: Digital Organization */}
          <section id="week-1" className="mb-8 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center mb-6">
              <span className="bg-brand-green-accent text-white text-sm font-bold px-3 py-1 rounded-full mr-4 whitespace-nowrap">
                Week 1
              </span>
              <h2 className="text-3xl font-display text-brand-green-dark">From Digital Chaos to Creative Flow: Why Your Folders Matter</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-brand-green-dark">
              <p className="text-xl mb-6">
                <strong>The AI-Organization Connection:</strong> AI tools are only as effective as your data organization. 
                When you ask AI to help you with a project, it needs to access your files, understand your content, 
                and work with your existing systems. If your digital life is a mess, AI becomes more of a liability than an asset.
              </p>

              <h3 className="text-2xl font-display text-brand-green-dark mb-4">The 3-Folder Rule That Changed Everything</h3>
              <p className="mb-6">
                This simple framework transformed my digital life and made AI tools actually useful. Instead of complex systems 
                that overwhelm, this creates simple, sustainable systems that grow with you.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#ff39bc]/10 border-2 border-[#ff39bc] rounded-lg p-6">
                  <h4 className="text-xl font-display text-black mb-3">Active Projects</h4>
                  <p className="text-black mb-4">Everything you&apos;re currently working on with clear naming: &quot;Project Name - Start Date&quot;</p>
                  <ul className="text-black text-sm space-y-2">
                    <li>• Current deadlines and deliverables</li>
                    <li>• Subfolders for different project phases</li>
                    <li>• Easy to find, easy to share with AI</li>
                    <li>• Clear naming conventions help AI understand your work</li>
                  </ul>
                </div>

                <div className="bg-[#D8B9F7]/10 border-2 border-[#D8B9F7] rounded-lg p-6">
                  <h4 className="text-xl font-display text-black mb-3">Reference Materials</h4>
                  <p className="text-black mb-4">Templates, resources, and inspiration organized by category, not by project</p>
                  <ul className="text-black text-sm space-y-2">
                    <li>• Consistent naming conventions</li>
                    <li>• AI can easily access and suggest from this</li>
                    <li>• Organized by category, not by project</li>
                    <li>• Builds your knowledge base over time</li>
                  </ul>
                </div>

                <div className="bg-[#32D24D]/10 border-2 border-[#32D24D] rounded-lg p-6">
                  <h4 className="text-xl font-display text-black mb-3">Archive</h4>
                  <p className="text-black mb-4">Completed projects and old materials. Still accessible but not cluttering your active space</p>
                  <ul className="text-black text-sm space-y-2">
                    <li>• Organized by year and category</li>
                    <li>• AI can learn from your past work</li>
                    <li>• The secret to mental space</li>
                    <li>• Preserves your creative history</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-display text-brand-green-dark mb-4">The Wooden Snake&apos;s Organization Method</h3>
              <p className="mb-4">
                Instead of jumping into complex systems, observe your current patterns and adapt gradually. The Snake teaches us that 
                <strong> true power comes from patient preparation, not rushing into action.</strong>
              </p>

              <div className="bg-brand-green-accent/20 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-brand-green-dark mb-3">Step-by-Step Implementation:</h4>
                <ol className="list-decimal pl-5 text-brand-green-dark space-y-2">
                  <li><strong>Create Your Three Main Folders</strong> - Don&apos;t overthink it, just start</li>
                  <li><strong>Move Your Current Files</strong> - Use clear, descriptive names with &quot;Project Name - Date&quot; format</li>
                  <li><strong>Establish Naming Conventions</strong> - Be consistent, include dates, avoid special characters</li>
                  <li><strong>Maintain the System</strong> - File things immediately, review monthly, keep it simple</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://newsletter.pythonessprogrammer.com/p/from-digital-chaos-to-creative-flow-why-your-folders-matter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold text-center"
                >
                  Read Full Newsletter
                </Link>
                <div className="bg-brand-purple-dark/20 text-brand-purple-dark px-6 py-3 rounded-lg font-semibold text-center flex items-center justify-center">
                  Foundation Week
                </div>
              </div>
            </div>
          </section>

          {/* Week 2: Creative Workflow Revolution */}
          <section id="week-2" className="mb-8 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center mb-6">
              <span className="bg-brand-green-accent text-white text-sm font-bold px-3 py-1 rounded-full mr-4 whitespace-nowrap">
                Week 2
              </span>
              <h2 className="text-3xl font-display text-brand-green-dark">The Creative Workflow Revolution: How Organization Becomes Your Creative Superpower</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-brand-green-dark">
              <p className="text-xl mb-6">
                <strong>The Creative Application:</strong> Digital organization isn&apos;t just about being neat—it&apos;s about creating 
                systems that support your creative flow. When your digital foundation is solid, your creative energy can flow freely 
                instead of getting stuck in the chaos of disorganization.
              </p>

              <h3 className="text-2xl font-display text-brand-green-dark mb-4">Why Organization Amplifies Creativity</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#ff39bc]/10 border-2 border-[#ff39bc] rounded-lg p-6">
                  <h4 className="text-xl font-display text-black mb-3">Without Organization</h4>
                  <ul className="text-black space-y-2">
                    <li>• Creative momentum shattered by missing files</li>
                    <li>• Ideas lost in a sea of disorganized content</li>
                    <li>• Energy drain from constant searching</li>
                    <li>• AI tools can&apos;t help effectively</li>
                    <li>• Frustration kills creative flow</li>
                  </ul>
                </div>
                
                <div className="bg-[#32D24D]/10 border-2 border-[#32D24D] rounded-lg p-6">
                  <h4 className="text-xl font-display text-black mb-3">With Organization</h4>
                  <ul className="text-black space-y-2">
                    <li>• Ideas flow more smoothly when systems support you</li>
                    <li>• Less cognitive load means more creative energy</li>
                    <li>• AI tools can jump right in and help</li>
                    <li>• Systems that work on your best and worst days</li>
                    <li>• Creative energy flows freely</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-display text-brand-green-dark mb-4">Building Workflow Systems That Support Your Creative Process</h3>
              <p className="mb-6">
                The goal isn&apos;t to have the most sophisticated setup—it&apos;s to have systems that support your creativity 
                and don&apos;t drain your energy. Sometimes that means keeping the old tools that work, even when you&apos;re 
                ready to let go of the brand identity they represent.
              </p>

              <div className="bg-brand-green-accent/20 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-brand-green-dark mb-3">Creative Workflow Principles:</h4>
                <ul className="list-disc pl-5 text-brand-green-dark space-y-2">
                  <li><strong>Honor what already works</strong> - If it&apos;s not broken, don&apos;t fix it</li>
                  <li><strong>Trust your intuitive guidance</strong> - Your creative instincts matter</li>
                  <li><strong>Focus on practical solutions</strong> - Not perfect systems</li>
                  <li><strong>Share the wisdom of &quot;good enough&quot;</strong> - Sustainable over shiny</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://newsletter.pythonessprogrammer.com/p/the-creative-workflow-revolution-how-organization-becomes-your-creative-superpower"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold text-center"
                >
                  Read Full Newsletter
                </Link>
                <div className="bg-brand-purple-dark/20 text-brand-purple-dark px-6 py-3 rounded-lg font-semibold text-center flex items-center justify-center">
                  Workflow Week
                </div>
              </div>
            </div>
          </section>

          {/* Week 3: Data Flow */}
          <section id="week-3" className="mb-8 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center mb-6">
              <span className="bg-brand-green-accent text-white text-sm font-bold px-3 py-1 rounded-full mr-4 whitespace-nowrap">
                Week 3
              </span>
              <h2 className="text-3xl font-display text-brand-green-dark">Data Flow: From Chaos to Conscious</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-brand-green-dark">
              <p className="text-xl mb-6">
                <strong>Understanding Data Flow:</strong> How information moves through your creative work and building systems 
                that make data work for you instead of against you. This is where the Wooden Snake&apos;s wisdom about 
                <strong> patience and adaptability</strong> becomes crucial for your information management.
              </p>

              <h3 className="text-2xl font-display text-brand-green-dark mb-4">The Information Flow Challenge</h3>
              <p className="mb-6">
                Most creators struggle with information overload, scattered data, and systems that don&apos;t serve their 
                creative process. The key is understanding how data flows through your work and creating conscious practices 
                that support your creativity.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#ff39bc]/10 border-2 border-[#ff39bc] rounded-lg p-6">
                  <h4 className="text-xl font-display text-black mb-3">Chaotic Data Flow</h4>
                  <ul className="text-black space-y-2">
                    <li>• Information scattered across multiple platforms</li>
                    <li>• No clear system for capturing ideas</li>
                    <li>• Duplicate data and version confusion</li>
                    <li>• AI tools can&apos;t access your information</li>
                    <li>• Overwhelm from information overload</li>
                  </ul>
                </div>
                
                <div className="bg-[#32D24D]/10 border-2 border-[#32D24D] rounded-lg p-6">
                  <h4 className="text-xl font-display text-black mb-3">Conscious Data Flow</h4>
                  <ul className="text-black space-y-2">
                    <li>• Clear information capture systems</li>
                    <li>• Single source of truth for each piece of data</li>
                    <li>• AI-friendly data organization</li>
                    <li>• Information that serves your creativity</li>
                    <li>• Sustainable data management practices</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-display text-brand-green-dark mb-4">Building Information Systems That Serve Creativity</h3>
              <p className="mb-6">
                The goal is to create data flow that amplifies your creative process instead of creating friction. 
                This means understanding your information patterns and building systems that work with your brain, not against it.
              </p>

              <div className="bg-brand-green-accent/20 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-brand-green-dark mb-3">Data Flow Principles:</h4>
                <ul className="list-disc pl-5 text-brand-green-dark space-y-2">
                  <li><strong>Observe your information patterns</strong> - How do you naturally capture and use information?</li>
                  <li><strong>Create single sources of truth</strong> - One place for each piece of information</li>
                  <li><strong>Build AI-friendly systems</strong> - Make it easy for AI to access and understand your data</li>
                  <li><strong>Design for your energy levels</strong> - Systems that work when you&apos;re high energy and low energy</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://newsletter.pythonessprogrammer.com/p/data-flow-from-chaos-to-conscious"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold text-center"
                >
                  Read Full Newsletter
                </Link>
                <div className="bg-brand-purple-dark/20 text-brand-purple-dark px-6 py-3 rounded-lg font-semibold text-center flex items-center justify-center">
                  Data Week
                </div>
              </div>
            </div>
          </section>

          {/* Week 4: Basic Automation */}
          <section id="week-4" className="mb-8 mt-0 bg-white/95 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center mb-6">
              <span className="bg-brand-green-accent text-white text-sm font-bold px-3 py-1 rounded-full mr-4 whitespace-nowrap">
                Week 4
              </span>
              <h2 className="text-3xl font-display text-brand-green-dark">Basic Automation That Serves Your Creativity: From Data Flow to AI Agents</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-brand-green-dark">
              <p className="text-xl mb-6">
                <strong>Automation That Enhances Creativity:</strong> Learn to build automation systems that enhance your 
                creative process instead of overwhelming it. The key is creating automation that respects your brain patterns 
                and serves your creative goals.
              </p>

              <h3 className="text-2xl font-display text-brand-green-dark mb-4">Energy-Aware Automation</h3>
              <p className="mb-6">
                Build automation that adapts to your energy levels, not the other way around. This creates respectful 
                automation that works with your natural rhythms and creative cycles.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-[#ff39bc]/10 border-2 border-[#ff39bc] rounded-lg p-6">
                  <h4 className="text-2xl font-display text-black mb-4">High Energy Days</h4>
                  <p className="text-black mb-4">
                    Tackle complex automation projects and build new systems. This is when you create the foundation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-[#ff39bc]/20 text-black px-3 py-1 rounded-full text-sm">Build complex workflows</span>
                    <span className="bg-[#ff39bc]/20 text-black px-3 py-1 rounded-full text-sm">Create new automation systems</span>
                    <span className="bg-[#ff39bc]/20 text-black px-3 py-1 rounded-full text-sm">Design new processes</span>
                  </div>
                </div>

                <div className="bg-[#D8B9F7]/10 border-2 border-[#D8B9F7] rounded-lg p-6">
                  <h4 className="text-2xl font-display text-black mb-4">Medium Energy Days</h4>
                  <p className="text-black mb-4">
                    Focus on routine automation and maintenance. Keep systems running smoothly.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-[#D8B9F7]/20 text-black px-3 py-1 rounded-full text-sm">Use simple shortcuts</span>
                    <span className="bg-[#D8B9F7]/20 text-black px-3 py-1 rounded-full text-sm">Run simple scripts</span>
                    <span className="bg-[#D8B9F7]/20 text-black px-3 py-1 rounded-full text-sm">Maintain existing systems</span>
                  </div>
                </div>

                <div className="bg-[#32D24D]/10 border-2 border-[#32D24D] rounded-lg p-6">
                  <h4 className="text-2xl font-display text-black mb-4">Low Energy Days</h4>
                  <p className="text-black mb-4">
                    Lean on passive systems and gentle organization. Recovery is just as important as creation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-[#32D24D]/20 text-black px-3 py-1 rounded-full text-sm">Use momentum dashboards</span>
                    <span className="bg-[#32D24D]/20 text-black px-3 py-1 rounded-full text-sm">Tidy up archives</span>
                    <span className="bg-[#32D24D]/20 text-black px-3 py-1 rounded-full text-sm">Review and reflect</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-display text-brand-green-dark mb-4">Building Sustainable Tech Habits</h3>
              <p className="mb-6">
                Create flexible routines that support you every day, not just during short-term sprints. The goal is 
                to build systems that grow with your creative practice and prevent overwhelm.
              </p>

              <div className="bg-brand-green-accent/20 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-brand-green-dark mb-3">Sustainable Automation Principles:</h4>
                <ul className="list-disc pl-5 text-brand-green-dark space-y-2">
                  <li><strong>Gentle consistency framework</strong> - Small, sustainable changes over time</li>
                  <li><strong>15-minute weekly check-ins</strong> - Regular maintenance without overwhelm</li>
                  <li><strong>Honor natural creative cycles</strong> - Work with your energy, not against it</li>
                  <li><strong>Build in recovery time</strong> - Systems that support rest and reflection</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://newsletter.pythonessprogrammer.com/p/basic-automation-that-serves-your-creativity-from-data-flow-to-ai-agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-semibold text-center"
                >
                  Read Full Newsletter
                </Link>
                <div className="bg-brand-purple-dark/20 text-brand-purple-dark px-6 py-3 rounded-lg font-semibold text-center flex items-center justify-center">
                  Automation Week
                </div>
              </div>
            </div>
          </section>

          {/* The 3-Folder Rule Quick Reference */}
          <section className="mb-6 mt-0 bg-white/90 border border-brand-green-accent rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-3xl font-display mb-4 text-brand-green-dark text-center mt-1">THE 3-FOLDER RULE QUICK REFERENCE</h2>
            <p className="text-lg text-brand-green-dark mb-6 text-center">
              The simple framework that transforms your digital organization and makes AI tools actually useful.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-[#ff39bc]/10 border-2 border-[#ff39bc] rounded-lg p-6">
                <h3 className="text-2xl font-display mb-4 text-black mt-1">Active Projects</h3>
                <p className="text-black mb-4">
                  Everything you&apos;re currently working on. Clear naming: &quot;Project Name - Start Date&quot;
                </p>
                <ul className="text-black text-sm space-y-1">
                  <li>• Current deadlines and deliverables</li>
                  <li>• Subfolders for different project phases</li>
                  <li>• Easy to find, easy to share with AI</li>
                </ul>
              </div>

              <div className="bg-[#D8B9F7]/10 border-2 border-[#D8B9F7] rounded-lg p-6">
                <h3 className="text-2xl font-display mb-4 text-black mt-1">Reference Materials</h3>
                <p className="text-black mb-4">
                  Templates, resources, and inspiration organized by category, not by project.
                </p>
                <ul className="text-black text-sm space-y-1">
                  <li>• Consistent naming conventions</li>
                  <li>• AI can easily access and suggest from this</li>
                  <li>• Organized by category, not by project</li>
                </ul>
              </div>

              <div className="bg-[#32D24D]/10 border-2 border-[#32D24D] rounded-lg p-6">
                <h3 className="text-2xl font-display mb-4 text-black mt-1">Archive</h3>
                <p className="text-black mb-4">
                  Completed projects and old materials. Still accessible but not cluttering your active space.
                </p>
                <ul className="text-black text-sm space-y-1">
                  <li>• Organized by year and category</li>
                  <li>• AI can learn from your past work</li>
                  <li>• The secret to mental space</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Quick Start Section */}
          <section className="mb-6 mt-0 bg-gradient-to-br from-brand-purple-dark/30 to-brand-green-accent/30 border-2 border-brand-green-accent rounded-3xl p-6 md:p-8 shadow-2xl text-center">
            <h2 className="text-3xl font-display mb-6 text-white">READY TO START?</h2>
            <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
              Begin with one small, manageable step. Here are three simple ways to get started with AI-ready organization:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="font-display text-brand-green-dark mb-2">Create Your Three Folders</h3>
                <p className="text-brand-green-dark text-sm">Set up Active Projects, Reference Materials, and Archive folders. Start simple and let them grow with you.</p>
              </div>
              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="font-display text-brand-green-dark mb-2">Implement Naming Conventions</h3>
                <p className="text-brand-green-dark text-sm">Use consistent, descriptive names like &quot;Project Name - Date&quot; to help AI understand your content.</p>
              </div>
              <div className="bg-white/90 rounded-lg p-6">
                <h3 className="font-display text-brand-green-dark mb-2">Start with One Project</h3>
                <p className="text-brand-green-dark text-sm">Pick one current project and organize it completely. Notice how it feels to have everything in its place.</p>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="mt-12">
            <NewsletterSection bgColor="bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark" />
          </section>

          {/* Back to Resources Link */}
          <section className="mt-12 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center text-white hover:text-brand-cream transition-colors"
              aria-label="Back to all resources"
            >
              <span className="mr-2">←</span>
              Back to All Resources
            </Link>
          </section>

          {/* Update Banner */}
          <div className="mt-12 bg-brand-green-accent/20 text-white text-center py-2 px-4 rounded-lg" role="status" aria-label="Content update status">
            <p className="text-sm">✨ Last updated: September 2025 ✨</p>
          </div>
        </div>
      </div>
    </main>
  )
}
