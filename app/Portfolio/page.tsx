// app/portfolio/page.tsx
import { Metadata } from 'next'
import PortfolioClient from '@/components/Portfolio/PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio - Unlimited Creative Agency',
  description: 'Explore our portfolio of successful creative projects including branding, web design, mobile apps, and digital marketing campaigns that have transformed businesses and driven measurable results.',
  keywords: 'portfolio, creative projects, branding examples, web design showcase, mobile app development, digital marketing campaigns, case studies, client work',
  openGraph: {
    title: 'Portfolio - Unlimited Creative Agency',
    description: 'Discover our successful creative projects and the measurable results we\'ve achieved for our clients.',
    type: 'website',
    images: ['/images/portfolio-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Unlimited Creative Agency',
    description: 'Discover our successful creative projects and the measurable results we\'ve achieved for our clients.',
  }
}

export default function PortfolioPage() {
  return <PortfolioClient />
}