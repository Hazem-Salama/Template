// app/services/page.tsx
import { Metadata } from 'next'
import ServicesHero from '@/components/Services/ServicesHero'
import ServicesGrid from '@/components/Services/ServicesGrid'
import ServiceProcess from '@/components/Services/ServiceProcess'
import PricingApproach from '@/components/Services/PricingApproach'
import ServicesCTA from '@/components/Services/ServicesCTA'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Our Services - Unlimited Creative Agency',
  description: 'Explore our comprehensive range of creative services including branding, UI/UX design, web development, and digital marketing. Custom solutions for every business need.',
  keywords: 'creative services, branding, UI UX design, web development, digital marketing, SEO, social media marketing, logo design',
  openGraph: {
    title: 'Our Services - Unlimited Creative Agency',
    description: 'Comprehensive creative services to transform your brand and drive business growth.',
    type: 'website',
    images: ['/images/services-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Unlimited Creative Agency',
    description: 'Comprehensive creative services to transform your brand and drive business growth.',
  }
}

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero Section */}
      <ServicesHero />
      
      {/* Services Grid */}
      <AnimatedSection>
        <ServicesGrid />
      </AnimatedSection>
      
      {/* Service Process */}
      <AnimatedSection>
        <ServiceProcess />
      </AnimatedSection>
      
      {/* Pricing Approach */}
      <AnimatedSection>
        <PricingApproach />
      </AnimatedSection>
      
      {/* Services CTA */}
      <AnimatedSection>
        <ServicesCTA />
      </AnimatedSection>
    </>
  )
}