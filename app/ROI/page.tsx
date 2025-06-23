import ROIHero from '@/components/ROI/ROIHero'
import ROICalculator from '@/components/ROI/ROICalculator'
import ROIMethodology from '@/components/ROI/ROIMethodology'
import ROIBenchmarks from '@/components/ROI/ROIBenchmarks'
import ROITestimonials from '@/components/ROI/ROITestimonials'
import ROICTA from '@/components/ROI/ROICTA'

export const metadata = {
  title: 'ROI Estimate Calculator | Strategy Consulting Investment Returns',
  description: 'Calculate your potential return on investment with our strategy consulting services. See how much revenue growth you can expect from strategic planning.',
  keywords: 'ROI calculator, strategy consulting ROI, business strategy returns, consulting investment, revenue growth calculator',
}

export default function ROIEstimatePage() {
  return (
    <main className="min-h-screen">
      <ROIHero />
      <ROICalculator />
      <ROIMethodology />
      <ROIBenchmarks />
      <ROITestimonials />
      <ROICTA />
    </main>
  )
}