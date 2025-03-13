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

  return (
    <>
      <Header />
      <main className={!isHomePage ? "pt-20" : ""}>
        {children}
      </main>
      <Footer />
    </>
  )
} 