export type Category = "Capacetes" | "Pneus" | "Peças" | "Acessórios" | "Roupas";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: Category;
  mlLink?: string;
}

export const CATEGORIES: Category[] = ["Capacetes", "Pneus", "Peças", "Acessórios", "Roupas"];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Capacete X11 Pro Tork",
    description: "Capacete integral de alta performance com viseira antirrisco e ventilação superior.",
    price: "R$ 599,00",
    image: "https://images.pexels.com/photos/4599753/pexels-photo-4599753.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Capacetes",
    mlLink: "https://www.mercadolivre.com.br/",
  },
  {
    id: 2,
    name: "Capacete Arai RX-7V Racing",
    description: "Capacete premium de competição, construção em fibra de carbono e máximo conforto.",
    price: "Sob consulta",
    image: "https://images.pexels.com/photos/4599741/pexels-photo-4599741.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Capacetes",
  },
  {
    id: 3,
    name: "Capacete Bell Star MIPS",
    description: "Tecnologia MIPS de proteção rotacional, aerodinâmica avançada para alta velocidade.",
    price: "R$ 1.299,00",
    image: "https://images.pexels.com/photos/4600011/pexels-photo-4600011.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Capacetes",
  },
  {
    id: 4,
    name: "Pneu Michelin Pilot Road 5",
    description: "Pneu esportivo com excelente desempenho em piso seco e molhado para motos de alta cilindrada.",
    price: "Sob consulta",
    image: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Pneus",
  },
  {
    id: 5,
    name: "Pneu Pirelli Angel GT II",
    description: "Alta durabilidade e aderência superior. Ideal para motos GT e touring.",
    price: "Sob consulta",
    image: "https://images.pexels.com/photos/3807387/pexels-photo-3807387.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Pneus",
  },
  {
    id: 6,
    name: "Pneu Bridgestone Battlax S22",
    description: "Pneu de alto desempenho inspirado nas competições de superbike, máxima aderência.",
    price: "Sob consulta",
    image: "https://images.pexels.com/photos/3807392/pexels-photo-3807392.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Pneus",
  },
  {
    id: 7,
    name: "Corrente RK Premium 520",
    description: "Corrente de transmissão reforçada com juntas O-ring para alta durabilidade.",
    price: "R$ 299,00",
    image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Peças",
    mlLink: "https://www.mercadolivre.com.br/",
  },
  {
    id: 8,
    name: "Kit Freios Brembo Performance",
    description: "Sistema de frenagem de alta performance. Pastilhas e discos para uso esportivo.",
    price: "Sob consulta",
    image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Peças",
  },
  {
    id: 9,
    name: "Escapamento Akrapovic Slip-On",
    description: "Escapamento esportivo em titânio, aumento de performance e som inconfundível.",
    price: "Sob consulta",
    image: "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Peças",
  },
  {
    id: 10,
    name: "Manoplas Oxford Heated Grips",
    description: "Manoplas aquecidas para uso em baixas temperaturas. Ajuste de temperatura eletrônico.",
    price: "R$ 389,00",
    image: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Acessórios",
  },
  {
    id: 11,
    name: "Suporte Celular RAM Mounts",
    description: "Suporte universal resistente para smartphone. Compatível com todos os guidões.",
    price: "R$ 249,00",
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Acessórios",
  },
  {
    id: 12,
    name: "Intercomunicador Sena 30K",
    description: "Comunicação mesh intercom para grupos, alcance de até 2km. Bluetooth 5.0.",
    price: "R$ 1.899,00",
    image: "https://images.pexels.com/photos/4482901/pexels-photo-4482901.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Acessórios",
  },
  {
    id: 13,
    name: "Jaqueta Couro Alpinestars",
    description: "Jaqueta de couro premium com proteções CE nível 2 nos ombros, cotovelos e costas.",
    price: "R$ 2.499,00",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Roupas",
  },
  {
    id: 14,
    name: "Calça Kevlar Texx",
    description: "Calça com reforço em Kevlar nas áreas críticas, proteções nos joelhos e quadril.",
    price: "R$ 899,00",
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Roupas",
  },
  {
    id: 15,
    name: "Bota Forma Adventure Low",
    description: "Bota de moto com proteção lateral, palmilha antiderrapante e impermeável.",
    price: "R$ 1.199,00",
    image: "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Roupas",
  },
];
