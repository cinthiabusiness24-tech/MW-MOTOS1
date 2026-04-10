import { MessageCircle, Phone, MapPin, Instagram } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_DISPLAY } from "../utils/whatsapp";

export default function Contact() {
  return (
    <section id="contato" className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Fale Conosco
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            MW{" "}
            <span className="text-red-500">MOTOS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Entre em contato agora mesmo. Nossos especialistas estão prontos para atendê-lo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-[#141414] border border-white/5 hover:border-red-600/30 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-600/10 group-hover:bg-green-600/20 border border-green-600/20 rounded-xl flex items-center justify-center text-green-500 transition-all shrink-0">
                <MessageCircle size={26} />
              </div>
              <div>
                <div className="text-white font-bold text-base mb-0.5">WhatsApp</div>
                <div className="text-gray-400 text-sm">{WHATSAPP_DISPLAY}</div>
              </div>
            </a>

            <div className="flex items-center gap-5 bg-[#141414] border border-white/5 rounded-2xl p-6">
              <div className="w-14 h-14 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                <Phone size={26} />
              </div>
              <div>
                <div className="text-white font-bold text-base mb-0.5">Telefone</div>
                <div className="text-gray-400 text-sm">{WHATSAPP_DISPLAY}</div>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-[#141414] border border-white/5 rounded-2xl p-6">
              <div className="w-14 h-14 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                <MapPin size={26} />
              </div>
              <div>
                <div className="text-white font-bold text-base mb-0.5">Endereço</div>
                <div className="text-gray-400 text-sm">Rua Santa Bárbara, 16 — Cachoeira de Minas, MG</div>
              </div>
            </div>

            <a
              href="https://instagram.com/mwmotos.wanderson"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-[#141414] border border-white/5 hover:border-pink-600/30 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-pink-600/10 group-hover:bg-pink-600/20 border border-pink-600/20 rounded-xl flex items-center justify-center text-pink-500 transition-all shrink-0">
                <Instagram size={26} />
              </div>
              <div>
                <div className="text-white font-bold text-base mb-0.5">Instagram</div>
                <div className="text-gray-400 text-sm">@mwmotos.wanderson</div>
              </div>
            </a>
          </div>

          <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-red-600/10 border border-red-600/20 rounded-full flex items-center justify-center text-red-500 mb-6">
              <MessageCircle size={36} />
            </div>
            <h3 className="text-white font-black text-2xl mb-3">Fale agora no WhatsApp</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xs">
              Atendimento rápido e personalizado. Tire suas dúvidas, solicite orçamentos e muito mais.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-black text-lg py-5 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-red-600/40 hover:-translate-y-0.5"
            >
              <MessageCircle size={22} />
              Iniciar Conversa
            </a>
            <p className="text-gray-600 text-xs mt-4">
              Disponível de seg. a sab. das 8h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
