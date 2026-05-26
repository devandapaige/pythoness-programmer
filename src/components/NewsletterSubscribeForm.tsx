'use client'

import { FormEvent, useState } from 'react'

type NewsletterSubscribeFormProps = {
  source?: string
  className?: string
}

export function NewsletterSubscribeForm({
  source = 'website',
  className = '',
}: NewsletterSubscribeFormProps) {
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
        setMessage(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setMessage(
        data.message ??
          'You are on the list. Watch your inbox for Pythoness Perspective.'
      )
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
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
          className="flex-1 rounded-lg border border-brand-green-dark/20 px-4 py-3 text-brand-green-dark placeholder:text-brand-green-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-green-accent"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-lg bg-brand-green-dark px-6 py-3 font-semibold text-white hover:bg-brand-green-dark/90 transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-brand-green-accent"
        >
          {status === 'loading' ? 'Joining…' : 'Subscribe'}
        </button>
      </div>
      {message && (
        <p
          role="status"
          className={`text-sm ${
            status === 'error' ? 'text-red-700' : 'text-brand-green-dark'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  )
}
