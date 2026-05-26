import { NextResponse } from 'next/server'

import { subscribeToNewsletter } from '@/lib/resend/newsletter'
import { isValidEmail, isValidString, sanitizeString } from '@/lib/validation'

export const dynamic = 'force-dynamic'

interface SubscribeBody {
  email?: unknown
  source?: unknown
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SubscribeBody

    if (!isValidString(body.email)) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      )
    }

    const email = sanitizeString(body.email).toLowerCase()

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const source =
      isValidString(body.source) && body.source.trim()
        ? sanitizeString(body.source)
        : 'website'

    const result = await subscribeToNewsletter({ email, source })

    if (!result.configured) {
      return NextResponse.json(
        {
          error:
            'Newsletter signup is not configured yet. Please try again later.',
        },
        { status: 503 }
      )
    }

    if (!result.subscribed) {
      return NextResponse.json(
        {
          error:
            result.message ??
            'We could not add you to the list. Please try again.',
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message:
        'You are on the list. Watch your inbox for Pythoness Perspective.',
    })
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Unexpected error during newsletter signup.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
