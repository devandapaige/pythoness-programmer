'use client'

import { useState } from 'react'
import { logError } from '@/lib/errorHandling'

export default function CopyablePrompt({ text }: { text: string }) {
  const [showCopied, setShowCopied] = useState(false)
  const [showError, setShowError] = useState(false)
  const cleanText = text.replace(/^"|"$/g, '')
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanText)
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 2000) // Hide after 2 seconds
    } catch (err) {
      logError('Failed to copy text to clipboard', err, { 
        textPreview: cleanText.slice(0, 20) 
      })
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
  }

  return (
    <div className="relative">
      <div 
        onClick={handleCopy}
        className="bg-white/50 p-3 rounded-lg cursor-pointer hover:bg-white/70 transition-colors duration-200 border border-brand-purple-accent/20 focus:outline-none focus:ring-2 focus:ring-brand-green-accent focus:ring-offset-2"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleCopy()
          }
        }}
        aria-label={`Copy prompt: ${cleanText}`}
        aria-live="polite"
      >
        {cleanText}
      </div>
      {showCopied && (
        <div 
          className="absolute top-0 right-0 -mt-2 -mr-2 px-2 py-1 bg-brand-purple-dark text-white text-sm rounded-md shadow-lg animate-fade-in-out"
          role="status"
          aria-live="polite"
        >
          Copied!
        </div>
      )}
      {showError && (
        <div 
          className="absolute top-0 right-0 -mt-2 -mr-2 px-2 py-1 bg-red-600 text-white text-sm rounded-md shadow-lg animate-fade-in-out"
          role="alert"
          aria-live="assertive"
        >
          Failed to copy!
        </div>
      )}
    </div>
  )
} 