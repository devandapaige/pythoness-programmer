import fs from 'fs'
import path from 'path'

import {
  getNewsletterPostBySlugSync,
  hasNewsletterArchive,
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
})
