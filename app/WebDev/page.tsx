// app/services/web-development/page.tsx
import { Metadata } from 'next'
import WebDevClient from '@/components/WebDev/WebDevClient'

export const metadata: Metadata = {
  title: 'Web Development Services - Unlimited Creative Agency',
  description: 'Professional web development services including custom websites, e-commerce platforms, progressive web apps, and performance optimization. Build fast, secure, and scalable web solutions.',
  keywords: 'web development, custom websites, e-commerce development, progressive web apps, react development, next.js, performance optimization, responsive design',
  openGraph: {
    title: 'Web Development Services - Unlimited Creative Agency',
    description: 'Build fast, secure, and scalable websites that drive business growth.',
    type: 'website',
    images: ['/images/webdev-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services - Unlimited Creative Agency',
    description: 'Build fast, secure, and scalable websites that drive business growth.',
  }
}

export default function WebDevelopmentPage() {
  return <WebDevClient />
}