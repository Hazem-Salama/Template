'use client'

import PortfolioHero from './PortfolioHero'
import PortfolioGrid from './PortfolioGrid'
import PortfolioCTA from './PortfolioCTA'
import AnimatedSection from '../AnimatedSection'

export default function PortfolioClient() {
  return (
    <>
      {/* Portfolio Hero Section */}
      <PortfolioHero />
      
      {/* Portfolio Grid */}
      <AnimatedSection>
        <PortfolioGrid />
      </AnimatedSection>
      
      {/* Portfolio CTA */}
      <AnimatedSection>
        <PortfolioCTA />
      </AnimatedSection>
    </>
  )
}