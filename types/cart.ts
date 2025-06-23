export interface CartService {
  id: string
  title: string
  category: string
  basePrice: number
  selectedOptions?: string[]
  customizations?: string
  quantity: number
  estimatedDuration: string
  description?: string
}

export interface CartState {
  items: CartService[]
  total: number
  itemCount: number
}

export interface AddToCartPayload {
  service: Omit<CartService, 'id' | 'quantity'>
  quantity?: number
}