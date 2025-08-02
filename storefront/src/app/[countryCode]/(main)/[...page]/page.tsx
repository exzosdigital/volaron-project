import { Metadata } from "next"
import { builder } from "@builder.io/sdk"
import { RenderBuilderContent } from "@modules/common/components/builder"

// Inicializar Builder.io
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "1a58e914e4e647c9b9b99c7d3cd39cba")

export const metadata: Metadata = {
  title: "Volaron Store - Equipamentos Industriais",
  description: "Moedores, Escadas e Equipamentos Industriais de Qualidade",
}

interface BuilderPageProps {
  params: {
    page?: string[]
    countryCode: string
  }
}

export default async function BuilderPage({ params }: BuilderPageProps) {
  const { countryCode, page = [] } = params
  const urlPath = `/${countryCode}/${page.join("/")}`.replace(/\/$/, "")

  const content = await builder
    .get("page", {
      userAttributes: { urlPath },
      options: { countryCode },
      locale: countryCode,
      prerender: false,
    })
    .toPromise()

  return <RenderBuilderContent content={content} model="page" locale={countryCode} />
}