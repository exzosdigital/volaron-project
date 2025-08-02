import Link from "next/link"
import { ShoppingCart, Phone, ChevronDown, Search, User } from "lucide-react"
import { CartButton } from "./cart-button"

export default function Header() {
  return (
    <>
      {/* Banner de Benefícios */}
      <div className="bg-orange-500 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Vendas: (18) 3643-1990</span>
            </span>
            <span className="hidden md:block">Segunda à Sexta das 8h às 18h</span>
            <span className="font-bold">PIX com 10% de desconto • Parcelamento 12x sem juros</span>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <h1 className="text-3xl font-bold text-orange-600">VOLARON</h1>
              <span className="ml-2 text-sm text-gray-600">Comercial</span>
            </Link>

            {/* Barra de Busca */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Buscar produtos, categorias ou marcas..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-orange-600">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Ações do Usuário */}
            <div className="flex items-center gap-4">
              <Link 
                href="/account" 
                className="hidden md:flex flex-col items-center text-gray-700 hover:text-orange-600 transition-colors"
              >
                <User className="h-6 w-6" />
                <span className="text-xs mt-1">Minha Conta</span>
              </Link>

              <CartButton />
            </div>
          </div>
        </div>

        {/* Menu de Categorias */}
        <nav className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <ul className="flex items-center gap-6 py-3 overflow-x-auto">
              <li>
                <Link 
                  href="/moedores" 
                  className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium whitespace-nowrap"
                >
                  Moedores
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/escadas" 
                  className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium whitespace-nowrap"
                >
                  Escadas
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/jardinagem" 
                  className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-medium whitespace-nowrap"
                >
                  Jardinagem
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/raladores" 
                  className="text-gray-700 hover:text-orange-600 font-medium whitespace-nowrap"
                >
                  Raladores
                </Link>
              </li>
              <li>
                <Link 
                  href="/trituradores" 
                  className="text-gray-700 hover:text-orange-600 font-medium whitespace-nowrap"
                >
                  Trituradores
                </Link>
              </li>
              <li>
                <Link 
                  href="/serras-de-fita" 
                  className="text-gray-700 hover:text-orange-600 font-medium whitespace-nowrap"
                >
                  Serras de Fita
                </Link>
              </li>
              <li>
                <Link 
                  href="/cilindros-de-massa" 
                  className="text-gray-700 hover:text-orange-600 font-medium whitespace-nowrap"
                >
                  Cilindros de Massa
                </Link>
              </li>
              <li>
                <Link 
                  href="/lavanderia" 
                  className="text-gray-700 hover:text-orange-600 font-medium whitespace-nowrap"
                >
                  Lavanderia
                </Link>
              </li>
              <li>
                <Link 
                  href="/trending" 
                  className="flex items-center gap-1 text-orange-600 font-medium whitespace-nowrap"
                >
                  <span className="animate-pulse">🔥</span>
                  Produtos em Alta
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
