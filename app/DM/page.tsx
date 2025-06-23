// app/services/digital-marketing/page.tsx
import { Metadata } from 'next'
import DigitalMarketingClient from '../../components/DM/DigitalMarketingClient'

export const metadata: Metadata = {
  title: 'Digital Marketing Services - Unlimited Creative Agency',
  description: 'Comprehensive digital marketing services including social media management, paid advertising, content creation, photography, video editing, and strategic marketing campaigns across all platforms.',
  keywords: 'digital marketing, social media management, SMM, facebook ads, tiktok marketing, instagram marketing, paid advertising, content creation, photography, video editing, marketing campaigns',
  openGraph: {
    title: 'Digital Marketing Services - Unlimited Creative Agency',
    description: 'Drive growth with strategic digital marketing campaigns that deliver measurable results.',
    type: 'website',
    images: ['/images/digital-marketing-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services - Unlimited Creative Agency',
    description: 'Drive growth with strategic digital marketing campaigns that deliver measurable results.',
  }
}

export default function DigitalMarketingPage() {
  return <DigitalMarketingClient />
}