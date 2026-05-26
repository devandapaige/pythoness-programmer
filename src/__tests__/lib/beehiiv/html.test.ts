import {
  extractAndSanitizePostHtml,
  pickRawPostHtml,
} from '@/lib/beehiiv/html'
import type { BeehiivPostContent } from '@/types/beehiiv'

describe('beehiiv html', () => {
  it('extracts content from #content-blocks', () => {
    const raw = `
      <div id="content-blocks">
        <p>Hello <strong>world</strong></p>
      </div>
    `
    const result = extractAndSanitizePostHtml(raw)
    expect(result).toContain('Hello')
    expect(result).toContain('<strong>world</strong>')
    expect(result).not.toContain('content-blocks')
  })

  it('extracts content from #beehiiv__body when content-blocks is missing', () => {
    const raw = `
      <div id="beehiiv__body">
        <p>RSS body</p>
      </div>
    `
    const result = extractAndSanitizePostHtml(raw)
    expect(result).toContain('RSS body')
  })

  it('picks free web content first', () => {
    const content: BeehiivPostContent = {
      free: { web: '<div id="content-blocks"><p>Web</p></div>' },
      premium: { web: '<div id="content-blocks"><p>Premium</p></div>' },
    }
    expect(pickRawPostHtml(content)).toContain('Web')
  })

  it('strips script tags', () => {
    const raw = `
      <div id="content-blocks">
        <p>Safe</p>
        <script>alert('x')</script>
      </div>
    `
    const result = extractAndSanitizePostHtml(raw)
    expect(result).toContain('Safe')
    expect(result).not.toContain('script')
    expect(result).not.toContain('alert')
  })
})
