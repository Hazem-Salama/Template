'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface CartHeroProps {
  itemCount: number
}

export default function CartHero({ itemCount }: CartHeroProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="text-center mb-12"
    >
      <motion.h1
        variants={fadeInUp}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Your Service <span className="text-red-500">Cart</span>
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        className="text-xl text-gray-300 max-w-3xl mx-auto mb-4"
      >
        Review your selected services and book a consultation to discuss final pricing and project details.
      </motion.p>
      {itemCount > 0 && (
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center space-x-2 text-gray-400"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">
            {itemCount} service{itemCount !== 1 ? 's' : ''} selected • Pricing is estimated and subject to consultation
          </span>
        </motion.div>
      )}
    </motion.div>
  )
}