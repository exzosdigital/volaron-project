# Novo Design Volaron Store 🚀

## Visão Geral

Este branch implementa o novo design da Volaron Store, totalmente integrado com a infraestrutura existente no Railway.

### ✨ Principais Melhorias

- **Design Moderno**: Interface inspirada em marketplaces modernos
- **SEO Otimizado**: Metadados completos e estrutura semântica
- **Performance**: Lazy loading, cache estratégico e otimização de imagens
- **Mobile First**: Design responsivo com foco em dispositivos móveis
- **Integração Railway**: Conexão completa com todos os serviços

## 🏗️ Arquitetura

### Frontend (Vercel)
- Next.js 14 com App Router
- TypeScript + Tailwind CSS
- ISR (Incremental Static Regeneration)
- Integração com MedusaJS

### Backend (Railway)
- **API**: `backend-production-c461d.up.railway.app`
- **Busca**: MeiliSearch
- **Storage**: MinIO (bucket: medusa-media)
- **Cache**: Redis
- **Database**: PostgreSQL

## 📦 Componentes Implementados

### Layout
- ✅ Header com busca integrada
- ✅ Menu de categorias
- ✅ Carrinho com contador
- ✅ Banner de benefícios

### Homepage
- ✅ Hero Section otimizada
- ✅ Grid de categorias
- ✅ Produtos em destaque
- ✅ Seção promocional
- ✅ Newsletter

### Produtos
- ✅ Card de produto com quantidade
- ✅ Integração com carrinho
- ✅ Indicador de desconto
- ✅ Gestão de estoque

## 🚀 Deploy

### 1. Configurar Variáveis de Ambiente

```bash
cp .env.template .env.local
```

Edite `.env.local` com as URLs do Railway:

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://backend-production-c461d.up.railway.app
NEXT_PUBLIC_SEARCH_ENDPOINT=https://meilisearch-production.up.railway.app
NEXT_PUBLIC_MINIO_ENDPOINT=https://bucket-production.up.railway.app
```

### 2. Deploy no Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 3. Configurar Domínio

1. No Vercel, adicione o domínio `volaron.com.br`
2. Configure os DNS no seu provedor
3. Ative HTTPS automático

## 📊 SEO e Performance

### Metadados Otimizados
- Title tags específicas por página
- Meta descriptions únicas
- Open Graph para redes sociais
- Schema.org para rich snippets

### Core Web Vitals
- LCP < 2.5s (Largest Contentful Paint)
- FID < 100ms (First Input Delay)
- CLS < 0.1 (Cumulative Layout Shift)

### Otimizações Implementadas
- Imagens com Next.js Image
- Fonts com next/font
- Bundle splitting automático
- Prefetch de rotas

## 🔧 Desenvolvimento Local

```bash
# Instalar dependências
cd storefront
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
npm run start
```

## 📱 Responsividade

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Componentes Adaptativos
- Menu mobile com drawer
- Grid responsivo de produtos
- Imagens otimizadas por dispositivo

## 🎨 Design System

### Cores
```css
--primary: #f97316 (Orange 600)
--secondary: #10b981 (Green 600)
--background: #ffffff
--text: #374151
```

### Tipografia
- Headings: Inter Bold
- Body: Inter Regular
- Tamanhos responsivos

## 📈 Próximos Passos

1. **Implementar páginas de categoria**
2. **Adicionar filtros avançados**
3. **Integrar checkout completo**
4. **Implementar área do cliente**
5. **Adicionar reviews de produtos**

## 🤝 Contribuindo

1. Crie um branch: `git checkout -b feature/nova-funcionalidade`
2. Commit: `git commit -m 'feat: adiciona nova funcionalidade'`
3. Push: `git push origin feature/nova-funcionalidade`
4. Abra um Pull Request

## 📞 Suporte

- **Técnico**: willrulli@exzos.com.br
- **Comercial**: (18) 3643-1990
- **WhatsApp**: (18) 3643-1990

---

Desenvolvido com ❤️ por [ExzosDigital](https://exzos.com.br)
