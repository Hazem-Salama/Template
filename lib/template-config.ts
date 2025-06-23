// lib/template-config.ts
// Template configuration - customize these values for your agency

export const templateConfig = {
  company: {
    name: process.env.COMPANY_NAME || 'Your Agency Name',
    email: process.env.COMPANY_EMAIL || 'hello@youragency.com',
    phone: process.env.COMPANY_PHONE || '+1-XXX-XXX-XXXX',
    address: process.env.COMPANY_ADDRESS || 'Your City, Your Country',
    website: process.env.COMPANY_WEBSITE || 'https://youragency.com',
    tagline: process.env.COMPANY_TAGLINE || 'Transforming ideas into extraordinary digital experiences'
  },
  
  branding: {
    primaryColor: process.env.BRAND_PRIMARY_COLOR || '#3B82F6',
    secondaryColor: process.env.BRAND_SECONDARY_COLOR || '#1F2937',
    accentColor: process.env.BRAND_ACCENT_COLOR || '#10B981'
  },
  
  business: {
    timezone: process.env.BUSINESS_TIMEZONE || 'EST',
    workingHours: process.env.BUSINESS_HOURS || 'Monday-Friday, 9 AM - 6 PM',
    responseTime: process.env.RESPONSE_TIME || '24 hours'
  },
  
  services: [
    {
      icon: '🎨',
      title: 'Branding & Design',
      description: 'Complete brand identity and visual design solutions',
      href: '/services/branding'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications',
      href: '/services/development'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      href: '/services/mobile'
    },
    {
      icon: '📊',
      title: 'Digital Marketing',
      description: 'Strategic digital marketing and SEO services',
      href: '/services/marketing'
    }
  ],

  // Call types for booking system
  callTypes: [
    {
      id: 'strategy-call',
      title: 'Strategy Consultation',
      duration: '30 minutes',
      subtitle: 'Free consultation to discuss your project goals and requirements'
    },
    {
      id: 'project-review',
      title: 'Project Review',
      duration: '45 minutes', 
      subtitle: 'Detailed review of your current project or requirements'
    },
    {
      id: 'technical-consultation',
      title: 'Technical Consultation',
      duration: '60 minutes',
      subtitle: 'In-depth technical discussion for complex projects'
    }
  ],

  // Contact form methods
  contactMethods: [
    { value: 'general-inquiry', label: 'General Inquiry' },
    { value: 'project-quote', label: 'Project Quote Request' },
    { value: 'support', label: 'Support Request' },
    { value: 'partnership', label: 'Partnership Inquiry' }
  ],

  // Social media links (optional)
  social: {
    linkedin: process.env.SOCIAL_LINKEDIN || '',
    twitter: process.env.SOCIAL_TWITTER || '',
    instagram: process.env.SOCIAL_INSTAGRAM || '',
    facebook: process.env.SOCIAL_FACEBOOK || ''
  }
}

export default templateConfig