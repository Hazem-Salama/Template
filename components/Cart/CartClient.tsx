'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CartHero from './CartHero'
import CartItems from './CartItems'
import CartSummary from './CartSummary'
import CheckoutForm from './CheckoutForm'
import { useCart } from '@/hooks/useCart'

export default function CartClient() {
  const [showCheckout, setShowCheckout] = useState(false)
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart()

  const handleProceedToCheckout = () => {
    setShowCheckout(true)
  }

  const handleBackToCart = () => {
    setShowCheckout(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [180, 0, 180],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!showCheckout ? (
            <>
              {/* Cart Hero Section */}
              <CartHero itemCount={cartItems.length} />

              {cartItems.length === 0 ? (
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 max-w-2xl mx-auto text-center">
                    <div className="text-6xl mb-6">🛒</div>
                    <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
                    <p className="text-gray-300 mb-8">
                      Start by exploring our services and adding them to your cart to get an estimated quote.
                    </p>
                    <motion.a
                      href="/Services"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg"
                    >
                      Browse Our Services
                    </motion.a>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Cart Items */}
                  <div className="lg:col-span-2">
                    <CartItems
                      items={cartItems}
                      onRemove={removeFromCart}
                      onUpdateQuantity={updateQuantity}
                    />
                  </div>

                  {/* Cart Summary */}
                  <div className="lg:col-span-1">
                    <CartSummary
                      items={cartItems}
                      total={calculateTotal()}
                      onProceedToCheckout={handleProceedToCheckout}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <CheckoutForm
              cartItems={cartItems}
              total={calculateTotal()}
              onBackToCart={handleBackToCart}
            />
          )}
        </div>
      </div>
    </div>
  )
}