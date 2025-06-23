import ConsultingHero from '@/components/Consulting/ConsultingHero'
import ConsultingServices from '@/components/Consulting/ConsultingServices'
import ConsultingProcess from '@/components/Consulting/ConsultingProcess'
import ConsultingBenefits from '@/components/Consulting/ConsultingBenefits'
import ConsultingTestimonials from '@/components/Consulting/ConsultingTestimonials'
import ConsultingFAQ from '@/components/Consulting/ConsultingFAQ'
import ConsultingCTA from '@/components/Consulting/ConsultingCTA'

export const metadata = {
  title: 'Strategy Consulting | Expert Business & Digital Strategy Services',
  description: 'Expert guidance to help you make informed decisions about your brand, digital presence, and marketing. Strategic planning for business growth and transformation.',
  keywords: 'strategy consulting, business strategy, digital transformation, brand positioning, market research, competitive analysis, growth strategy',
}

export default function ConsultingPage() {
  return (
    <main className="min-h-screen">
      <ConsultingHero />
      <ConsultingServices />
      <ConsultingProcess />
      <ConsultingBenefits />
      <ConsultingTestimonials />
      <ConsultingFAQ />
      <ConsultingCTA />
    </main>
  )
}