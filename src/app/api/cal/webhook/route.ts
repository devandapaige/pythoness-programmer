import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import type { CalWebhookEvent } from '@/lib/booking/types'
import { processCalWebhookEvent } from '@/lib/booking/handler'
import { verifyCalWebhookSignature } from '@/lib/booking/verify'

export const dynamic = 'force-dynamic'

const getWebhookSecret = (): string => {
  const secret = process.env.CAL_WEBHOOK_SECRET

  if (!secret) {
    throw new Error('CAL_WEBHOOK_SECRET is not configured')
  }

  return secret
}

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = (await headers()).get('x-cal-signature-256')

    if (!verifyCalWebhookSignature(body, signature, getWebhookSecret())) {
      return NextResponse.json({ error: 'Invalid Cal.com webhook signature.' }, { status: 401 })
    }

    const event = JSON.parse(body) as CalWebhookEvent
    const result = await processCalWebhookEvent(event)

    return NextResponse.json({ received: true, ...result })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Cal.com webhook processing error.'

    return NextResponse.json({ error: message }, { status: 400 })
  }
}
