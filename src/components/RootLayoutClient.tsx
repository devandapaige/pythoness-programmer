'use client'

import { usePathname } from 'next/navigation'
import SkipLink from '@/components/a11y/SkipLink'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLinksPage = pathname === '/links' || pathname.startsWith('/links/')

  return (
    <>
      {!isLinksPage && <SkipLink />}
      {!isLinksPage && <Header />}
      <main
        id="main-content"
        tabIndex={-1}
        className={!isLinksPage ? 'pt-16' : ''}
      >
        {children}
      </main>
      {!isLinksPage && <Footer />}
    </>
  )
}
