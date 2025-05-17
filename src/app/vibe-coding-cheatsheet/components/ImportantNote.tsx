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
          When you&apos;re experiencing burnout or heightened stress, focus on the prompts in the &ldquo;Breaking Down Complex Tasks&rdquo; and &ldquo;Handling Overwhelm&rdquo; sections to reduce cognitive load. During periods of better focus, you might use more complex prompts from the &ldquo;Knowledge Building&rdquo; section to deepen your understanding.
        </p>
        <p className="text-sm text-brand-purple-dark/80">
          Let&apos;s explore the world of tech together! &ldquo;Code is poetry&rdquo; - WordPress. &ldquo;Talk is cheap. Show me the code.&rdquo; - Linus Torvalds. &ldquo;Any fool can write code that a computer can understand. Good programmers write code that humans can understand.&rdquo; - Martin Fowler. &ldquo;The best way to predict the future is to implement it.&rdquo; - David Heinemeier Hansson. &ldquo;The only way to learn a new programming language is by writing programs in it.&rdquo; - Dennis Ritchie.
        </p>
      </div>
    </div>
  )
} 