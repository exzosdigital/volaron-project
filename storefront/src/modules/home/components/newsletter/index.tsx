"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      // Integração com backend Medusa
      const response = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage("Inscrição realizada com sucesso!")
        setEmail("")
      } else {
        throw new Error("Erro na inscrição")
      }
    } catch (error) {
      setMessage("Erro ao realizar inscrição. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-600 p-3 rounded-full">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Receba ofertas exclusivas
          </h2>
          <p className="text-gray-300 mb-8">
            Cadastre-se em nossa newsletter e receba descontos especiais, 
            lançamentos e conteúdo exclusivo sobre equipamentos profissionais.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Inscrever"}
            </button>
          </form>

          {message && (
            <p className={`mt-4 ${message.includes("sucesso") ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}

          <p className="text-xs text-gray-400 mt-6">
            Ao se inscrever, você concorda com nossa política de privacidade.
          </p>
        </div>
      </div>
    </section>
  )
}
