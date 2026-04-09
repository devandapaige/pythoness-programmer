import { NextResponse } from 'next/server'
import { getStoreProductBySlug } from '@/lib/store/products'
import { getSiteUrl } from '@/lib/store/site'
import { getStripeClient } from '@/lib/store/stripe'
import { isValidEmail, isValidString, sanitizeString } from '@/lib/validation'

interface CheckoutRequestBody {
  productSlug?: unknown
  email?: unknown
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutRequestBody

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

    if (!product || product.pricing !== 'paid') {
      return NextResponse.json(
        { error: 'This product is not available for checkout.' },
        { status: 404 }
      )
    }

    const stripe = getStripeClient()
    const siteUrl = getSiteUrl()

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: product.currency,
            product_data: {
              name: product.stripeProductName ?? product.title,
              description: product.description,
            },
            unit_amount: product.priceCents,
          },
          quantity: 1,
        },
      ],
      metadata: {
        product_slug: product.slug,
        fulfillment_status: 'pending',
      },
      success_url: `${siteUrl}/store/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/store?cancelled=true`,
      allow_promotion_codes: true,
    })

    if (!session.url) {
      return NextResponse.json(
        { error: 'Unable to start checkout session.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected error while creating checkout session.'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}

