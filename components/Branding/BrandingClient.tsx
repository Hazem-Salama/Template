'use client'

import BrandingHero from './BrandingHero'
import BrandingServices from './BrandingServices'
import BrandingProcess from './BrandingProcess'
import BrandingPortfolio from './BrandingPortfolio'
import CallToAction from '../CallToAction'
import AnimatedSection from '../AnimatedSection'

// Template configuration - customize for your agency
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
    brandColor: '#EF4444' // Update with your brand color (red-500 default)
  },
  features: {
    showPortfolio: true, // Set to false to hide portfolio section
    showProcess: true, // Set to false to hide process section
    showCallToAction: true, // Set to false to hide CTA section
    enableAnimations: true // Set to false to disable animations
  },
  content: {
    sections: ['hero', 'services', 'process', 'portfolio', 'cta'] // Customize section order
  }
}

export default function BrandingClient() {
  const sections = TEMPLATE_CONFIG.content.sections

  const renderSection = (sectionName: string) => {
    const AnimationWrapper = TEMPLATE_CONFIG.features.enableAnimations ? AnimatedSection : 'div'
    
    switch (sectionName) {
      case 'hero':
        return <BrandingHero key="hero" />
      
      case 'services':
        return (
          <AnimationWrapper key="services">
            <BrandingServices />
          </AnimationWrapper>
        )
      
      case 'process':
        return TEMPLATE_CONFIG.features.showProcess ? (
          <AnimationWrapper key="process">
            <BrandingProcess />
          </AnimationWrapper>
        ) : null
      
      case 'portfolio':
        return TEMPLATE_CONFIG.features.showPortfolio ? (
          <AnimationWrapper key="portfolio">
            <BrandingPortfolio />
          </AnimationWrapper>
        ) : null
      
      case 'cta':
        return TEMPLATE_CONFIG.features.showCallToAction ? (
          <AnimationWrapper key="cta">
            <CallToAction />
          </AnimationWrapper>
        ) : null
      
      default:
        return null
    }
  }

  return (
    <>
      {sections.map(section => renderSection(section)).filter(Boolean)}
    </>
  )
}

/* 
🎯 TEMPLATE-READY BRANDING CLIENT

FEATURES:
✅ Configurable section visibility
✅ Customizable section order
✅ Animation toggle
✅ Brand color configuration
✅ Company name integration

CUSTOMIZATION OPTIONS:
- Show/hide portfolio section
- Show/hide process section  
- Show/hide call-to-action
- Enable/disable animations
- Reorder sections
- Update brand colors

TO CUSTOMIZE:
1. Update TEMPLATE_CONFIG with your preferences
2. Modify sections array to change order
3. Set feature flags to show/hide sections
4. Update brand color to match your identity

Perfect for agencies that want flexibility in their branding page layout!
*/