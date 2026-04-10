import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-green-900/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-green-700/50 group"
    >
      <MessageCircle size={22} className="shrink-0" />
      <span className="text-sm whitespace-nowrap hidden sm:block">Falar no WhatsApp</span>
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center">
        <span className="w-2 h-2 bg-red-400 rounded-full animate-ping absolute" />
        <span className="w-1.5 h-1.5 bg-red-500 rounded-full relative" />
      </span>
    </a>
  );
}
