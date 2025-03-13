import Link from 'next/link'
import CopyablePrompt from './CopyablePrompt'

export const metadata = {
  title: 'Vibe Coding Cheatsheet | Pythoness Programmer',
  description: 'A comprehensive cheatsheet for neurodivergent developers to enhance their coding experience and productivity.',
}

export default function VibeCodingCheatsheet() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-brand-green-dark via-brand-purple-dark to-brand-green-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            href="/"
            className="text-white hover:text-brand-green-accent transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="font-display font-normal text-4xl md:text-5xl text-white mb-6">
          Vibe Coding Cheatsheet for Neurodivergent Developers
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8 border border-white/20">
            <p className="text-white mb-4">
              This reference provides robust prompts designed for developers who may experience ADHD, autism, giftedness, CPTSD, or burnout. These prompts help maintain flow state while coding and accommodate various cognitive styles.
            </p>
            <p className="text-white/90 text-sm">
              <span className="font-medium text-brand-cream">Pro tip:</span> Simply click on any prompt to copy it to your clipboard, ready to paste into your AI chat. Each prompt is designed to be clear and actionable, helping you get the support you need.
            </p>
          </div>

          <section className="mb-12 bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-display font-normal text-brand-cream mb-4">Project Setup & Architecture</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Initial Project Structure</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Create a clear, organized [React/Next.js/Node.js] project structure with visual separation between components" />
                  <CopyablePrompt text="Design a predictable architecture for [feature] with consistent patterns I can follow throughout" />
                  <CopyablePrompt text="Set up a TypeScript project with helpful error messages and autocomplete support" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Database & API Design</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Design a database schema for [feature] with clear documentation for each relationship" />
                  <CopyablePrompt text="Create a RESTful API with consistent naming patterns and predictable responses" />
                  <CopyablePrompt text="Set up GraphQL schema with strong typing that will help prevent errors later" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Authentication & Security</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Implement JWT authentication with step-by-step error handling for each possible failure point" />
                  <CopyablePrompt text="Add input validation that provides clear, specific error messages for users" />
                  <CopyablePrompt text="Create a role-based access system with visual indicators of current permission level" />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-brand-purple-dark/30 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-display font-normal text-brand-cream mb-4">Flow State Maintenance</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Breaking Down Complex Tasks</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Let's implement this feature in small, completable chunks that each take less than 30 minutes" />
                  <CopyablePrompt text="Create a minimal working version of [feature], then we'll enhance it one capability at a time" />
                  <CopyablePrompt text="Help me identify the smallest possible first step for implementing [feature]" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Handling Overwhelm</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Simplify this code to reduce cognitive load while maintaining functionality" />
                  <CopyablePrompt text="Refactor this function into smaller, single-purpose functions with descriptive names" />
                  <CopyablePrompt text="Create a visual map of how these components interact so I can see the whole system" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Focus Assistance</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Add clear comments that will help me remember what this code does when I return to it" />
                  <CopyablePrompt text="Generate a checklist of remaining tasks for this feature so I can track progress" />
                  <CopyablePrompt text="Help me create a time-boxed plan for implementing this feature in manageable sessions" />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-display font-normal text-brand-cream mb-4">Frontend Development</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Component Design</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Create a visually structured component with clear separation between sections" />
                  <CopyablePrompt text="Implement this UI with consistent spacing and alignment that reduces visual noise" />
                  <CopyablePrompt text="Design a responsive layout that maintains visual stability across screen sizes" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">State Management</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Set up state management with clear visual feedback for each state change" />
                  <CopyablePrompt text="Implement form validation that provides immediate, specific feedback" />
                  <CopyablePrompt text="Create a custom hook that handles loading states with visual indicators" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Accessibility Focus</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Add proper keyboard navigation with visual focus indicators" />
                  <CopyablePrompt text="Ensure this component works with screen readers and has appropriate ARIA attributes" />
                  <CopyablePrompt text="Implement color contrast that meets WCAG standards and reduces visual strain" />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-brand-purple-dark/30 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-display font-normal text-brand-cream mb-4">Backend Development</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">API Implementation</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Create middleware that provides detailed, helpful error messages" />
                  <CopyablePrompt text="Implement pagination with clear visual indicators of current position" />
                  <CopyablePrompt text="Set up logging that makes it easy to trace request flow through the system" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Error Handling</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Add comprehensive error handling with specific, actionable error messages" />
                  <CopyablePrompt text="Implement graceful fallbacks for each potential failure point" />
                  <CopyablePrompt text="Create a consistent error response format that makes debugging easier" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Testing & Validation</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Generate tests that verify each step of this process works independently" />
                  <CopyablePrompt text="Implement input validation with clear feedback about what's wrong and how to fix it" />
                  <CopyablePrompt text="Set up automated tests that can run in small batches to avoid overwhelming output" />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-display font-normal text-brand-cream mb-4">Debugging Assistance</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Error Analysis</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="This error occurs when [description]. Break down what's happening step by step" />
                  <CopyablePrompt text="Explain this error message in plain language and suggest possible solutions" />
                  <CopyablePrompt text="Help me trace the flow of data through this function to find where it's breaking" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Visual Debugging</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Add console.log statements at key points with visually distinct formatting" />
                  <CopyablePrompt text="Generate a visual representation of this data structure so I can understand it better" />
                  <CopyablePrompt text="Create a flowchart of this algorithm to help me see where the logic is failing" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Pattern Recognition</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Identify any patterns in these errors that might indicate a systemic issue" />
                  <CopyablePrompt text="Compare this working code with the broken code and highlight key differences" />
                  <CopyablePrompt text="Help me understand the underlying principle that's causing these similar bugs" />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-brand-purple-dark/30 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-display font-normal text-brand-cream mb-4">Reflection & Learning</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Knowledge Building</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Explain how this [concept/pattern] works using analogies and visual examples" />
                  <CopyablePrompt text="Break down this complex concept into smaller, more digestible parts" />
                  <CopyablePrompt text="Help me understand this implementation by connecting it to concepts I already know" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">Documentation</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Create clear documentation for this function with examples of inputs and outputs" />
                  <CopyablePrompt text="Generate a README that explains this project's structure and how components relate" />
                  <CopyablePrompt text="Document this API with examples that show exactly how to use each endpoint" />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl font-display font-normal text-brand-cream mb-4">Accommodating Different Cognitive Styles</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">For Processing Differences</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Explain this again using a different approach - visual/spatial rather than sequential" />
                  <CopyablePrompt text="Break this down into concrete steps rather than abstract concepts" />
                  <CopyablePrompt text="Help me understand this by connecting it to a real-world example I can visualize" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">For Executive Function Support</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Create a checklist for implementing this feature with clear stopping points" />
                  <CopyablePrompt text="Help me prioritize these tasks based on dependencies and complexity" />
                  <CopyablePrompt text="Set up a structured approach for this task with clear transitions between steps" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-normal text-brand-cream mb-3">For Sensory Considerations</h3>
                <div className="space-y-3">
                  <CopyablePrompt text="Simplify this UI to reduce visual complexity while maintaining functionality" />
                  <CopyablePrompt text="Refactor this code to improve readability with consistent formatting and spacing" />
                  <CopyablePrompt text="Create a color scheme that reduces eye strain and maintains clear visual hierarchy" />
                </div>
              </div>
            </div>
          </section>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mt-8 border border-white/20">
            <h2 className="text-2xl font-display font-normal text-brand-cream mb-4">Important Note</h2>
            <p className="mb-4 text-white">
              Remember that these prompts are starting points. Adjust them based on your specific needs and cognitive style. The goal is to create a coding environment that works with your brain rather than against it, allowing you to leverage your unique strengths while providing support for challenges.
            </p>
            <p className="mb-4 text-white">
              When you're experiencing burnout or heightened stress, focus on the prompts in the "Breaking Down Complex Tasks" and "Handling Overwhelm" sections to reduce cognitive load. During periods of better focus, you might use more complex prompts from the "Knowledge Building" section to deepen your understanding.
            </p>
          </div>

          <div className="bg-brand-green-dark p-6 rounded-lg mt-8 border border-white/20">
            <h2 className="text-2xl font-display font-normal text-brand-cream mb-4">Need More Support?</h2>
            <p className="mb-4 text-white">
              Ready to level up your coding experience? Book a 30-minute clarity call where we can discuss your specific challenges and create a personalized strategy for your development journey.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-display text-brand-cream">$40</span>
              <span className="text-white/80">30 minutes</span>
            </div>
            <Link 
              href="https://cal.com/pythoness/tech30"
              target="_blank"
              className="inline-block bg-brand-green-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-brand-green-accent/20"
            >
              Book Your Clarity Call
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 