'use client'

import { FormEvent, useMemo, useState } from 'react'
import { userMessages } from '@/data/userMessages'
import { formatPriceCents } from '@/lib/store/format'
import { StoreProduct } from '@/types/store'

interface StoreClientProps {
  products: StoreProduct[]
  cancelled: boolean
}

const isEmailValid = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

export default function StoreClient({ products, cancelled }: StoreClientProps) {
  const [emailByProduct, setEmailByProduct] = useState<Record<string, string>>({})
  const [activeProductId, setActiveProductId] = useState<string | null>(null)
  const [errorByProduct, setErrorByProduct] = useState<Record<string, string>>({})
  const [successByProduct, setSuccessByProduct] = useState<Record<string, string>>({})

  const sortedProducts = useMemo(
    () =>
      [...products].sort((a, b) => {
        if (a.pricing === b.pricing) {
          return a.title.localeCompare(b.title)
        }
        return a.pricing === 'free' ? -1 : 1
      }),
    [products]
  )

  const setEmail = (productId: string, value: string) => {
    setEmailByProduct((current) => ({ ...current, [productId]: value }))
  }

  const setError = (productId: string, message: string) => {
    setErrorByProduct((current) => ({ ...current, [productId]: message }))
  }

  const setSuccess = (productId: string, message: string) => {
    setSuccessByProduct((current) => ({ ...current, [productId]: message }))
  }

  const clearNotices = (productId: string) => {
    setError(productId, '')
    setSuccess(productId, '')
  }

  const handlePaidCheckout = async (
    event: FormEvent<HTMLFormElement>,
    product: StoreProduct
  ) => {
    event.preventDefault()
    clearNotices(product.id)

    const email = (emailByProduct[product.id] ?? '').trim().toLowerCase()
    if (!isEmailValid(email)) {
      setError(product.id, userMessages.store.invalidEmailCheckout)
      return
    }

    setActiveProductId(product.id)

    try {
      const response = await fetch('/api/store/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productSlug: product.slug,
          email,
        }),
      })

      const payload = (await response.json()) as { url?: string; error?: string }
      if (!response.ok || !payload.url) {
        setError(
          product.id,
          payload.error ?? userMessages.store.checkoutStartFailed
        )
        return
      }

      window.location.assign(payload.url)
    } catch {
      setError(product.id, userMessages.store.checkoutStartFailed)
    } finally {
      setActiveProductId(null)
    }
  }

  const handleFreeClaim = async (
    event: FormEvent<HTMLFormElement>,
    product: StoreProduct
  ) => {
    event.preventDefault()
    clearNotices(product.id)

    const email = (emailByProduct[product.id] ?? '').trim().toLowerCase()
    if (!isEmailValid(email)) {
      setError(product.id, userMessages.store.invalidEmailFree)
      return
    }

    setActiveProductId(product.id)

    try {
      const response = await fetch('/api/store/free-claim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productSlug: product.slug,
          email,
        }),
      })

      const payload = (await response.json()) as {
        success?: boolean
        message?: string
        downloadUrl?: string
        error?: string
      }

      if (!response.ok || !payload.success || !payload.downloadUrl) {
        setError(
          product.id,
          payload.error ?? userMessages.store.freeDownloadFailed
        )
        return
      }

      setSuccess(
        product.id,
        payload.message ?? userMessages.store.freeClaimSuccess
      )
      window.location.assign(payload.downloadUrl)
    } catch {
      setError(product.id, userMessages.store.freeDownloadFailed)
    } finally {
      setActiveProductId(null)
    }
  }

  return (
    <div className="site-gutter min-h-screen bg-gradient-to-br from-brand-green-dark via-brand-green-dark/95 to-brand-purple-dark text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Digital store</h1>
          <p className="text-lg text-brand-cream/90 max-w-3xl mx-auto">
            Instant digital downloads. Some are free, some are paid through secure Stripe checkout.
          </p>
        </div>

        <div
          className="mb-10 rounded-xl border border-brand-cream/35 bg-white/10 px-5 py-4 text-left text-brand-cream/95 max-w-3xl mx-auto"
          role="status"
        >
          <p className="font-semibold text-brand-cream mb-2">Work in progress</p>
          <p className="text-sm md:text-base text-brand-cream/90 leading-relaxed">
            This store is still under construction. If you landed here, you&apos;re seeing an early
            version while we test downloads, email delivery, and checkout—not a finished public
            catalog yet.
          </p>
        </div>

        {cancelled && (
          <div className="mb-8 rounded-lg border border-brand-cream/30 bg-white/10 p-4 text-brand-cream">
            Checkout was canceled. Your cart was not charged.
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {sortedProducts.map((product) => {
            const active = activeProductId === product.id
            const buttonLabel =
              product.pricing === 'paid'
                ? active
                  ? 'Redirecting to checkout...'
                  : 'Continue to checkout'
                : active
                ? 'Starting download...'
                : 'Get free download'

            const isErrorProofingTest =
              product.slug === 'error-proofing-worksheet-pack'

            return (
              <article
                key={product.id}
                className={`rounded-2xl border backdrop-blur-sm p-6 ${
                  isErrorProofingTest
                    ? 'border-amber-300/50 bg-amber-950/25'
                    : 'border-brand-cream/30 bg-white/10'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h2 className="text-2xl font-display text-brand-cream">{product.title}</h2>
                  <span className="text-brand-green-accent font-semibold">
                    {formatPriceCents(product.priceCents, product.currency)}
                  </span>
                </div>

                {isErrorProofingTest && (
                  <div className="mb-4 rounded-lg border border-amber-300/40 bg-black/20 px-3 py-2.5 text-sm text-amber-100/95">
                    <p className="font-semibold text-amber-100 mb-1">Test product only</p>
                    <p className="text-amber-100/90 leading-relaxed">
                      This item is for checkout testing only. Use the free toolkit below unless
                      Amanda asked you to test payment.
                    </p>
                  </div>
                )}

                <p className="text-brand-cream/90 mb-5">{product.description}</p>

                <p className="text-sm text-brand-cream/80 mb-5">
                  File: {product.fileLabel}
                </p>

                <form
                  onSubmit={(event) =>
                    product.pricing === 'paid'
                      ? handlePaidCheckout(event, product)
                      : handleFreeClaim(event, product)
                  }
                  className="space-y-3"
                >
                  <label className="block text-sm text-brand-cream/90" htmlFor={`email-${product.id}`}>
                    Email for receipt + delivery updates
                  </label>
                  <input
                    id={`email-${product.id}`}
                    type="email"
                    required
                    value={emailByProduct[product.id] ?? ''}
                    onChange={(event) => setEmail(product.id, event.target.value)}
                    aria-invalid={Boolean(errorByProduct[product.id])}
                    aria-describedby={
                      errorByProduct[product.id]
                        ? `store-error-${product.id}`
                        : successByProduct[product.id]
                          ? `store-success-${product.id}`
                          : undefined
                    }
                    className="w-full rounded-lg border border-brand-cream/30 bg-brand-green-dark/80 px-3 py-2 text-brand-cream placeholder:text-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-green-accent"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />

                  <button
                    type="submit"
                    disabled={active}
                    className="w-full rounded-lg bg-brand-green-accent text-black px-4 py-2 font-semibold hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-70 transition-colors"
                  >
                    {buttonLabel}
                  </button>
                </form>

                {errorByProduct[product.id] && (
                  <p
                    id={`store-error-${product.id}`}
                    role="alert"
                    aria-live="assertive"
                    className="mt-3 text-sm text-red-200"
                  >
                    {errorByProduct[product.id]}
                  </p>
                )}
                {successByProduct[product.id] && (
                  <p
                    id={`store-success-${product.id}`}
                    role="status"
                    aria-live="polite"
                    className="mt-3 text-sm text-brand-green-accent"
                  >
                    {successByProduct[product.id]}
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
