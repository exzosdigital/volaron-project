"use client"

import { Product } from "@medusajs/types"
import { useCart } from "@medusajs/nextjs"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { useState } from "react"
import { formatAmount } from "@lib/util/prices"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, updateItem, cart } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const variant = product.variants?.[0]
  if (!variant) return null

  const price = variant.calculated_price || variant.prices?.[0]
  const originalPrice = variant.original_price
  
  const discount = originalPrice && price ? 
    Math.round(((originalPrice.amount - price.amount) / originalPrice.amount) * 100) : 0

  const cartItem = cart?.items?.find(item => item.variant_id === variant.id)
  const isInCart = !!cartItem

  const handleAddToCart = async () => {
    if (!variant.id) return
    
    setIsAdding(true)
    try {
      if (isInCart && cartItem) {
        await updateItem({
          lineId: cartItem.id,
          quantity: cartItem.quantity + quantity
        })
      } else {
        await addItem({
          variantId: variant.id,
          quantity: quantity
        })
      }
      setQuantity(1)
    } catch (error) {
      console.error("Error adding to cart:", error)
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold z-10">
          {discount}% OFF
        </div>
      )}
      
      <Link href={`/produtos/${product.handle}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.thumbnail || "/images/placeholder-product.jpg"}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/produtos/${product.handle}`}>
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-orange-600">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-end gap-2 mb-3">
          {discount > 0 && originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatAmount({
                amount: originalPrice.amount,
                region: cart?.region,
                includeTaxes: false
              })}
            </span>
          )}
          {price && (
            <span className="text-xl font-bold text-orange-600">
              {formatAmount({
                amount: price.amount,
                region: cart?.region,
                includeTaxes: false
              })}
            </span>
          )}
        </div>

        {/* Seletor de Quantidade */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-gray-100"
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-gray-100"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isAdding || !variant.inventory_quantity}
            className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            {isAdding ? "Adicionando..." : isInCart ? "Adicionar Mais" : "Adicionar"}
          </button>
        </div>

        {variant.inventory_quantity === 0 && (
          <p className="text-red-600 text-sm mt-2">Produto esgotado</p>
        )}
      </div>
    </div>
  )
}