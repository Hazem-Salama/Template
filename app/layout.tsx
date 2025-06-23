// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import I18nProvider from '@/components/I18nProvider'
import ConditionalLayout from '@/components/ConditionalLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Unlimited Creative Agency',
    template: '%s | Unlimited Creative Agency'
  },
  description: 'Premium digital marketing and design agency specializing in branding, UI/UX design, web development, and digital marketing.',
  keywords: ['creative agency', 'branding', 'web design', 'digital marketing', 'UI/UX design'],
  authors: [{ name: 'Unlimited Creative Agency' }],
  creator: 'Unlimited Creative Agency',
  metadataBase: new URL('https://unlimited-agency.com'),
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
    url: 'https://unlimited-agency.com',
    siteName: 'Unlimited Creative Agency',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Unlimited Creative Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@unlimited_agency',
    creator: '@unlimited_agency',
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
        <I18nProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </I18nProvider>
      </body>
    </html>
  )
}