import { MessageCircle, Instagram } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_DISPLAY } from "../utils/whatsapp";

const QUICK_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-black text-sm">MW</span>
              </div>
              <span className="text-white font-black text-xl tracking-wide">
                MW <span className="text-red-500">Motos</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Especialistas em manutenção e preparação de motos há mais de 17 anos.
              Qualidade, confiança e atendimento técnico de alto nível.
            </p>
            <div className="flex gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] border border-white/5 hover:border-green-600/30 hover:bg-green-600/10 rounded-lg flex items-center justify-center text-gray-500 hover:text-green-500 transition-all duration-200"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com/mwmotos.wanderson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] border border-white/5 hover:border-pink-600/30 hover:bg-pink-600/10 rounded-lg flex items-center justify-center text-gray-500 hover:text-pink-500 transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Links Rápidos
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-gray-500 hover:text-red-500 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Contato
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-500 text-sm">{WHATSAPP_DISPLAY}</li>
              <li className="text-gray-500 text-sm">Rua Santa Bárbara, 16</li>
              <li className="text-gray-500 text-sm">Cachoeira de Minas, MG</li>
              <li>
                <a
                  href="https://instagram.com/mwmotos.wanderson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-pink-500 text-sm transition-colors"
                >
                  @mwmotos.wanderson
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} MW Motos. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Desenvolvido com dedicação
          </p>
        </div>
      </div>
    </footer>
  );
}
