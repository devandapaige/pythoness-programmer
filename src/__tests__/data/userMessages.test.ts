import { supportEmail, userMessages } from '@/data/userMessages'

const forbiddenTokens = [
  'session_id',
  'Resend',
  'Stripe',
  'token',
  'Unexpected error',
] as const

function collectMessageStrings(value: unknown): string[] {
  if (typeof value === 'string') {
    return [value]
  }

  if (value && typeof value === 'object') {
    return Object.values(value).flatMap(collectMessageStrings)
  }

  return []
}

describe('userMessages', () => {
  it('defines support email and message groups', () => {
    expect(supportEmail).toBe('help@pythonessprogrammer.com')
    expect(userMessages.newsletter.success).toContain('Pythoness Perspective')
    expect(userMessages.store.checkoutStartFailed).toContain(supportEmail)
    expect(userMessages.clipboard.copyFailed).toBeTruthy()
  })

  it('does not expose forbidden tokens in user-facing copy', () => {
    const allMessages = collectMessageStrings(userMessages)

    for (const message of allMessages) {
      for (const token of forbiddenTokens) {
        expect(message).not.toContain(token)
      }
    }
  })
})
