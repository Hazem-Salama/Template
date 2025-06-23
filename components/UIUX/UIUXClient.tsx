'use client'

import UIUXHero from './UIUXHero'
import UIUXServices from './UIUXServices'
import UIUXProcess from './UIUXProcess'
import UIUXPortfolio from './UIUXPortfolio'
import CallToAction from '../CallToAction'
import AnimatedSection from '../AnimatedSection'

export default function UIUXClient() {
  return (
    <>
      {/* UI/UX Hero Section */}
      <UIUXHero />
      
      {/* UI/UX Services */}
      <AnimatedSection>
        <UIUXServices />
      </AnimatedSection>
      
      {/* UI/UX Process */}
      <AnimatedSection>
        <UIUXProcess />
      </AnimatedSection>
      
      {/* UI/UX Portfolio */}
      <AnimatedSection>
        <UIUXPortfolio />
      </AnimatedSection>
      
      {/* Call to Action */}
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
    </>
  )
}