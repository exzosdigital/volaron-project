import { MedusaContainer } from "@medusajs/framework/types"

export default async function seedVolaronData({ container }: { container: MedusaContainer }) {
  const productModuleService = container.resolve("@medusajs/product")
  const pricingModuleService = container.resolve("@medusajs/pricing")
  const inventoryModuleService = container.resolve("@medusajs/inventory")
  const salesChannelModuleService = container.resolve("@medusajs/sales-channel")
  const regionModuleService = container.resolve("@medusajs/region")
  const storeModuleService = container.resolve("@medusajs/store")
  const remoteLink = container.resolve("@medusajs/remote-link")

  // Obter região Brasil
  const [region] = await regionModuleService.listRegions({
    currency_code: "brl",
  })

  // Obter canal de vendas padrão
  const [salesChannel] = await salesChannelModuleService.listSalesChannels({
    name: "Default Sales Channel",
  })

  // Criar categorias principais
  const categories = await productModuleService.createProductCategories([
    {
      name: "Moedores",
      handle: "moedores",
      description: "Moedores industriais e domésticos de alta qualidade para grãos, café e temperos",
      is_active: true,
      metadata: {
        seo_title: "Moedores Profissionais | Volaron Comercial",
        seo_description: "Moedores industriais e domésticos para café, grãos e temperos. Garantia de fábrica e entrega para todo Brasil. Parcele em 12x sem juros!",
        seo_keywords: "moedor de café, moedor industrial, moedor de grãos, moedor elétrico, moedor profissional"
      }
    },
    {
      name: "Escadas",
      handle: "escadas",
      description: "Escadas de alumínio e fibra de vidro para uso profissional e doméstico",
      is_active: true,
      metadata: {
        seo_title: "Escadas de Alumínio e Fibra | Volaron Comercial",
        seo_description: "Escadas profissionais de alumínio e fibra de vidro. Modelos extensíveis, multiuso e plataforma. Entrega rápida e segura!",
        seo_keywords: "escada alumínio, escada fibra vidro, escada extensível, escada multiuso, escada profissional"
      }
    },
    {
      name: "Jardinagem",
      handle: "jardinagem",
      description: "Equipamentos e ferramentas profissionais para jardinagem e paisagismo",
      is_active: true,
      metadata: {
        seo_title: "Equipamentos de Jardinagem | Volaron Comercial",
        seo_description: "Ferramentas e equipamentos profissionais para jardinagem. Roçadeiras, cortadores de grama, podadores e mais. Melhores marcas!",
        seo_keywords: "roçadeira, cortador de grama, podador de cerca viva, ferramentas jardinagem, equipamento paisagismo"
      }
    },
    {
      name: "Raladores",
      handle: "raladores",
      description: "Raladores profissionais para cozinhas industriais e domésticas",
      is_active: true,
      metadata: {
        seo_title: "Raladores Profissionais | Volaron Comercial",
        seo_description: "Raladores industriais e domésticos de alta performance. Ideais para restaurantes, lanchonetes e cozinhas profissionais.",
        seo_keywords: "ralador industrial, ralador profissional, ralador elétrico, ralador manual, ralador queijo"
      }
    },
    {
      name: "Trituradores",
      handle: "trituradores",
      description: "Trituradores industriais de alta performance para diversos materiais",
      is_active: true,
      metadata: {
        seo_title: "Trituradores Industriais | Volaron Comercial",
        seo_description: "Trituradores de alta performance para galhos, resíduos orgânicos e materiais diversos. Equipamentos robustos e duráveis.",
        seo_keywords: "triturador de galhos, triturador industrial, triturador orgânico, picador de galhos"
      }
    }
  ])

  // Criar produtos de exemplo
  const products = await productModuleService.createProducts([
    {
      title: "Moedor de Café Elétrico Botini B55 Industrial",
      handle: "moedor-cafe-eletrico-botini-b55",
      description: `
        <h2>Moedor de Café Profissional de Alta Performance</h2>
        <p>O Moedor Elétrico de Café B55 da Botini é a escolha ideal para estabelecimentos comerciais que buscam qualidade e eficiência. Com capacidade de produção de 8kg/h, este equipamento profissional garante moagem uniforme e preserva o aroma e sabor do café.</p>
        
        <h3>Características Técnicas:</h3>
        <ul>
          <li>Regulagem precisa de granulometria</li>
          <li>Produção: 8kg/hora</li>
          <li>Motor: 1/3 CV de potência</li>
          <li>Frequência: 60Hz</li>
          <li>Voltagem: Bivolt 127/220V com chave seletora</li>
          <li>Certificações: Inmetro e NCC OCP-0034</li>
          <li>Fabricação 100% nacional</li>
        </ul>

        <h3>Aplicações:</h3>
        <ul>
          <li>Moagem de café torrado</li>
          <li>Moagem de grãos secos</li>
          <li>Processamento de temperos e especiarias</li>
          <li>Condimentos desidratados</li>
        </ul>

        <h3>Dimensões:</h3>
        <ul>
          <li>Altura: 35cm</li>
          <li>Largura: 22,5cm</li>
          <li>Comprimento: 32cm</li>
          <li>Peso: 9,2kg</li>
        </ul>

        <h3>Garantia:</h3>
        <p>3 anos contra defeitos de fabricação</p>
      `,
      status: "published",
      tags: ["featured", "moedor", "cafe", "industrial"],
      metadata: {
        seo_title: "Moedor de Café Elétrico Botini B55 Industrial 8kg/h | Volaron",
        seo_description: "Moedor de café profissional Botini B55 com produção 8kg/h. Motor 1/3CV bivolt, regulagem de granulometria. Garantia 3 anos. Parcele 12x!",
        seo_keywords: "moedor café botini, moedor elétrico café, moedor industrial café, moedor profissional B55"
      },
      options: [
        {
          title: "Voltagem",
          values: ["127V", "220V", "Bivolt"]
        }
      ],
      variants: [
        {
          title: "Moedor Botini B55 - Bivolt",
          sku: "MOE-BOT-B55-BIV",
          barcode: "7898123456789",
          manage_inventory: true,
          inventory_quantity: 15,
          options: {
            "Voltagem": "Bivolt"
          }
        }
      ]
    },
    {
      title: "Escada Alumínio Extensível 2x13 Degraus 7,20m",
      handle: "escada-aluminio-extensivel-2x13-degraus",
      description: `
        <h2>Escada Extensível Profissional em Alumínio</h2>
        <p>Escada extensível de alumínio com 2 lances de 13 degraus cada, alcançando até 7,20 metros de altura. Ideal para trabalhos em altura com máxima segurança e estabilidade.</p>
        
        <h3>Características:</h3>
        <ul>
          <li>Material: Alumínio de alta resistência</li>
          <li>Degraus antiderrapantes</li>
          <li>Sapatas de borracha antideslizante</li>
          <li>Sistema de trava automática</li>
          <li>Capacidade: 120kg</li>
          <li>Certificada pelo Inmetro</li>
        </ul>

        <h3>Especificações:</h3>
        <ul>
          <li>Altura fechada: 3,96m</li>
          <li>Altura aberta: 7,20m</li>
          <li>Largura: 47cm</li>
          <li>Peso: 18kg</li>
        </ul>

        <h3>Aplicações:</h3>
        <p>Perfeita para construção civil, manutenção predial, pintura, instalações elétricas e trabalhos em altura em geral.</p>
      `,
      status: "published",
      tags: ["featured", "escada", "aluminio", "profissional"],
      metadata: {
        seo_title: "Escada Alumínio Extensível 2x13 Degraus 7,20m | Volaron",
        seo_description: "Escada extensível alumínio 2x13 degraus, alcance 7,20m. Certificada Inmetro, capacidade 120kg. Ideal construção civil. Frete grátis!",
        seo_keywords: "escada extensível alumínio, escada 7 metros, escada 2x13 degraus, escada profissional"
      },
      options: [],
      variants: [
        {
          title: "Escada Extensível 2x13 Degraus",
          sku: "ESC-ALU-2X13",
          barcode: "7898987654321",
          manage_inventory: true,
          inventory_quantity: 8
        }
      ]
    },
    {
      title: "Aparador de Cerca Viva Gasolina HTX-6000 Trapp",
      handle: "aparador-cerca-viva-gasolina-htx6000-trapp",
      description: `
        <h2>Aparador de Cerca Viva Profissional a Gasolina</h2>
        <p>O Aparador HTX-6000 da Trapp é a ferramenta ideal para manutenção profissional de jardins. Com motor 2 tempos a gasolina e lâminas de aço de alta qualidade, proporciona cortes precisos e acabamento perfeito.</p>
        
        <h3>Especificações Técnicas:</h3>
        <ul>
          <li>Motor: 2 tempos a gasolina</li>
          <li>Cilindrada: 22,5cc</li>
          <li>Potência: 0,9HP</li>
          <li>Comprimento da lâmina: 600mm</li>
          <li>Capacidade de corte: até 28mm de diâmetro</li>
          <li>Tanque: 0,45 litros</li>
          <li>Peso: 5,2kg</li>
        </ul>

        <h3>Diferenciais:</h3>
        <ul>
          <li>Sistema antivibração</li>
          <li>Empunhadura ergonômica giratória</li>
          <li>Lâminas dupla ação</li>
          <li>Protetor de lâmina incluído</li>
          <li>Manual em português</li>
        </ul>

        <h3>Aplicações:</h3>
        <p>Ideal para poda de cercas vivas, arbustos ornamentais, topiaria e manutenção geral de jardins residenciais e comerciais.</p>
      `,
      status: "published",
      tags: ["featured", "jardinagem", "aparador", "trapp"],
      metadata: {
        seo_title: "Aparador Cerca Viva Gasolina HTX-6000 Trapp 22,5cc | Volaron",
        seo_description: "Aparador de cerca viva Trapp HTX-6000 motor 2T 22,5cc. Lâmina 600mm, sistema antivibração. Para jardinagem profissional. Parcele 12x!",
        seo_keywords: "aparador cerca viva trapp, podador htx6000, cortador cerca viva gasolina, aparador profissional"
      },
      options: [],
      variants: [
        {
          title: "Aparador HTX-6000 Trapp",
          sku: "JAR-TRP-HTX6000",
          barcode: "7891234567890",
          manage_inventory: true,
          inventory_quantity: 12
        }
      ]
    }
  ])

  // Criar preços para os produtos
  for (const product of products) {
    const priceSet = await pricingModuleService.createPriceSets({
      prices: [
        {
          amount: product.handle.includes("moedor") ? 895.00 : 
                  product.handle.includes("escada") ? 1249.90 : 
                  689.90,
          currency_code: "BRL",
          min_quantity: 1,
          max_quantity: 999,
        },
      ],
    })

    // Vincular preço ao variant
    await remoteLink.create({
      productService: {
        variant_id: product.variants[0].id,
      },
      pricingService: {
        price_set_id: priceSet.id,
      },
    })

    // Criar estoque
    const inventoryItem = await inventoryModuleService.createInventoryItems({
      sku: product.variants[0].sku,
    })

    await inventoryModuleService.createInventoryLevels([
      {
        inventory_item_id: inventoryItem.id,
        location_id: "default-location",
        stocked_quantity: product.variants[0].inventory_quantity,
      },
    ])

    // Vincular ao canal de vendas
    await remoteLink.create({
      productService: {
        product_id: product.id,
      },
      salesChannelService: {
        sales_channel_id: salesChannel.id,
      },
    })
  }

  console.log("✅ Dados Volaron criados com sucesso!")
}
