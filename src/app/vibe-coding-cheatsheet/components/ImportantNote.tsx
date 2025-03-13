export default function ImportantNote() {
  return (
    <div 
      className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mt-8 border border-white/20"
      role="region"
      aria-labelledby="important-note-title"
    >
      <h2 
        id="important-note-title"
        className="text-2xl font-display font-normal text-brand-cream mb-4"
      >
        Important Note
      </h2>
      <div role="contentinfo">
        <p className="mb-4 text-white">
          Remember that these prompts are starting points. Adjust them based on your specific needs and cognitive style. The goal is to create a coding environment that works with your brain rather than against it, allowing you to leverage your unique strengths while providing support for challenges.
        </p>
        <p className="mb-4 text-white">
          When you're experiencing burnout or heightened stress, focus on the prompts in the "Breaking Down Complex Tasks" and "Handling Overwhelm" sections to reduce cognitive load. During periods of better focus, you might use more complex prompts from the "Knowledge Building" section to deepen your understanding.
        </p>
      </div>
    </div>
  )
} 