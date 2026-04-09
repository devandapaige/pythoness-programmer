import { NextResponse } from 'next/server'
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
      { error: 'session_id and token are required.' },
      { status: 400 }
    )
  }

  const sessionId = sanitizeString(rawSessionId)
  const token = sanitizeString(rawToken)

  if (!verifyPaidDownloadToken(token, sessionId)) {
    return NextResponse.json({ error: 'Invalid or expired download token.' }, { status: 403 })
  }

  try {
    const stripe = getStripeClient()
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment is not completed.' }, { status: 403 })
    }

    const productSlug = session.metadata?.product_slug
    const product = productSlug ? getStoreProductBySlug(productSlug) : undefined

    if (!product || product.pricing !== 'paid') {
      return NextResponse.json({ error: 'Paid product was not found.' }, { status: 404 })
    }

    const redirectTo = new URL(product.downloadUrl, requestUrl.origin)
    return NextResponse.redirect(redirectTo)
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected error while processing paid download.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
