'use client'

import DigitalMarketingHero from './DigitalMarketingHero'
import DigitalMarketingServices from './DigitalMarketingServices'
import DigitalMarketingProcess from './DigitalMarketingProcess'
import DigitalMarketingPortfolio from './DigitalMarketingPortfolio'
import CallToAction from '../CallToAction'
import AnimatedSection from '../AnimatedSection'

export default function DigitalMarketingClient() {
  return (
    <>
      {/* Digital Marketing Hero Section */}
      <DigitalMarketingHero />
      
      {/* Digital Marketing Services */}
      <AnimatedSection>
        <DigitalMarketingServices />
      </AnimatedSection>
      
      {/* Digital Marketing Process */}
      <AnimatedSection>
        <DigitalMarketingProcess />
      </AnimatedSection>
      
      {/* Call to Action */}
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
    </>
  )
}