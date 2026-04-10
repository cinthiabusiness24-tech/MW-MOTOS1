import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../utils/whatsapp";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* LOGO */}
          <button
            onClick={() => handleNav("#inicio")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:scale-105 transition-all">
              <img
                src="https://i.imgur.com/7nh0GT4.png"
                alt="Logo MW Motos"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-white font-black text-lg tracking-wide">
              MW <span className="text-red-500">Motos</span>
            </span>
          </button>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-gray-300 hover:text-red-500 text-sm font-medium tracking-wide transition-colors uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* AÇÕES */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="lg:hidden bg-[#0f0f0f]/98 backdrop-blur-md border-t border-white/5">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-gray-300 hover:text-red-500 text-left py-3 px-3 rounded-lg hover:bg-white/5 font-medium tracking-wide transition-colors uppercase text-sm"
              >
                {link.label}
              </button>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-full transition-colors"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
