"use client"

import { useCart } from "@medusajs/nextjs"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export function CartButton() {
  const { cart } = useCart()
  const itemCount = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0

  return (
    <Link 
      href="/cart" 
      className="relative flex flex-col items-center text-gray-700 hover:text-orange-600 transition-colors"
    >
      <div className="relative">
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </div>
      <span className="text-xs mt-1">Carrinho</span>
    </Link>
  )
}
