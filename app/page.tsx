// app/page.tsx
import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ServicesPreview from '@/components/Services/ServicesPreview' // Make sure path is correct
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Unlimited Creative Agency - Premium Digital Marketing & Design',
  description: 'Transform your brand with unlimited creative solutions. Expert branding, UI/UX design, web development, and digital marketing services.',
  keywords: 'creative agency, branding, web design, digital marketing, UI/UX design',
  openGraph: {
    title: 'Unlimited Creative Agency - Premium Digital Marketing & Design',
    description: 'Transform your brand with unlimited creative solutions.',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unlimited Creative Agency',
    description: 'Transform your brand with unlimited creative solutions.',
  }
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Services Preview - NO PROPS NEEDED */}
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