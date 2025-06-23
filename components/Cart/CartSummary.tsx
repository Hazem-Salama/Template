'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { CartService } from '@/types/cart'

interface CartSummaryProps {
  items: CartService[]
  total: number
  onProceedToCheckout: () => void
}

export default function CartSummary({ items, total, onProceedToCheckout }: CartSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.basePrice * item.quantity), 0)
  const serviceCount = items.length
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 sticky top-24"
    >
      <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
      
      {/* Service Breakdown */}
      <div className="space-y-3 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span className="text-gray-300 flex-1">
              {item.title}
              {item.quantity > 1 && (
                <span className="text-gray-400"> × {item.quantity}</span>
              )}
            </span>
            <span className="text-white font-medium">
              ${(item.basePrice * item.quantity).toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-white/20 pt-4 space-y-3">
        <div className="flex justify-between text-gray-300">
          <span>Services ({serviceCount})</span>
          <span>{totalQuantity} item{totalQuantity !== 1 ? 's' : ''}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Subtotal</span>
          <span>${subtotal.toLocaleString()}</span>
        </div>
        <div className="border-t border-white/20 pt-3">
          <div className="flex justify-between text-xl font-bold text-white">
            <span>Estimated Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Pricing Note */}
      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mt-6 mb-6">
        <div className="flex items-start space-x-2">
          <span className="text-yellow-400 text-lg">💡</span>
          <div>
            <h4 className="text-yellow-300 font-medium text-sm mb-1">Pricing Note</h4>
            <p className="text-yellow-200 text-xs leading-relaxed">
              This is an estimated total based on our standard pricing. Final pricing will be customized 
              during your consultation call based on your specific requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onProceedToCheckout}
        className="w-full bg-red-500 text-white py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg mb-4"
      >
        Book Strategy Call
      </motion.button>

      {/* Trust Indicators */}
      <div className="space-y-3 text-center">
        <div className="flex items-center justify-center space-x-2 text-gray-300 text-sm">
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Free consultation call</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-300 text-sm">
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>No upfront payment required</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-300 text-sm">
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Custom proposal included</span>
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="mt-6 pt-6 border-t border-white/20">
        <motion.a
          href="/services"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full text-center bg-white/20 text-white py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30"
        >
          Continue Shopping
        </motion.a>
      </div>
    </motion.div>
  )
}