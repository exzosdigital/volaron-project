// Dados de produtos mockados para desenvolvimento
// Em produção, estes dados virão do MedusaJS via API

export const mockProducts = [
  {
    id: "prod_moedor_cafe_botini_b55",
    handle: "moedor-cafe-eletrico-botini-b55",
    title: "Moedor de Café Elétrico Botini B55 - 1/3 CV",
    description: "Moedor elétrico profissional com regulagem de granulometria. Produção de 8kg/h, motor de 1/3 CV, bivolt 127/220V com chave seletora. Ideal para café torrado, grãos, temperos e especiarias.",
    subtitle: "Moedor profissional com alta produção e regulagem precisa",
    thumbnail: "/images/products/moedor-cafe-botini-b55.jpg",
    images: [
      "/images/products/moedor-cafe-botini-b55-1.jpg",
      "/images/products/moedor-cafe-botini-b55-2.jpg"
    ],
    categories: ["moedores"],
    tags: ["featured", "professional", "bivolt"],
    variants: [
      {
        id: "var_moedor_cafe_botini_b55",
        title: "Padrão",
        prices: [{
          amount: 89900,
          currency_code: "BRL"
        }],
        original_price: {
          amount: 119900,
          currency_code: "BRL"
        },
        calculated_price: {
          amount: 89900,
          currency_code: "BRL"
        },
        inventory_quantity: 15
      }
    ],
    metadata: {
      brand: "Botini",
      warranty: "3 anos",
      power: "1/3 CV",
      production: "8kg/h",
      voltage: "Bivolt 127/220V"
    }
  },
  {
    id: "prod_escada_aluminio_mor_5103",
    handle: "escada-aluminio-extensiva-mor-5103",
    title: "Escada Alumínio Extensiva MOR 5103 - 10 Degraus",
    description: "Escada extensível em alumínio de alta resistência. Suporta até 150kg, com trava de segurança e sapatas antiderrapantes. Ideal para uso profissional e doméstico.",
    subtitle: "Segurança e praticidade para trabalhos em altura",
    thumbnail: "/images/products/escada-aluminio-mor.jpg",
    categories: ["escadas"],
    tags: ["featured", "safety"],
    variants: [
      {
        id: "var_escada_aluminio_mor",
        title: "10 Degraus",
        prices: [{
          amount: 45900,
          currency_code: "BRL"
        }],
        original_price: {
          amount: 59900,
          currency_code: "BRL"
        },
        calculated_price: {
          amount: 45900,
          currency_code: "BRL"
        },
        inventory_quantity: 8
      }
    ],
    metadata: {
      brand: "MOR",
      material: "Alumínio",
      max_weight: "150kg",
      steps: "10 degraus"
    }
  },
  {
    id: "prod_cortador_grama_trapp_mc60",
    handle: "cortador-grama-gasolina-trapp-mc60",
    title: "Cortador de Grama a Gasolina Trapp MC-60G",
    description: "Cortador de grama profissional com motor 4 tempos de 6HP. Largura de corte de 60cm, recolhedor de 60L e 7 ajustes de altura. Ideal para grandes áreas.",
    subtitle: "Potência e eficiência para jardins profissionais",
    thumbnail: "/images/products/cortador-grama-trapp.jpg",
    categories: ["jardinagem"],
    tags: ["featured", "professional"],
    variants: [
      {
        id: "var_cortador_grama_trapp",
        title: "Padrão",
        prices: [{
          amount: 289900,
          currency_code: "BRL"
        }],
        calculated_price: {
          amount: 289900,
          currency_code: "BRL"
        },
        inventory_quantity: 5
      }
    ],
    metadata: {
      brand: "Trapp",
      engine: "4 tempos 6HP",
      cutting_width: "60cm",
      collector: "60L"
    }
  },
  {
    id: "prod_ralador_queijo_arbel_rqi50",
    handle: "ralador-queijo-industrial-arbel-rqi50",
    title: "Ralador de Queijo Industrial Arbel RQI-50",
    description: "Ralador industrial para queijos, coco e legumes. Produção de 50kg/h, motor de 1/2 CV, estrutura em aço inox. Ideal para pizzarias, restaurantes e padarias.",
    subtitle: "Alta produção com máxima higiene",
    thumbnail: "/images/products/ralador-queijo-arbel.jpg",
    categories: ["raladores"],
    tags: ["professional", "stainless-steel"],
    variants: [
      {
        id: "var_ralador_queijo_arbel",
        title: "Padrão",
        prices: [{
          amount: 179900,
          currency_code: "BRL"
        }],
        calculated_price: {
          amount: 179900,
          currency_code: "BRL"
        },
        inventory_quantity: 12
      }
    ],
    metadata: {
      brand: "Arbel",
      material: "Aço Inox",
      production: "50kg/h",
      power: "1/2 CV"
    }
  },
  {
    id: "prod_serra_fita_becfer_sfb19",
    handle: "serra-fita-acougue-becfer-sfb19",
    title: "Serra Fita para Açougue Becfer SFB-19",
    description: "Serra fita profissional para corte de carnes e ossos. Mesa em aço inox, motor de 2CV, volante de 19 polegadas. Atende todas as normas sanitárias.",
    subtitle: "Precisão e segurança no corte de carnes",
    thumbnail: "/images/products/serra-fita-becfer.jpg",
    categories: ["serras-de-fita"],
    tags: ["professional", "butcher"],
    variants: [
      {
        id: "var_serra_fita_becfer",
        title: "Padrão",
        prices: [{
          amount: 649900,
          currency_code: "BRL"
        }],
        original_price: {
          amount: 789900,
          currency_code: "BRL"
        },
        calculated_price: {
          amount: 649900,
          currency_code: "BRL"
        },
        inventory_quantity: 3
      }
    ],
    metadata: {
      brand: "Becfer",
      power: "2CV",
      wheel_size: "19 polegadas",
      table_material: "Aço Inox"
    }
  },
  {
    id: "prod_cilindro_massa_gpaniz_cm400",
    handle: "cilindro-massa-gpaniz-cm400",
    title: "Cilindro de Massa G.Paniz CM-400",
    description: "Cilindro laminador profissional com mesa de 40cm. Ideal para padarias, pizzarias e confeitarias. Estrutura em aço com pintura epóxi, rolos em aço especial.",
    subtitle: "Qualidade profissional para massas perfeitas",
    thumbnail: "/images/products/cilindro-massa-gpaniz.jpg",
    categories: ["cilindros-de-massa"],
    tags: ["featured", "bakery"],
    variants: [
      {
        id: "var_cilindro_massa_gpaniz",
        title: "Mesa 40cm",
        prices: [{
          amount: 339900,
          currency_code: "BRL"
        }],
        calculated_price: {
          amount: 339900,
          currency_code: "BRL"
        },
        inventory_quantity: 6
      }
    ],
    metadata: {
      brand: "G.Paniz",
      table_width: "40cm",
      material: "Aço com pintura epóxi"
    }
  },
  {
    id: "prod_motor_betoneira_nova_2cv",
    handle: "motor-eletrico-2cv-monofasico-betoneira",
    title: "Motor Elétrico 2CV Monofásico para Betoneira",
    description: "Motor monofásico de 4 polos, 2CV, baixa rotação (1730 RPM). Ideal para betoneiras de até 400 litros. Classe de isolamento F, dois capacitores.",
    subtitle: "Força e durabilidade para construção civil",
    thumbnail: "/images/products/motor-betoneira.jpg",
    categories: ["motores"],
    tags: ["construction"],
    variants: [
      {
        id: "var_motor_betoneira_2cv",
        title: "2CV Monofásico",
        prices: [{
          amount: 109525,
          currency_code: "BRL"
        }],
        calculated_price: {
          amount: 109525,
          currency_code: "BRL"
        },
        inventory_quantity: 10
      }
    ],
    metadata: {
      brand: "Nova Motores",
      power: "2CV",
      rotation: "1730 RPM",
      voltage: "Monofásico"
    }
  },
  {
    id: "prod_aparador_cerca_viva_trapp_htx6000",
    handle: "aparador-cerca-viva-gasolina-trapp-htx6000",
    title: "Aparador de Cerca Viva a Gasolina Trapp HTX-6000",
    description: "Aparador profissional com motor a gasolina 2 tempos. Lâminas de aço de alta qualidade, sistema ergonômico. Ideal para manutenção de jardins profissionais.",
    subtitle: "Cortes precisos e acabamento profissional",
    thumbnail: "/images/products/aparador-cerca-viva-trapp.jpg",
    categories: ["jardinagem"],
    tags: ["featured", "professional"],
    variants: [
      {
        id: "var_aparador_cerca_htx6000",
        title: "Padrão",
        prices: [{
          amount: 89900,
          currency_code: "BRL"
        }],
        original_price: {
          amount: 109900,
          currency_code: "BRL"
        },
        calculated_price: {
          amount: 89900,
          currency_code: "BRL"
        },
        inventory_quantity: 7
      }
    ],
    metadata: {
      brand: "Trapp",
      engine: "2 tempos gasolina",
      blade_material: "Aço temperado"
    }
  }
]