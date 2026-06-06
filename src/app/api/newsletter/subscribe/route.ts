import { NextResponse } from 'next/server'

import { userMessages } from '@/data/userMessages'
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
        { error: userMessages.newsletter.emailRequired },
        { status: 400 }
      )
    }

    const email = sanitizeString(body.email).toLowerCase()

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: userMessages.newsletter.invalidEmail },
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
        { error: userMessages.newsletter.unavailable },
        { status: 503 }
      )
    }

    if (!result.subscribed) {
      return NextResponse.json(
        { error: userMessages.newsletter.signupFailed },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: userMessages.newsletter.success,
    })
  } catch {
    return NextResponse.json(
      { error: userMessages.newsletter.genericFailure },
      { status: 500 }
    )
  }
}
