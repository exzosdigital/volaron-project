# Builder.io Integration - Volaron Store

Este documento descreve a integração Builder.io no Volaron Store para gerenciamento visual de conteúdo.

## 🎯 Configuração

### 1. API Key
A API key do Builder.io já está configurada no Railway:
```
NEXT_PUBLIC_BUILDER_API_KEY=1a58e914e4e647c9b9b99c7d3cd39cba
```

### 2. Preview URL
Configure no Builder.io Dashboard:
- **Preview URL**: `https://storefront-production-bd8d.up.railway.app`
- **Model**: Page

## 🛠️ Arquivos Adicionados

### Componente Builder.io
```
storefront/src/modules/common/components/builder/index.tsx
```
- Componente React para renderizar conteúdo Builder.io
- Suporte a preview mode
- Fallback para 404 quando conteúdo não existe

### Página Dinâmica
```
storefront/src/app/[countryCode]/(main)/[...page]/page.tsx
```
- Permite criação de páginas customizadas via Builder.io
- URLs dinâmicas baseadas no país/região
- Integração com sistema de localização do Medusa

### Home Page Atualizada
```
storefront/src/app/[countryCode]/(main)/page.tsx
```
- Integra Builder.io na página inicial
- Mantém funcionalidades existentes (Hero, FeaturedProducts)
- Conteúdo Builder.io renderizado no topo

## 🚀 Como Usar

### 1. Criar Página no Builder.io
1. Acesse [Builder.io Dashboard](https://builder.io/content)
2. Clique em **"+ New Entry"** no Page Model
3. Configure:
   - **Name**: "Página Personalizada"
   - **URL**: "/exemplo-pagina" 
4. Use o editor visual drag-and-drop
5. **Publish** para ativar

### 2. Editar Home Page
1. No Builder.io, crie entrada para URL "/"
2. Adicione elementos visuais
3. O conteúdo aparecerá acima do Hero section

### 3. Páginas Personalizadas
- URLs como `/br/promocoes` serão automaticamente capturadas
- Conteúdo renderizado via Builder.io
- Fallback para 404 se página não existir

## 🔧 Benefícios da Integração

### Para Marketing
- ✅ Criação de páginas sem código
- ✅ A/B testing nativo
- ✅ Atualizações em tempo real
- ✅ Editor visual intuitivo

### Para Desenvolvimento
- ✅ Zero manutenção de CMS
- ✅ API REST automática
- ✅ TypeScript support
- ✅ SSR/SSG compatible

### Para Performance
- ✅ CDN global Builder.io
- ✅ Lazy loading automático
- ✅ Otimização de imagens
- ✅ Cache inteligente

## 🎨 Exemplos de Uso

### Landing Pages
- Páginas de produto específicas
- Campanhas sazonais
- Promoções especiais

### Páginas Institucionais
- Sobre a empresa
- Política de privacidade
- Termos de uso
- FAQ

### Conteúdo Dinâmico
- Banners promocionais
- Anúncios de novidades
- Comunicados importantes

## 🔗 Links Úteis

- [Builder.io Dashboard](https://builder.io/content)
- [Builder.io Documentation](https://www.builder.io/c/docs)
- [API Key Management](https://builder.io/account/space)
- [Railway Environment Variables](https://railway.app/project/39f18594-7d52-49ea-b7c3-be245e8d66f2)

## 📊 Métricas

### Antes da Integração
- ❌ Páginas estáticas apenas
- ❌ Mudanças requerem deploy
- ❌ Dependência de desenvolvimento

### Depois da Integração
- ✅ Páginas dinâmicas em tempo real
- ✅ Marketing independente
- ✅ A/B testing nativo
- ✅ ROI tracking automático

---

**Stack ExzosTools Volaron**  
*Builder.io Publisher Plan: $49/mês*  
*ROI esperado: +30% conversão*