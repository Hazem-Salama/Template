// app/services/branding/page.tsx
import { Metadata } from 'next'
import BrandingClient from '@/components/Branding/BrandingClient'

export const metadata: Metadata = {
  title: 'Branding Services - Unlimited Creative Agency',
  description: 'Professional branding services including logo design, brand guidelines, visual identity systems, and brand strategy. Create a powerful brand that inspires trust and drives business growth.',
  keywords: 'branding services, logo design, brand identity, visual identity, brand guidelines, brand strategy, brand development, corporate branding',
  openGraph: {
    title: 'Branding Services - Unlimited Creative Agency',
    description: 'Create a powerful brand identity that resonates with your audience and drives business growth.',
    type: 'website',
    images: ['/images/branding-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding Services - Unlimited Creative Agency',
    description: 'Create a powerful brand identity that resonates with your audience and drives business growth.',
  }
}

export default function BrandingPage() {
  return <BrandingClient />
}