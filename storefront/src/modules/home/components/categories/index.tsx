import Link from "next/link"
import Image from "next/image"
import { 
  Wrench, 
  Ladder, 
  Trees, 
  Cog, 
  Saw, 
  RollingPin, 
  Sparkles, 
  WashingMachine 
} from "lucide-react"

const categories = [
  {
    id: "moedores",
    name: "Moedores",
    icon: Cog,
    color: "bg-blue-100",
    href: "/moedores",
    description: "Industriais e domésticos"
  },
  {
    id: "escadas",
    name: "Escadas",
    icon: Ladder,
    color: "bg-yellow-100",
    href: "/escadas",
    description: "Alumínio e fibra"
  },
  {
    id: "jardinagem",
    name: "Jardinagem",
    icon: Trees,
    color: "bg-green-100",
    href: "/jardinagem",
    description: "Ferramentas e equipamentos"
  },
  {
    id: "raladores",
    name: "Raladores",
    icon: Wrench,
    color: "bg-purple-100",
    href: "/raladores",
    description: "Profissionais"
  },
  {
    id: "trituradores",
    name: "Trituradores",
    icon: Sparkles,
    color: "bg-red-100",
    href: "/trituradores",
    description: "Alta performance"
  },
  {
    id: "serras-de-fita",
    name: "Serras de Fita",
    icon: Saw,
    color: "bg-indigo-100",
    href: "/serras-de-fita",
    description: "Para açougues"
  },
  {
    id: "cilindros",
    name: "Cilindros de Massa",
    icon: RollingPin,
    color: "bg-pink-100",
    href: "/cilindros-de-massa",
    description: "Padarias e pizzarias"
  },
  {
    id: "lavanderia",
    name: "Lavanderia",
    icon: WashingMachine,
    color: "bg-cyan-100",
    href: "/lavanderia",
    description: "Soluções práticas"
  }
]

export default function CategoriesSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Categorias Principais</h2>
          <Link 
            href="/categorias" 
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            Ver todas →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                href={category.href}
                className="group flex flex-col items-center p-4 rounded-lg hover:shadow-lg transition-all"
              >
                <div className={`${category.color} p-4 rounded-full mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="font-medium text-gray-900 text-center mb-1">{category.name}</h3>
                <p className="text-xs text-gray-600 text-center">{category.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}