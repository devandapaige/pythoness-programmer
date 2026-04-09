import { NextResponse } from 'next/server'
import { syncStoreSubscriberToBeehiiv } from '@/lib/store/beehiiv'
import { getStoreProductBySlug } from '@/lib/store/products'
import { getStripeClient } from '@/lib/store/stripe'
import { isValidString, sanitizeString } from '@/lib/validation'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const rawSessionId = requestUrl.searchParams.get('session_id')

  if (!isValidString(rawSessionId)) {
    return NextResponse.json({ error: 'session_id is required.' }, { status: 400 })
  }

  const sessionId = sanitizeString(rawSessionId)

  try {
    const stripe = getStripeClient()
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    const productSlug = session.metadata?.product_slug
    const product = productSlug ? getStoreProductBySlug(productSlug) : undefined

    if (!product) {
      return NextResponse.json(
        { error: 'Could not resolve the purchased product for this checkout.' },
        { status: 404 }
      )
    }

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Checkout is not marked as paid yet.' },
        { status: 400 }
      )
    }

    const email =
      session.customer_details?.email ??
      (typeof session.customer_email === 'string' ? session.customer_email : '')

    const normalizedEmail = sanitizeString(email).toLowerCase()
    const beehiivResult =
      normalizedEmail.length > 0
        ? await syncStoreSubscriberToBeehiiv({
            email: normalizedEmail,
            productSlug: product.slug,
          })
        : { configured: false, synced: false, message: 'No customer email found.' }

    return NextResponse.json({
      paid: true,
      productTitle: product.title,
      fileLabel: product.fileLabel,
      downloadUrl: product.downloadUrl,
      customerEmail: normalizedEmail || null,
      beehiiv: beehiivResult,
    })
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected error while retrieving checkout session.'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
