'use client'

import BrandingHero from './BrandingHero'
import BrandingServices from './BrandingServices'
import BrandingProcess from './BrandingProcess'
import BrandingPortfolio from './BrandingPortfolio'
import CallToAction from '../CallToAction'
import AnimatedSection from '../AnimatedSection'

// ===== TEMPLATE CONFIGURATION =====
// Customize these settings to match your agency's branding and preferences
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
    brandColor: '#3B82F6', // Unified blue color to match about components
    accentColor: '#2563EB' // Slightly darker blue for hover states
  },
  features: {
    showPortfolio: true, // Set to false to hide portfolio section
    showProcess: true, // Set to false to hide process section
    showCallToAction: true, // Set to false to hide CTA section
    enableAnimations: true // Set to false to disable animations
  },
  content: {
    // Define the order of sections - customize as needed
    sections: ['hero', 'services', 'process', 'portfolio', 'cta']
  },
  seo: {
    // SEO-friendly section IDs for anchor links
    heroId: 'branding-hero',
    servicesId: 'branding-services', 
    processId: 'branding-process',
    portfolioId: 'branding-portfolio',
    ctaId: 'branding-cta'
  }
}

export default function BrandingClient() {
  const sections = TEMPLATE_CONFIG.content.sections

  const renderSection = (sectionName: string) => {
    const AnimationWrapper = TEMPLATE_CONFIG.features.enableAnimations ? AnimatedSection : 'div'
    
    switch (sectionName) {
      case 'hero':
        return (
          <div key="hero" id={TEMPLATE_CONFIG.seo.heroId}>
            <BrandingHero />
          </div>
        )
      
      case 'services':
        return (
          <AnimationWrapper key="services">
            <div id={TEMPLATE_CONFIG.seo.servicesId}>
              <BrandingServices />
            </div>
          </AnimationWrapper>
        )
      
      case 'process':
        return TEMPLATE_CONFIG.features.showProcess ? (
          <AnimationWrapper key="process">
            <div id={TEMPLATE_CONFIG.seo.processId}>
              <BrandingProcess />
            </div>
          </AnimationWrapper>
        ) : null
      
      case 'portfolio':
        return TEMPLATE_CONFIG.features.showPortfolio ? (
          <AnimationWrapper key="portfolio">
            <div id={TEMPLATE_CONFIG.seo.portfolioId}>
              <BrandingPortfolio />
            </div>
          </AnimationWrapper>
        ) : null
      
      case 'cta':
        return TEMPLATE_CONFIG.features.showCallToAction ? (
          <AnimationWrapper key="cta">
            <div id={TEMPLATE_CONFIG.seo.ctaId}>
              <CallToAction />
            </div>
          </AnimationWrapper>
        ) : null
      
      default:
        return null
    }
  }

  return (
    <main className="overflow-hidden">
      {/* Render sections in the order specified in config */}
      {sections.map(section => renderSection(section)).filter(Boolean)}
      
      {/* Optional: Add schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Branding Services",
            "provider": {
              "@type": "Organization",
              "name": TEMPLATE_CONFIG.company.name
            },
            "serviceType": "Brand Identity Design",
            "description": "Professional branding services including logo design, brand guidelines, visual identity systems, and brand strategy.",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Branding Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Logo Design"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Brand Guidelines"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Visual Identity System"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Brand Strategy"
                  }
                }
              ]
            }
          })
        }}
      />
    </main>
  )
}

/* 
🎯 UNIFIED BRANDING CLIENT - TEMPLATE READY

FEATURES:
✅ Unified styling with about components
✅ Blue color scheme consistency 
✅ Configurable section visibility
✅ Customizable section order
✅ Animation toggle
✅ SEO-friendly structure
✅ Schema.org structured data

CUSTOMIZATION OPTIONS:
- Show/hide portfolio section
- Show/hide process section  
- Show/hide call-to-action
- Enable/disable animations
- Reorder sections
- Update brand colors
- Customize company name
- Set SEO section IDs

TO CUSTOMIZE:
1. Update TEMPLATE_CONFIG with your preferences
2. Modify sections array to change order
3. Set feature flags to show/hide sections
4. Update brand colors to match your identity
5. Customize company name and SEO data
6. Toggle animations on/off

UNIFIED ELEMENTS:
- Blue color scheme (blue-500/blue-600)
- Consistent section spacing
- Same animation patterns
- Unified typography scale
- Matching component styling
- SEO optimization

SECTION ORDER (DEFAULT):
1. Hero - Main branding introduction
2. Services - Available branding services
3. Process - How we work methodology  
4. Portfolio - Success stories and case studies
5. CTA - Call-to-action for conversions

Perfect for agencies that want a flexible, SEO-optimized branding page with unified design!
*/