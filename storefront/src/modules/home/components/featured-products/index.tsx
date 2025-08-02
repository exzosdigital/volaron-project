"use client"

import { useProducts } from "@medusajs/nextjs"
import ProductCard from "@modules/home/components/product-card"
import { Loader2 } from "lucide-react"

export default function FeaturedProducts() {
  const { products, isLoading } = useProducts({
    limit: 8,
    tags: ["featured"],
    expand: "variants,images"
  })

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Produtos em Destaque</h2>
            <p className="text-gray-600 mt-1">Equipamentos selecionados com preços especiais</p>
          </div>
          <a 
            href="/produtos" 
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}