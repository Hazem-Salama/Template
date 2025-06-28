import type { Metadata } from 'next'
import './global.css'

// Template configuration - customize these values for your project
const TEMPLATE_CONFIG = {
  company: {
    name: 'Your Company' // Update with your company name
  },
  admin: {
    title: 'Admin Dashboard', // Customize dashboard title
    description: 'Admin dashboard for managing bookings, messages, and meetings' // Customize description
  }
}

export const metadata: Metadata = {
  title: `${TEMPLATE_CONFIG.admin.title} - ${TEMPLATE_CONFIG.company.name}`,
  description: TEMPLATE_CONFIG.admin.description,
  robots: 'noindex, nofollow', // Prevent search engines from indexing admin pages
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="admin-layout min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {children}
    </div>
  )
}

/* 
TODO: Template Customization Guide

1. TEMPLATE_CONFIG Object:
   - Update company.name with your business name
   - Customize admin.title for your dashboard
   - Modify admin.description for SEO purposes

2. Metadata Configuration:
   - The title and description are dynamically generated
   - robots meta tag prevents search engine indexing
   - Add additional meta tags as needed for your application

3. Global CSS:
   - Ensure './global.css' exists with admin-specific styles
   - The CSS should handle hiding main website navigation
   - Admin-specific styling should be included

4. Background Styling:
   - Default gradient uses blue theme
   - Easy to modify by changing the gradient classes
   - Can be customized through Tailwind configuration

5. Layout Structure:
   - Uses admin-layout class for specific styling
   - Ensures full viewport height coverage
   - Provides proper container for admin pages

6. Security Considerations:
   - robots meta tag prevents indexing
   - Consider adding additional security headers
   - Implement proper access control at the layout level

7. Performance Optimization:
   - Minimal layout overhead
   - Efficient CSS loading
   - Optimized for admin interface needs

8. Responsive Design:
   - Layout adapts to all screen sizes
   - Mobile-friendly admin interface
   - Proper spacing and typography

9. Accessibility:
   - Semantic HTML structure
   - Proper contrast ratios
   - Screen reader friendly layout

10. Additional Considerations:
    - Add error boundaries if needed
    - Implement loading states for layout
    - Consider adding breadcrumb navigation
    - Add proper logout handling at layout level
*/