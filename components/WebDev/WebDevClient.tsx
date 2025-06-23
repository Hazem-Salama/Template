'use client'

import WebDevHero from './WebDevHero'
import WebDevServices from './WebDevServices'
import WebDevProcess from './WebDevProcess'
import CallToAction from '../CallToAction'
import AnimatedSection from '../AnimatedSection'

export default function WebDevClient() {
  return (
    <>
      {/* Web Development Hero Section */}
      <WebDevHero />
      
      {/* Web Development Services */}
      <AnimatedSection>
        <WebDevServices />
      </AnimatedSection>
      
      {/* Web Development Process */}
      <AnimatedSection>
        <WebDevProcess />
      </AnimatedSection>
      
      {/* Call to Action */}
      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>
    </>
  )
}