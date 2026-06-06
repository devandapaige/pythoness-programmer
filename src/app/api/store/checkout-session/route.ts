import { NextResponse } from 'next/server'

import { userMessages } from '@/data/userMessages'
import { getStoreProductBySlug } from '@/lib/store/products'
import { createPaidDownloadToken } from '@/lib/store/secureDownload'
import { getStripeClient } from '@/lib/store/stripe'
import { isValidString, sanitizeString } from '@/lib/validation'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const rawSessionId = requestUrl.searchParams.get('session_id')

  if (!isValidString(rawSessionId)) {
    return NextResponse.json(
      { error: userMessages.store.receiptLinkIncomplete },
      { status: 400 }
    )
  }

  const sessionId = sanitizeString(rawSessionId)

  try {
    const stripe = getStripeClient()
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    const productSlug = session.metadata?.product_slug
    const product = productSlug ? getStoreProductBySlug(productSlug) : undefined

    if (!product) {
      return NextResponse.json(
        { error: userMessages.store.purchaseNotFound },
        { status: 404 }
      )
    }

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: userMessages.store.paymentProcessing },
        { status: 400 }
      )
    }

    const email =
      session.customer_details?.email ??
      (typeof session.customer_email === 'string' ? session.customer_email : '')

    const normalizedEmail = sanitizeString(email).toLowerCase()

    return NextResponse.json({
      paid: true,
      productTitle: product.title,
      fileLabel: product.fileLabel,
      downloadUrl: `/api/store/paid-download?session_id=${encodeURIComponent(
        sessionId
      )}&token=${encodeURIComponent(createPaidDownloadToken(sessionId))}`,
      customerEmail: normalizedEmail || null,
    })
  } catch {
    return NextResponse.json(
      { error: userMessages.store.genericReceiptError },
      { status: 500 }
    )
  }
}
