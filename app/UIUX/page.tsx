// app/services/ui-ux-design/page.tsx
import { Metadata } from 'next'
import UIUXClient from '@/components/UIUX/UIUXClient'

export const metadata: Metadata = {
  title: 'UI/UX Design Services - Unlimited Creative Agency',
  description: 'Professional UI/UX design services including user research, wireframing, prototyping, and interface design. Create user experiences that convert visitors into customers and drive business growth.',
  keywords: 'ui ux design, user experience design, interface design, wireframing, prototyping, user research, usability testing, conversion optimization, mobile app design',
  openGraph: {
    title: 'UI/UX Design Services - Unlimited Creative Agency',
    description: 'Create intuitive user experiences that delight customers and drive conversions.',
    type: 'website',
    images: ['/images/uiux-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Services - Unlimited Creative Agency',
    description: 'Create intuitive user experiences that delight customers and drive conversions.',
  }
}

export default function UIUXDesignPage() {
  return <UIUXClient />
}