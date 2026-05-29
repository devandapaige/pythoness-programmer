import fs from 'fs'
import path from 'path'

import {
  getNewsletterPostBySlugSync,
  hasNewsletterArchive,
  parseNewsletterDate,
} from '@/lib/newsletter/mdx'

const POSTS_DIR = path.join(process.cwd(), 'src/content/newsletter/posts')

describe('newsletter mdx', () => {
  it('reports whether archive directory has mdx files', () => {
    const hasFiles =
      fs.existsSync(POSTS_DIR) &&
      fs.readdirSync(POSTS_DIR).some((f) => f.endsWith('.mdx'))
    expect(hasNewsletterArchive()).toBe(hasFiles)
  })

  it('returns null for missing slug', () => {
    expect(getNewsletterPostBySlugSync('this-slug-does-not-exist-xyz')).toBeNull()
  })

  it('parses date-only strings as calendar dates', () => {
    const parsed = parseNewsletterDate('2026-05-29')
    expect(parsed.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/New_York',
    })).toBe('May 29, 2026')
  })
})
