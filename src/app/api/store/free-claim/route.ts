import { NextResponse } from 'next/server'

import { userMessages } from '@/data/userMessages'
import { subscribeToNewsletter } from '@/lib/resend/newsletter'
import { getStoreProductBySlug } from '@/lib/store/products'
import { isValidEmail, isValidString, sanitizeString } from '@/lib/validation'

interface FreeClaimRequestBody {
  productSlug?: unknown
  email?: unknown
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FreeClaimRequestBody

    if (!isValidString(body.productSlug) || !isValidString(body.email)) {
      return NextResponse.json(
        { error: userMessages.store.productEmailRequired },
        { status: 400 }
      )
    }

    const productSlug = sanitizeString(body.productSlug)
    const email = sanitizeString(body.email).toLowerCase()

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: userMessages.newsletter.invalidEmail },
        { status: 400 }
      )
    }

    const product = getStoreProductBySlug(productSlug)
    if (!product || product.pricing !== 'free') {
      return NextResponse.json(
        { error: userMessages.store.freeProductNotFound },
        { status: 404 }
      )
    }

    const newsletterResult = await subscribeToNewsletter({
      email,
      source: `store-free-${product.slug}`,
    })

    return NextResponse.json({
      success: true,
      downloadUrl: product.downloadUrl,
      message: newsletterResult.subscribed
        ? 'Thanks! Your download is ready and you were added to the newsletter.'
        : 'Thanks! Your download is ready.',
      newsletter: newsletterResult,
    })
  } catch {
    return NextResponse.json(
      { error: userMessages.store.genericFreeClaimError },
      { status: 500 }
    )
  }
}
