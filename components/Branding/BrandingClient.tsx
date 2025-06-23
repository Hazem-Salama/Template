'use client'

import BrandingHero from './BrandingHero'
import BrandingServices from './BrandingServices'
import BrandingProcess from './BrandingProcess'
import BrandingPortfolio from './BrandingPortfolio'
import CallToAction from '../CallToAction'
import AnimatedSection from '../AnimatedSection'

export default function BrandingClient() {
  return (
    <>
      {/* Branding Hero Section */}
      <BrandingHero />
      
      {/* Branding Services */}
      <AnimatedSection>
        <BrandingServices />
      </AnimatedSection>
      
      {/* Branding Process */}
      <AnimatedSection>
        <BrandingProcess />
      </AnimatedSection>
      
      {/* Call to Action */}
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
    </>
  )
}