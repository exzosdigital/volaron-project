# Configuração do Storefront Volaron

## Variáveis de Ambiente

```env
# Backend Medusa (Railway)
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://backend-production-c461d.up.railway.app
NEXT_PUBLIC_BASE_URL=https://www.volaron.com.br

# Integração com serviços Railway
NEXT_PUBLIC_SEARCH_ENDPOINT=https://meilisearch-production.up.railway.app
NEXT_PUBLIC_SEARCH_API_KEY=

# Storage
NEXT_PUBLIC_MINIO_ENDPOINT=https://bucket-production.up.railway.app
NEXT_PUBLIC_MINIO_BUCKET=medusa-media

# Analytics (opcional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Revalidação ISR
REVALIDATE_SECONDS=60
```

## Conexão com Railway

O storefront está configurado para conectar com os seguintes serviços no Railway:

1. **Backend MedusaJS**: `backend-production-c461d.up.railway.app`
2. **MeiliSearch**: Para busca avançada de produtos
3. **MinIO**: Para armazenamento de imagens
4. **Redis**: Cache gerenciado pelo backend
5. **PostgreSQL**: Banco de dados principal

## Deploy no Vercel

1. Faça fork deste repositório
2. Conecte com Vercel
3. Configure as variáveis de ambiente
4. Deploy automático a cada push

## Desenvolvimento Local

```bash
cd storefront
npm install
npm run dev
```

Acesse http://localhost:3000
