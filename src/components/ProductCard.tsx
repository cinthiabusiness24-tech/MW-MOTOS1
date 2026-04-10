import { ShoppingBag, MessageCircle } from "lucide-react";
import { type Product } from "../data/products";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-[#141414] border border-white/5 hover:border-red-600/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <span className="bg-red-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-base mb-1.5 leading-tight">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span
            className={`font-black text-lg ${
              product.price === "Sob consulta" ? "text-gray-400 text-sm" : "text-red-500"
            }`}
          >
            {product.price}
          </span>
          <ShoppingBag size={16} className="text-gray-600" />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href={product.mlLink || "https://www.mercadolivre.com.br/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm py-3 rounded-xl transition-all duration-200 hover:shadow-lg"
          >
            Ver no Mercado Livre
          </a>
        </div>
      </div>
    </div>
  );
}
