// app/page.tsx
import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServicesPreview from '@/components/Services/ServicesPreview'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Creative Agency Template - Modern Digital Solutions',
  description: 'Transform your business with our comprehensive creative agency template. Features include modern design, admin dashboard, and complete booking system.',
  keywords: ['creative agency', 'template', 'nextjs', 'admin dashboard', 'modern design'],
  openGraph: {
    title: 'Creative Agency Template - Modern Digital Solutions',
    description: 'Transform your business with our comprehensive creative agency template.',
    type: 'website',
    // TODO: Replace with your og-image
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Agency Template',
    description: 'Transform your business with our comprehensive creative agency template.',
  }
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Services Preview */}
      <AnimatedSection>
        <ServicesPreview />
      </AnimatedSection>
      
      {/* Testimonials */}
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      
      {/* Call to Action */}
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
    </>
  )
}