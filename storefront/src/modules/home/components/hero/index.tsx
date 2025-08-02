import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-orange-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Conteúdo */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Equipamentos profissionais com os{" "}
              <span className="text-orange-600">melhores preços</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Preparamos descontos especiais em moedores industriais, 
              escadas profissionais e equipamentos de jardinagem de alta qualidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                href="/ofertas"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center"
              >
                Ver Ofertas
              </Link>
              <Link 
                href="/categorias"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold border-2 border-orange-600 hover:bg-orange-50 transition-colors text-center"
              >
                Explorar Categorias
              </Link>
            </div>

            {/* Badges de confiança */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Garantia de Fábrica</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Produtos Originais</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Suporte Técnico</span>
              </div>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="relative">
            <div className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-2 rounded-bl-lg font-bold text-lg z-10">
              ATÉ 40% OFF
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/hero-volaron.jpg"
                alt="Equipamentos Profissionais Volaron"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Badge orgânico/qualidade */}
            <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              <span className="font-semibold">Qualidade Premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}