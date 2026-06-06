import { NextResponse } from 'next/server'

import { userMessages } from '@/data/userMessages'
import { getStoreProductBySlug } from '@/lib/store/products'
import { verifyPaidDownloadToken } from '@/lib/store/secureDownload'
import { getStripeClient } from '@/lib/store/stripe'
import { isValidString, sanitizeString } from '@/lib/validation'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const rawSessionId = requestUrl.searchParams.get('session_id')
  const rawToken = requestUrl.searchParams.get('token')

  if (!isValidString(rawSessionId) || !isValidString(rawToken)) {
    return NextResponse.json(
      { error: userMessages.store.downloadLinkExpired },
      { status: 400 }
    )
  }

  const sessionId = sanitizeString(rawSessionId)
  const token = sanitizeString(rawToken)

  if (!verifyPaidDownloadToken(token, sessionId)) {
    return NextResponse.json(
      { error: userMessages.store.downloadLinkExpired },
      { status: 403 }
    )
  }

  try {
    const stripe = getStripeClient()
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: userMessages.store.paymentIncomplete },
        { status: 403 }
      )
    }

    const productSlug = session.metadata?.product_slug
    const product = productSlug ? getStoreProductBySlug(productSlug) : undefined

    if (!product || product.pricing !== 'paid') {
      return NextResponse.json(
        { error: userMessages.store.paidProductNotFound },
        { status: 404 }
      )
    }

    const redirectTo = new URL(product.downloadUrl, requestUrl.origin)
    return NextResponse.redirect(redirectTo)
  } catch {
    return NextResponse.json(
      { error: userMessages.store.genericPaidDownloadError },
      { status: 500 }
    )
  }
}
