import CareersHero from '@/components/careers/CareersHero'
import CareersValues from '@/components/careers/CareersValues'
import CareersOpenings from '@/components/careers/CareersOpenings'
import CareersBenefits from '@/components/careers/CareersBenefits'
import CareersLife from '@/components/careers/CareersLife'
import CareersTestimonials from '@/components/careers/CareersTestimonials'
import CareersCTA from '@/components/careers/CareersCTA'

export const metadata = {
  title: 'Careers | Join Our Creative Team | Unlimited Agency',
  description: 'Join our passionate team of creators, strategists, and innovators. Explore career opportunities in design, development, marketing, and strategy consulting.',
  keywords: 'careers, jobs, design jobs, development jobs, marketing careers, strategy consulting jobs, creative agency careers',
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <CareersHero />
      <CareersValues />
      <CareersOpenings />
      <CareersBenefits />
      <CareersLife />
      <CareersTestimonials />
      <CareersCTA />
    </main>
  )
}