'use client'

import { usePathname } from 'next/navigation'
import SkipLink from '@/components/a11y/SkipLink'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteHeaderOffset } from '@/lib/marketingLayout'

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isLinksPage = pathname === '/links' || pathname.startsWith('/links/')

  return (
    <>
      {!isLinksPage && <SkipLink />}
      {!isLinksPage && <Header />}
      <main
        id="main-content"
        tabIndex={-1}
        className={!isHomePage && !isLinksPage ? siteHeaderOffset : ''}
      >
        {children}
      </main>
      {!isLinksPage && <Footer />}
    </>
  )
}
