import { Wrench, Shield, Search, Zap, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../utils/whatsapp";
import { SERVICES } from "../data/services";

const ICON_MAP: Record<string, React.ReactNode> = {
  wrench: <Wrench size={28} />,
  shield: <Shield size={28} />,
  search: <Search size={28} />,
  zap: <Zap size={28} />,
};

export default function Services() {
  return (
    <section id="servicos" className="bg-[#0a0a0a] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Cuidado técnico de{" "}
            <span className="text-red-500">alto nível</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Serviços especializados para manter sua moto sempre em perfeito estado de funcionamento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-[#141414] border border-white/5 hover:border-red-600/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/20"
            >
              <div className="w-14 h-14 bg-red-600/10 group-hover:bg-red-600/20 border border-red-600/20 group-hover:border-red-600/40 rounded-xl flex items-center justify-center text-red-500 mb-5 transition-all duration-300">
                {ICON_MAP[service.icon]}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={getWhatsAppLink("e Serviços MW Motos")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            Agendar Serviço
          </a>
        </div>
      </div>
    </section>
  );
}
