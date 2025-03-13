'use client'

import { useState } from 'react'

export default function CopyablePrompt({ text }: { text: string }) {
  const [showCopied, setShowCopied] = useState(false)
  const cleanText = text.replace(/^"|"$/g, '')
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanText)
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 2000) // Hide after 2 seconds
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <div className="relative">
      <div 
        onClick={handleCopy}
        className="bg-white/50 p-3 rounded-lg cursor-pointer hover:bg-white/70 transition-colors duration-200 border border-brand-purple-accent/20"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
        title="Click to copy"
      >
        {cleanText}
      </div>
      {showCopied && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 px-2 py-1 bg-brand-purple-dark text-white text-sm rounded-md shadow-lg animate-fade-in-out">
          Copied!
        </div>
      )}
    </div>
  )
} 