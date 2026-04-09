'use client'

import { FormEvent, useMemo, useState } from 'react'
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
      setError(product.id, 'Please enter a valid email before checkout.')
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
          payload.error ?? 'Could not start checkout. Please try again.'
        )
        return
      }

      window.location.assign(payload.url)
    } catch (error) {
      setError(
        product.id,
        error instanceof Error
          ? error.message
          : 'Unexpected error while starting checkout.'
      )
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
      setError(product.id, 'Please enter a valid email to access this free file.')
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
          payload.error ?? 'Could not unlock this free file. Please try again.'
        )
        return
      }

      setSuccess(
        product.id,
        payload.message ?? 'Thanks. Your file is ready to download.'
      )
      window.location.assign(payload.downloadUrl)
    } catch (error) {
      setError(
        product.id,
        error instanceof Error
          ? error.message
          : 'Unexpected error while unlocking free file.'
      )
    } finally {
      setActiveProductId(null)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-green-dark via-brand-green-dark/95 to-brand-purple-dark text-white py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Digital store</h1>
          <p className="text-lg text-brand-cream/90 max-w-3xl mx-auto">
            Instant digital downloads. Some are free, some are paid through secure Stripe checkout.
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
                  : 'Buy with Stripe'
                : active
                ? 'Unlocking file...'
                : 'Get free download'

            return (
              <article
                key={product.id}
                className="rounded-2xl border border-brand-cream/30 bg-white/10 backdrop-blur-sm p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h2 className="text-2xl font-display text-brand-cream">{product.title}</h2>
                  <span className="text-brand-green-accent font-semibold">
                    {formatPriceCents(product.priceCents, product.currency)}
                  </span>
                </div>

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
                  <p className="mt-3 text-sm text-red-200">{errorByProduct[product.id]}</p>
                )}
                {successByProduct[product.id] && (
                  <p className="mt-3 text-sm text-brand-green-accent">
                    {successByProduct[product.id]}
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
}
