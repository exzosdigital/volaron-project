// Configuração da API do Medusa
const MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "https://backend-production-c461d.up.railway.app"

export const medusaClient = {
  baseUrl: MEDUSA_BACKEND_URL,
  
  // Headers padrão para todas as requisições
  defaultHeaders: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },

  // Método genérico para fazer requisições
  async request(path: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${path}`
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.defaultHeaders,
          ...options.headers,
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Medusa API error:", error)
      throw error
    }
  },

  // Métodos específicos
  products: {
    list: (params?: Record<string, any>) => {
      const queryString = params ? `?${new URLSearchParams(params).toString()}` : ""
      return medusaClient.request(`/store/products${queryString}`)
    },
    
    get: (id: string) => {
      return medusaClient.request(`/store/products/${id}`)
    },
    
    search: async (query: string) => {
      // Integração com MeiliSearch
      const meiliHost = process.env.NEXT_PUBLIC_MEILISEARCH_HOST
      const meiliKey = process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY
      
      if (!meiliHost || !meiliKey) {
        // Fallback para busca simples via Medusa
        return medusaClient.request(`/store/products?q=${encodeURIComponent(query)}`)
      }
      
      try {
        const response = await fetch(`${meiliHost}/indexes/products/search`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${meiliKey}`,
          },
          body: JSON.stringify({
            q: query,
            limit: 20,
          }),
        })
        
        return await response.json()
      } catch (error) {
        console.error("MeiliSearch error:", error)
        // Fallback para busca via Medusa
        return medusaClient.request(`/store/products?q=${encodeURIComponent(query)}`)
      }
    },
  },

  categories: {
    list: () => {
      return medusaClient.request("/store/product-categories")
    },
    
    get: (id: string) => {
      return medusaClient.request(`/store/product-categories/${id}`)
    },
  },

  cart: {
    create: () => {
      return medusaClient.request("/store/carts", {
        method: "POST",
      })
    },
    
    get: (id: string) => {
      return medusaClient.request(`/store/carts/${id}`)
    },
    
    addItem: (cartId: string, variantId: string, quantity: number) => {
      return medusaClient.request(`/store/carts/${cartId}/line-items`, {
        method: "POST",
        body: JSON.stringify({
          variant_id: variantId,
          quantity,
        }),
      })
    },
    
    updateItem: (cartId: string, lineId: string, quantity: number) => {
      return medusaClient.request(`/store/carts/${cartId}/line-items/${lineId}`, {
        method: "POST",
        body: JSON.stringify({ quantity }),
      })
    },
    
    removeItem: (cartId: string, lineId: string) => {
      return medusaClient.request(`/store/carts/${cartId}/line-items/${lineId}`, {
        method: "DELETE",
      })
    },
  },

  customer: {
    create: (data: any) => {
      return medusaClient.request("/store/customers", {
        method: "POST",
        body: JSON.stringify(data),
      })
    },
    
    login: (email: string, password: string) => {
      return medusaClient.request("/store/auth", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      })
    },
    
    get: (token: string) => {
      return medusaClient.request("/store/customers/me", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
    },
  },

  regions: {
    list: () => {
      return medusaClient.request("/store/regions")
    },
  },
}

export default medusaClient