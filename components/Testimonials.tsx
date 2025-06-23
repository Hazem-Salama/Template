'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function Testimonials() {
  // Template testimonials data - replace with actual client testimonials
  const testimonials = [
    {
      name: 'John Richardson',
      company: 'Tech Innovations Inc.',
      text: 'Working with this agency transformed our entire digital presence. The results exceeded our expectations significantly. Their professionalism and creativity truly set them apart from other agencies.',
      logo: '/placeholder-logo-1.svg',
      avatar: '/placeholder-avatar-1.jpg'
    },
    {
      name: 'Sarah Chen',
      company: 'Global Marketing Solutions',
      text: 'Our marketing campaign achieved amazing results. Engagement rates increased by 250% and we achieved our goals ahead of schedule. A truly professional and creative team.',
      logo: '/placeholder-logo-2.svg',
      avatar: '/placeholder-avatar-2.jpg'
    },
    {
      name: 'Michael Torres',
      company: 'Digital Growth Partners',
      text: 'The mobile app development was an excellent experience. The design is outstanding and performance is exceptional. I highly recommend them for any tech project.',
      logo: '/placeholder-logo-3.svg',
      avatar: '/placeholder-avatar-3.jpg'
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Client <span className="text-blue-500">Success</span> Stories
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients say about working with us.
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Client Info Header */}
              <div className="flex items-center mb-6">
                {/* Avatar - TODO: Replace with actual client photos */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                  {/* Alternative: Use actual avatar images
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  */}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Rating and Company Logo */}
              <div className="flex items-center justify-between">
                {/* 5-star rating */}
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Company Logo - TODO: Replace with actual company logos */}
                <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-xs font-medium">
                    {testimonial.company.split(' ').map(w => w[0]).join('')}
                  </span>
                  {/* Alternative: Use actual company logos
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    width={48}
                    height={32}
                    className="object-contain opacity-60"
                  />
                  */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">4.9</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}