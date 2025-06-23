import ROIAnalysisHero from '@/components/roi-analysis/ROIAnalysisHero'
import ROIAnalysisForm from '@/components/roi-analysis/ROIAnalysisForm'
import ROIAnalysisFeatures from '@/components/roi-analysis/ROIAnalysisFeatures'
import ROIAnalysisProcess from '@/components/roi-analysis/ROIAnalysisProcess'
import ROIAnalysisDeliverables from '@/components/roi-analysis/ROIAnalysisDeliverables'
import ROIAnalysisTestimonials from '@/components/roi-analysis/ROIAnalysisTestimonials'
import ROIAnalysisCTA from '@/components/roi-analysis/ROIAnalysisCTA'

export const metadata = {
  title: 'Detailed ROI Analysis | Custom Strategy Consulting ROI Report',
  description: 'Get a comprehensive, personalized ROI analysis for your business. Our detailed report includes custom projections, implementation roadmap, and strategic recommendations.',
  keywords: 'detailed ROI analysis, custom ROI report, strategy consulting analysis, business ROI assessment, strategic planning ROI',
}

export default function ROIAnalysisPage() {
  return (
    <main className="min-h-screen">
      <ROIAnalysisHero />
      <ROIAnalysisForm />
      <ROIAnalysisFeatures />
      <ROIAnalysisProcess />
      <ROIAnalysisDeliverables />
      <ROIAnalysisTestimonials />
      <ROIAnalysisCTA />
    </main>
  )
}