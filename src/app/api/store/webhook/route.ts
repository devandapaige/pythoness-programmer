import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { runPaidFulfillment } from '@/lib/store/fulfillment'
import { getStripeClient } from '@/lib/store/stripe'
import { sanitizeString } from '@/lib/validation'

export const dynamic = 'force-dynamic'

const getWebhookSecret = (): string => {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secret) {
    throw new Error('STRIPE_WEBHOOK_SECRET is not configured')
  }
  return secret
}

export async function POST(request: Request) {
  try {
    const stripe = getStripeClient()
    const body = await request.text()
    const signature = (await headers()).get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing Stripe signature header.' },
        { status: 400 }
      )
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      getWebhookSecret()
    )

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session
      const productSlug = session.metadata?.product_slug
      const sessionId = session.id
      const email =
        session.customer_details?.email ??
        (typeof session.customer_email === 'string' ? session.customer_email : '')

      if (productSlug && email && sessionId) {
        await runPaidFulfillment({
          productSlug: sanitizeString(productSlug),
          customerEmail: sanitizeString(email),
          sessionId,
        })
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Webhook processing error.'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
