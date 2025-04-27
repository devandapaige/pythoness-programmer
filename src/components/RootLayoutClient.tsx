'use client'

import { usePathname } from 'next/navigation'
import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
      <main className={!isHomePage && !isLinksPage ? "pt-20" : ""}>
        {children}
      </main>
      {!isLinksPage && <Footer />}
    </>
  )
} 