'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function Testimonials() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  // Testimonials data with translations
  const testimonials = [
    {
      name: isRTL ? 'أحمد الشامي' : 'Ahmed Elshamy',
      company: isRTL ? 'مجموعة الشامي' : 'Elshamy Group',
      text: isRTL 
        ? 'عمل فريق انليميتد معنا على تطوير هويتنا التجارية وموقعنا الإلكتروني. النتائج تجاوزت توقعاتنا بشكل كبير. الاحترافية والإبداع يميزهم حقاً.'
        : 'Unlimited worked with us on developing our brand identity and website. The results exceeded our expectations significantly. Their professionalism and creativity truly sets them apart.',
      logo: '/ElShamy.svg'
    },
    {
      name: isRTL ? 'د. سارة الأمان' : 'Dr. Sarah Alamaan',
      company: isRTL ? 'مركز الأمان' : 'Alamaan Center',
      text: isRTL
        ? 'حملتنا التسويقية مع انليميتد حققت نتائج مذهلة. زادت معدلات التفاعل بنسبة 300% وحققنا أهدافنا في وقت قياسي. فريق محترف ومبدع.'
        : 'Our marketing campaign with Unlimited achieved amazing results. Engagement rates increased by 300% and we achieved our goals in record time. A professional and creative team.',
      logo: '/Alamaan.svg'
    },
    {
      name: isRTL ? 'محمد الإدريسي' : 'Mohamed Elidrissi',
      company: isRTL ? 'شركة الابتكار التقني' : 'Tech Innovation Co.',
      text: isRTL
        ? 'تطوير تطبيق الهاتف المحمول مع انليميتد كان تجربة رائعة. التصميم متميز والأداء ممتاز. أنصح بهم بقوة لأي مشروع تقني.'
        : 'Developing our mobile app with Unlimited was an excellent experience. The design is outstanding and performance is excellent. I highly recommend them for any tech project.',
      logo: '/ElShamy.svg' // Using placeholder logo
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
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
            className={`text-4xl md:text-5xl font-bold text-black mb-6 ${
              isRTL ? 'font-arabic' : ''
            }`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {isRTL ? (
              <>
                <span className="text-red-500">نجاح</span> عملائنا
              </>
            ) : (
              <>
                Client <span className="text-red-500">Success</span>
              </>
            )}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className={`text-xl text-gray-600 max-w-3xl mx-auto ${
              isRTL ? 'font-arabic' : ''
            }`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {isRTL 
              ? 'لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا عن العمل معنا.'
              : 'Don\'t just take our word for it. Here\'s what our clients say about working with us.'
            }
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className={`flex items-center mb-6 ${
                isRTL ? 'flex-row-reverse' : ''
              }`}>
                {/* Company Logo */}
                <div className={`w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full overflow-hidden ${
                  isRTL ? 'ml-4' : 'mr-4'
                }`}>
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    width={testimonial.company.includes('Alamaan') || testimonial.company.includes('الأمان') ? 120 : 64}
                    height={testimonial.company.includes('Alamaan') || testimonial.company.includes('الأمان') ? 120 : 64}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h4 className={`font-bold text-black ${isRTL ? 'font-arabic' : ''}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-gray-600 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <p className={`text-gray-700 leading-relaxed mb-6 ${
                isRTL ? 'font-arabic text-right' : ''
              }`}>
                "{testimonial.text}"
              </p>
              
              <div className={`flex items-center ${
                isRTL ? 'justify-end' : 'justify-start'
              }`}>
                <div className="flex text-red-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}