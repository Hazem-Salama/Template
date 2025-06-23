import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'Admin Dashboard - Unlimited Creative Agency',
  description: 'Admin dashboard for managing bookings, messages, and meetings',
  robots: 'noindex, nofollow', // Prevent search engines from indexing admin pages
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="admin-layout min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">
      {children}
    </div>
  )
}