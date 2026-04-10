import { MessageCircle, ChevronDown } from "lucide-react";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* IMAGEM AJUSTADA */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.imgur.com/CitYDut.png')",
          backgroundPosition: "center top", // 🔥 melhora no mobile
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

      {/* EFEITO LUZ */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
            MW MOTOS
            <span className="block text-red-500">PEÇAS E MANUTENÇÃO</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
            Mais de{" "}
            <span className="text-white font-semibold">17 anos de experiência</span>{" "}
            cuidando da sua moto com qualidade, confiança e atendimento técnico de alto nível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              AGENDAR UM SERVIÇO
            </a>

            <button
              onClick={scrollToProducts}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              VER CATÁLOGO DE PEÇAS
            </button>
          </div>

          <div className="mt-14 flex items-center gap-8">
            {[
              { value: "400+", label: "Motos atendidas" },
              { value: "17", label: "Anos de mercado" },
              { value: "100%", label: "Qualidade garantida" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-red-500">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wide mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}