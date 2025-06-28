// app/services/branding/page.tsx - Template Ready
import { Metadata } from 'next'
import BrandingClient from '@/components/Branding/BrandingClient'

// Template configuration - customize for your agency
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Agency Name', // Update with your agency name
    tagline: 'Creative Solutions', // Update with your tagline
    website: 'https://youragency.com' // Update with your website
  },
  seo: {
    title: 'Branding Services', // Customize page title
    description: 'Professional branding services including logo design, brand guidelines, visual identity systems, and brand strategy.', // Customize description
    keywords: 'branding services, logo design, brand identity, visual identity, brand guidelines, brand strategy, brand development, corporate branding', // Customize keywords
    ogImage: '/images/branding-og.jpg' // Update with your OG image path
  }
}

export const metadata: Metadata = {
  title: `${TEMPLATE_CONFIG.seo.title} - ${TEMPLATE_CONFIG.company.name}`,
  description: TEMPLATE_CONFIG.seo.description,
  keywords: TEMPLATE_CONFIG.seo.keywords,
  openGraph: {
    title: `${TEMPLATE_CONFIG.seo.title} - ${TEMPLATE_CONFIG.company.name}`,
    description: TEMPLATE_CONFIG.seo.description,
    type: 'website',
    images: [TEMPLATE_CONFIG.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TEMPLATE_CONFIG.seo.title} - ${TEMPLATE_CONFIG.company.name}`,
    description: TEMPLATE_CONFIG.seo.description,
  }
}

export default function BrandingPage() {
  return <BrandingClient />
}

/* 
🎯 TEMPLATE-READY BRANDING PAGE

CUSTOMIZATION POINTS:
✅ Company name and tagline
✅ SEO metadata (title, description, keywords)
✅ Open Graph and Twitter card settings
✅ Image paths for social sharing

TO CUSTOMIZE:
1. Update TEMPLATE_CONFIG with your agency details
2. Replace ogImage path with your actual image
3. Customize SEO content for your target audience
4. Update keywords for your market

The page is ready to use immediately and SEO-optimized!
*/