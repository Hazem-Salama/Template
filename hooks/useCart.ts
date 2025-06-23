'use client'

import { useState, useEffect } from 'react'
import { CartService, AddToCartPayload } from '@/types/cart'

export function useCart() {
  const [cartItems, setCartItems] = useState<CartService[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('serviceCart')
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        setCartItems(parsedCart)
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('serviceCart', JSON.stringify(cartItems))
        // Dispatch event for navbar to update
        window.dispatchEvent(new Event('cartUpdated'))
      } catch (error) {
        console.error('Error saving cart to localStorage:', error)
      }
    }
  }, [cartItems, isLoaded])

  const addToCart = ({ service, quantity = 1 }: AddToCartPayload) => {
    const newItem: CartService = {
      ...service,
      id: Date.now().toString() + Math.random().toString(36),
      quantity
    }

    setCartItems(prev => {
      // Check if service already exists (by title and category)
      const existingIndex = prev.findIndex(
        item => item.title === service.title && item.category === service.category
      )

      if (existingIndex >= 0) {
        // Update quantity if service exists
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        }
        return updated
      } else {
        // Add new service
        return [...prev, newItem]
      }
    })
  }

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(id)
      return
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.basePrice * item.quantity), 0)
  }

  const calculateTotal = () => {
    return calculateSubtotal() // Can add taxes, discounts, etc. later
  }

  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const isInCart = (title: string, category: string) => {
    return cartItems.some(item => item.title === title && item.category === category)
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    calculateSubtotal,
    calculateTotal,
    getItemCount,
    isInCart,
    isLoaded
  }
}