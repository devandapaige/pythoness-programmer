import { parseBlogDate } from '@/lib/blog-date'

describe('blog-date', () => {
  it('parses date-only strings as calendar dates', () => {
    const parsed = parseBlogDate('2026-05-29')
    expect(parsed.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/New_York',
    })).toBe('May 29, 2026')
  })
})
