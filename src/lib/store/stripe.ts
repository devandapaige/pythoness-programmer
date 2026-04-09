import 'server-only'
import Stripe from 'stripe'

let stripeClient: Stripe | null = null

export const getStripeClient = (): Stripe => {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY

  if (!stripeSecretKey) {
    throw new Error('STRIPE_SECRET_KEY is not configured')
  }

  if (!stripeClient) {
    stripeClient = new Stripe(stripeSecretKey)
  }

  return stripeClient
}

