import SampleReportHero from '@/components/sample-report/SampleReportHero'
import SampleReportExecutiveSummary from '@/components/sample-report/SampleReportExecutiveSummary'
import SampleReportCurrentState from '@/components/sample-report/SampleReportCurrentState'
import SampleReportROIProjections from '@/components/sample-report/SampleReportROIProjections'
import SampleReportRecommendations from '@/components/sample-report/SampleReportRecommendations'
import SampleReportImplementation from '@/components/sample-report/SampleReportImplementation'
import SampleReportAppendix from '@/components/sample-report/SampleReportAppendix'

export const metadata = {
  title: 'Sample ROI Analysis Report | TechFlow Solutions Case Study',
  description: 'View a comprehensive sample of our detailed ROI analysis reports. See the depth and quality of insights provided in our strategic consulting assessments.',
  keywords: 'sample ROI report, strategy consulting report example, business analysis case study, ROI analysis sample',
}

export default function SampleReportPage() {
  return (
    <main className="min-h-screen bg-white">
      <SampleReportHero />
      <SampleReportExecutiveSummary />
      <SampleReportCurrentState />
      <SampleReportROIProjections />
      <SampleReportRecommendations />
      <SampleReportImplementation />
      <SampleReportAppendix />
    </main>
  )
}