'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface StoreSuccessPayload {
  paid: boolean
  productTitle: string
  fileLabel: string
  downloadUrl: string
  customerEmail: string | null
}

export default function StoreSuccessPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [payload, setPayload] = useState<StoreSuccessPayload | null>(null)

  useEffect(() => {
    const run = async () => {
      const params = new URLSearchParams(window.location.search)
      const sessionId = params.get('session_id')

      if (!sessionId) {
        setError('Missing checkout session ID. Please contact support if you were charged.')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(
          `/api/store/checkout-session?session_id=${encodeURIComponent(sessionId)}`
        )
        const json = (await response.json()) as StoreSuccessPayload & { error?: string }

        if (!response.ok) {
          setError(json.error ?? 'Could not verify your purchase yet.')
          setLoading(false)
          return
        }

        setPayload(json)
      } catch (requestError) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Unexpected error while loading your receipt.'
        )
      } finally {
        setLoading(false)
      }
    }

    void run()
  }, [])

  return (
    <div className="site-gutter min-h-screen bg-gradient-to-br from-brand-green-dark via-brand-green-dark/95 to-brand-purple-dark text-white">
      <div className="max-w-3xl mx-auto rounded-2xl border border-brand-cream/30 bg-white/10 backdrop-blur-sm p-8">
        <h1 className="text-3xl md:text-4xl font-display text-brand-cream mb-4">
          Purchase complete
        </h1>

        {loading && <p className="text-brand-cream/90">Verifying your purchase details...</p>}

        {!loading && error && (
          <div className="space-y-3">
            <p className="text-red-200">{error}</p>
            <Link href="/store" className="text-brand-green-accent underline hover:no-underline">
              Return to store
            </Link>
          </div>
        )}

        {!loading && !error && payload && (
          <div className="space-y-4">
            <p className="text-brand-cream/90">
              Thank you for purchasing <strong>{payload.productTitle}</strong>.
            </p>
            {payload.customerEmail && (
              <p className="text-brand-cream/80">
                Receipt email: <strong>{payload.customerEmail}</strong>
              </p>
            )}
            <a
              href={payload.downloadUrl}
              className="inline-block rounded-lg bg-brand-green-accent text-black px-5 py-3 font-semibold hover:bg-opacity-90 transition-colors"
            >
              Download: {payload.fileLabel}
            </a>
            <p className="text-sm text-brand-cream/80">
              You can also use the download link from your purchase email.
            </p>
            <p className="text-sm text-brand-cream/80">
              Need help? Email{' '}
              <a
                href="mailto:help@pythonessprogrammer.com"
                className="text-brand-green-accent underline hover:no-underline"
              >
                help@pythonessprogrammer.com
              </a>
              .
            </p>
            <Link href="/store" className="inline-block text-brand-green-accent underline">
              Back to store
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
