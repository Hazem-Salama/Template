// app/about/page.tsx
import { Metadata } from 'next'
import AboutHero from '@/components/About/AboutHero'
import Mission from '@/components/About/Mission'
import HowWeWork from '@/components/About/HowWeWork'
import TeamSection from '@/components/About/TeamSection'
import CompanyStats from '@/components/About/CompanyStats'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'About Us - Unlimited Creative Agency',
  description: 'Learn about our mission, values, and the passionate team behind Unlimited Creative Agency. We transform ambitious brands through strategic design and data-driven marketing.',
  keywords: 'about unlimited creative agency, our mission, our team, company values, creative team',
  openGraph: {
    title: 'About Us - Unlimited Creative Agency',
    description: 'Meet the team and learn about our mission to transform ambitious brands.',
    type: 'website',
    images: ['/images/about-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Unlimited Creative Agency',
    description: 'Meet the team and learn about our mission to transform ambitious brands.',
  }
}

export default function AboutPage() {
  return (
    <>
      {/* About Hero Section */}
      <AboutHero />
      
      {/* Mission & Values */}
      <AnimatedSection>
        <Mission />
      </AnimatedSection>
      
      {/* Company Stats */}
      <AnimatedSection>
        <CompanyStats />
      </AnimatedSection>
      
      {/* How We Work */}
      <AnimatedSection>
        <HowWeWork />
      </AnimatedSection>
      
      {/* Team Section */}
      <AnimatedSection>
        <TeamSection />
      </AnimatedSection>
    </>
  )
}