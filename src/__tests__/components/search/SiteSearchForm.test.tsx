import { renderToStaticMarkup } from 'react-dom/server'

import SiteSearchForm from '@/components/search/SiteSearchForm'

describe('SiteSearchForm', () => {
  it('renders a GET form targeting /search', () => {
    const html = renderToStaticMarkup(<SiteSearchForm id="test-search" />)

    expect(html).toContain('action="/search"')
    expect(html).toContain('method="get"')
    expect(html).toContain('role="search"')
  })

  it('renders an accessible search input named q', () => {
    const html = renderToStaticMarkup(<SiteSearchForm id="test-search" />)

    expect(html).toContain('id="test-search"')
    expect(html).toContain('name="q"')
    expect(html).toContain('type="search"')
    expect(html).toContain('Search pages, resources, Lab Notes, and newsletter')
  })

  it('prefills the input when defaultValue is provided', () => {
    const html = renderToStaticMarkup(
      <SiteSearchForm id="test-search" defaultValue="password security" />
    )

    expect(html).toContain('value="password security"')
  })
})
