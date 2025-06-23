// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalLayout from '@/components/ConditionalLayout'

const inter = Inter({ subsets: ['latin'] })

// Template Metadata - Easy to customize for your agency
export const metadata: Metadata = {
  title: {
    default: 'Creative Agency Template',
    template: '%s | Creative Agency Template'
  },
  description: 'Modern creative agency template with admin dashboard. Built with Next.js 15, TypeScript, and Tailwind CSS.',
  keywords: ['creative agency template', 'nextjs template', 'agency website', 'admin dashboard', 'typescript'],
  authors: [{ name: 'Your Agency Name' }],
  creator: 'Your Agency Name',
  // TODO: Replace with your domain
  metadataBase: new URL('https://your-domain.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // TODO: Replace with your domain
    url: 'https://your-domain.com',
    siteName: 'Creative Agency Template',
    images: [
      {
        // TODO: Add your og-image
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Creative Agency Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    // TODO: Replace with your social handles
    site: '@your_agency',
    creator: '@your_agency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}