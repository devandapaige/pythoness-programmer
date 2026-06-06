'use client'

import { FormEvent, useState } from 'react'

import { userMessages } from '@/data/userMessages'

type NewsletterSubscribeFormProps = {
  source?: string
  className?: string
  /** Light card (default) or newsletter dark-green page */
  variant?: 'light' | 'onDark'
}

export function NewsletterSubscribeForm({
  source = 'website',
  className = '',
  variant = 'light',
}: NewsletterSubscribeFormProps) {
  const isOnDark = variant === 'onDark'
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  )
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })

      const data = (await response.json()) as {
        success?: boolean
        message?: string
        error?: string
      }

      if (!response.ok) {
        setStatus('error')
        setMessage(data.error ?? userMessages.newsletter.signupFailed)
        return
      }

      setStatus('success')
      setMessage(data.message ?? userMessages.newsletter.success)
      setEmail('')
    } catch {
      setStatus('error')
      setMessage(userMessages.newsletter.network)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
      aria-label="Newsletter signup"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={status === 'loading'}
          aria-invalid={status === 'error'}
          aria-describedby={message ? 'newsletter-form-feedback' : undefined}
          className={
            isOnDark
              ? 'flex-1 rounded-lg border border-brand-cream/30 bg-brand-green-dark/80 px-4 py-3 text-brand-cream placeholder:text-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-green-accent'
              : 'flex-1 rounded-lg border border-brand-green-dark/20 px-4 py-3 text-brand-green-dark placeholder:text-brand-green-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-green-accent'
          }
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={
            isOnDark
              ? 'rounded-lg bg-brand-green-accent px-6 py-3 font-semibold text-brand-green-dark hover:bg-brand-green-accent/90 transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-brand-cream'
              : 'rounded-lg bg-brand-green-dark px-6 py-3 font-semibold text-white hover:bg-brand-green-dark/90 transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-brand-green-accent'
          }
        >
          {status === 'loading' ? 'Joining…' : 'Subscribe'}
        </button>
      </div>
      {message && (
        <p
          id="newsletter-form-feedback"
          role={status === 'error' ? 'alert' : 'status'}
          aria-live={status === 'error' ? 'assertive' : 'polite'}
          className={`text-sm ${
            status === 'error'
              ? isOnDark
                ? 'text-red-300'
                : 'text-red-700'
              : isOnDark
                ? 'text-brand-cream'
                : 'text-brand-green-dark'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  )
}
