import { Metadata } from "next"
import { builder } from "@builder.io/sdk"
import { RenderBuilderContent } from "@modules/common/components/builder"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

// Inicializar Builder.io
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "1a58e914e4e647c9b9b99c7d3cd39cba")

export const metadata: Metadata = {
  title: "Volaron Store - Equipamentos Industriais",
  description: "Moedores, Escadas e Equipamentos para Agricultura e Indústria - Volaron",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  // Buscar conteúdo Builder.io para a home page
  const content = await builder
    .get("page", {
      userAttributes: { urlPath: "/" },
      options: { countryCode },
      locale: countryCode,
      prerender: false,
    })
    .toPromise()

  return (
    <>
      {/* Renderizar conteúdo Builder.io se existir */}
      <RenderBuilderContent content={content} model="page" locale={countryCode} />
      
      {/* Conteúdo padrão Medusa - Hero e Produtos em destaque */}
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}