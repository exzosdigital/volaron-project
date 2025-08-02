import HeroSection from "@modules/home/components/hero"
import CategoriesSection from "@modules/home/components/categories"
import FeaturedProducts from "@modules/home/components/featured-products"
import BenefitsBar from "@modules/home/components/benefits-bar"
import PromoSection from "@modules/home/components/promo-section"
import NewsletterSection from "@modules/home/components/newsletter"

export const metadata = {
  title: "Volaron Comercial - Equipamentos Profissionais, Jardinagem e Mais",
  description: "Loja especializada em moedores, escadas, equipamentos de jardinagem, raladores, trituradores e muito mais. Parcelamento em até 12x sem juros e PIX com 10% de desconto.",
  keywords: "moedores, escadas, jardinagem, raladores, trituradores, serras de fita, cilindros de massa, equipamentos profissionais",
  openGraph: {
    title: "Volaron Comercial - Equipamentos Profissionais",
    description: "Os melhores equipamentos profissionais com garantia de fábrica. Parcelamento em 12x sem juros!",
    images: ["/images/og-volaron.jpg"],
    siteName: "Volaron Comercial",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volaron Comercial - Equipamentos Profissionais",
    description: "Os melhores equipamentos profissionais com garantia de fábrica.",
    images: ["/images/og-volaron.jpg"],
  },
  alternates: {
    canonical: "https://www.volaron.com.br",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  return (
    <>
      {/* Barra de Benefícios */}
      <BenefitsBar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Categorias */}
      <CategoriesSection />

      {/* Produtos em Destaque */}
      <FeaturedProducts />

      {/* Seção Promocional */}
      <PromoSection />

      {/* Newsletter */}
      <NewsletterSection />
    </>
  )
}
