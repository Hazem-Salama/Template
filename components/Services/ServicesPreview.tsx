// components/ServicesPreview.tsx
'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ServiceCard from './ServiceCard'
import { staggerContainer, fadeInUp } from '@/lib/animations'

// Service data with fallback text to prevent Arabic showing in English
const getServices = (t: any, isRTL: boolean) => [
  {
    title: isRTL ? 'الهوية التجارية' : 'Branding',
    description: isRTL 
      ? 'أنشئ هوية تجارية قوية تتواصل مع جمهورك وتبني الثقة الدائمة.'
      : 'Create a powerful brand identity that resonates with your audience and builds lasting trust.',
    icon: "🎨",
    href: "/Branding",
    features: isRTL ? [
      "تصميم الشعار",
      "الهوية البصرية",
      "دليل العلامة التجارية",
      "التطبيقات الرقمية"
    ] : [
      "Logo Design",
      "Visual Identity", 
      "Brand Guidelines",
      "Digital Applications"
    ]
  },
  {
    title: isRTL ? 'تصميم واجهة المستخدم' : 'UI/UX Design',
    description: isRTL
      ? 'صمم تجارب مستخدم بديهية وجذابة تحول الزوار إلى عملاء.'
      : 'Design intuitive and engaging user experiences that convert visitors into customers.',
    icon: "💻",
    href: "/UIUX",
    features: isRTL ? [
      "بحث المستخدم",
      "تصميم واجهة المستخدم",
      "النماذج الأولية",
      "اختبار الاستخدام"
    ] : [
      "User Research",
      "UI Design",
      "Prototyping",
      "Usability Testing"
    ]
  },
  {
    title: isRTL ? 'تطوير المواقع' : 'Web Development',
    description: isRTL
      ? 'ابن مواقع سريعة وآمنة وقابلة للتطوير تعمل بامتياز على جميع الأجهزة.'
      : 'Build fast, secure, and scalable websites that perform excellently across all devices.',
    icon: "🌐",
    href: "/WebDev",
    features: isRTL ? [
      "مواقع مخصصة",
      "تطبيقات ويب",
      "التجارة الإلكترونية",
      "تحسين الأداء"
    ] : [
      "Custom Websites",
      "Web Applications",
      "E-commerce",
      "Performance Optimization"
    ]
  },
  {
    title: isRTL ? 'التسويق الرقمي' : 'Digital Marketing',
    description: isRTL
      ? 'استراتيجيات تسويقية مدفوعة بالبيانات تزيد الرؤية وتحقق نمواً قابلاً للقياس.'
      : 'Data-driven marketing strategies that increase visibility and drive measurable growth.',
    icon: "📈",
    href: "/DM",
    features: isRTL ? [
      "وسائل التواصل الاجتماعي",
      "إعلانات جوجل",
      "تحسين محركات البحث",
      "تحليل البيانات"
    ] : [
      "Social Media Marketing",
      "Google Ads",
      "SEO Optimization", 
      "Analytics & Insights"
    ]
  }
]

export default function ServicesPreview() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const services = getServices(t, isRTL)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-black mb-6"
          >
            {isRTL ? (
              <>
                <span className="text-red-500">خبرتنا</span>
              </>
            ) : (
              <>
                Our <span className="text-red-500">Expertise</span>
              </>
            )}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {isRTL 
              ? 'نحن نجمع بين التفكير الاستراتيجي والتنفيذ الإبداعي لتقديم حلول تحقق نمواً حقيقياً في الأعمال.'
              : 'We combine strategic thinking with creative execution to deliver solutions that drive real business growth.'
            }
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}