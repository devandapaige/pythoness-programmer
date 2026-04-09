import { NextResponse } from 'next/server'
import { syncStoreSubscriberToBeehiiv } from '@/lib/store/beehiiv'
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
        { error: 'Product and email are required.' },
        { status: 400 }
      )
    }

    const productSlug = sanitizeString(body.productSlug)
    const email = sanitizeString(body.email).toLowerCase()

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const product = getStoreProductBySlug(productSlug)
    if (!product || product.pricing !== 'free') {
      return NextResponse.json(
        { error: 'This free product was not found.' },
        { status: 404 }
      )
    }

    const beehiivResult = await syncStoreSubscriberToBeehiiv({
      email,
      productSlug: product.slug,
    })

    return NextResponse.json({
      success: true,
      downloadUrl: product.downloadUrl,
      message: beehiivResult.synced
        ? 'Thanks! Your download is ready and you were added to updates.'
        : 'Thanks! Your download is ready.',
      beehiiv: beehiivResult,
    })
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected error while claiming free product.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
