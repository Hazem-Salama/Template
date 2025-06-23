// components/ConditionalLayout.tsx
'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')

  if (isAdminRoute) {
    // Return only children for admin routes (no navbar/footer)
    return <>{children}</>
  }

  // Return full layout for regular pages
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}