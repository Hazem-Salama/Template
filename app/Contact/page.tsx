// app/contact/page.tsx
import { Metadata } from 'next'
import ContactClient from '@/components/Contact/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us - Unlimited Creative Agency',
  description: 'Ready to transform your brand? Get in touch with our creative team for a free strategy consultation. Choose from multiple contact options: book a call, start live chat, send an email, or schedule an office visit.',
  keywords: 'contact unlimited creative agency, free consultation, creative services quote, project inquiry, brand transformation, design agency contact, strategy call, live chat support',
  openGraph: {
    title: 'Contact Us - Unlimited Creative Agency',
    description: 'Ready to transform your brand? Contact our creative team for a free strategy consultation.',
    type: 'website',
    images: ['/images/contact-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Unlimited Creative Agency',
    description: 'Ready to transform your brand? Contact our creative team for a free strategy consultation.',
  }
}

export default function ContactPage() {
  return <ContactClient />
}