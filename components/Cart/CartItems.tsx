'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CartService } from '@/types/cart'

interface CartItemsProps {
  items: CartService[]
  onRemove: (id: string) => void
  onUpdateQuantity: (id: string, quantity: number) => void
}

export default function CartItems({ items, onRemove, onUpdateQuantity }: CartItemsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-2xl font-bold text-white mb-6"
      >
        Selected Services
      </motion.h2>

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <span className="text-red-400 text-sm font-medium px-3 py-1 bg-red-500/20 rounded-full">
                    {item.category}
                  </span>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-400 hover:text-red-400 transition-colors p-2"
                  aria-label="Remove item"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {item.selectedOptions && item.selectedOptions.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-gray-300 text-sm font-medium mb-2">Included Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.selectedOptions.map((option, optionIndex) => (
                      <span
                        key={optionIndex}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.customizations && (
                <div className="mb-4">
                  <h4 className="text-gray-300 text-sm font-medium mb-2">Custom Requirements:</h4>
                  <p className="text-gray-300 text-sm bg-white/10 rounded-lg p-3">
                    {item.customizations}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-300 text-sm">Quantity:</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center justify-center"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-gray-300 text-sm">
                    <span className="font-medium">Duration:</span> {item.estimatedDuration}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">
                    ${(item.basePrice * item.quantity).toLocaleString()}
                  </div>
                  {item.quantity > 1 && (
                    <div className="text-gray-400 text-sm">
                      ${item.basePrice.toLocaleString()} each
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}