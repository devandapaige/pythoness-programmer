'use client'

import { usePathname } from 'next/navigation'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { siteHeaderOffset } from "@/lib/marketingLayout"

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
      {!isLinksPage && <Header />}
      <main className={!isHomePage && !isLinksPage ? siteHeaderOffset : ""}>
        {children}
      </main>
      {!isLinksPage && <Footer />}
    </>
  )
} 