import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS, CATEGORIES, type Category } from "../data/products";
import ProductCard from "./ProductCard";

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category | "Todos">("Todos");
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "Todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setDragStartX(e.pageX - el.offsetLeft);
    setScrollStartX(el.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    el.scrollLeft = scrollStartX - (x - dragStartX);
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <section id="produtos" className="bg-[#0f0f0f] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Catálogo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Produtos{" "}
            <span className="text-red-500">selecionados</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Capacetes, pneus, peças e acessórios das melhores marcas do mercado.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["Todos", ...CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as Category | "Todos")}
              className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                  : "bg-[#1a1a1a] text-gray-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative group/carousel">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:bg-red-600 hover:border-red-600 transition-all duration-200 shadow-xl"
            aria-label="Rolar para esquerda"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4 select-none"
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filtered.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[72vw] sm:w-[300px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 hover:bg-red-600 hover:border-red-600 transition-all duration-200 shadow-xl"
            aria-label="Rolar para direita"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <style>{`
          #produtos div::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  );
}
