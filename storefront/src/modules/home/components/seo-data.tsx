// Dados estruturados para SEO
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Volaron Comercial",
  "alternateName": "Volaron",
  "url": "https://www.volaron.com.br",
  "description": "Loja especializada em equipamentos profissionais: moedores, escadas, jardinagem e mais. Parcelamento em até 12x sem juros.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.volaron.com.br/busca?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Volaron Comercial",
  "url": "https://www.volaron.com.br",
  "logo": "https://www.volaron.com.br/images/logo.png",
  "description": "Loja de equipamentos profissionais e utilidades domésticas desde 1990.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Araras",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-18-3643-1990",
    "contactType": "sales",
    "areaServed": "BR",
    "availableLanguage": "Portuguese",
    "contactOption": "TollFree"
  },
  "sameAs": [
    "https://www.facebook.com/volaroncomercial",
    "https://www.instagram.com/volaroncomercial",
    "https://wa.me/551836431990"
  ]
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Volaron Comercial",
  "image": "https://www.volaron.com.br/images/loja-fisica.jpg",
  "@id": "https://www.volaron.com.br",
  "url": "https://www.volaron.com.br",
  "telephone": "+55-18-3643-1990",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Centro",
    "addressLocality": "Araras",
    "addressRegion": "SP",
    "postalCode": "13600-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -22.3569,
    "longitude": -47.3847
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "acceptsReservations": false,
  "paymentAccepted": "Cash, Credit Card, PIX",
  "currenciesAccepted": "BRL"
}

export function generateProductJsonLd(product: any) {
  const variant = product.variants?.[0]
  const price = variant?.prices?.[0]
  
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": product.images?.map((img: any) => img.url) || [product.thumbnail],
    "brand": {
      "@type": "Brand",
      "name": product.metadata?.brand || "Volaron"
    },
    "sku": variant?.sku || product.id,
    "mpn": variant?.sku || product.id,
    "offers": {
      "@type": "Offer",
      "url": `https://www.volaron.com.br/produtos/${product.handle}`,
      "priceCurrency": "BRL",
      "price": price?.amount ? (price.amount / 100).toFixed(2) : "0.00",
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "itemCondition": "https://schema.org/NewCondition",
      "availability": variant?.inventory_quantity > 0 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Volaron Comercial"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  }
}