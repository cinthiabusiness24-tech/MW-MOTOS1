import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://share.google/wIvm20V3N9tsH9RdV";

const REVIEWS = [
  {
    name: "Ricardo Alves",
    time: "há 2 semanas",
    text: "Excelente atendimento, serviço de alta qualidade. Minha moto ficou perfeita. Recomendo sem dúvidas!",
    stars: 5,
    initial: "R",
    color: "bg-blue-600",
  },
  {
    name: "Fernanda Costa",
    time: "há 1 mês",
    text: "Profissionais muito capacitados, recomendo demais! Atendimento rápido e preço justo. Voltarei sempre.",
    stars: 5,
    initial: "F",
    color: "bg-green-600",
  },
  {
    name: "Marcos Oliveira",
    time: "há 3 semanas",
    text: "Levo minha moto sempre lá, confiança total no trabalho deles. Equipe honesta e muito competente.",
    stars: 5,
    initial: "M",
    color: "bg-red-600",
  },
  {
    name: "André Souza",
    time: "há 2 meses",
    text: "Melhor oficina que já fui. Diagnóstico preciso, peças originais e prazo cumprido. Nota 10!",
    stars: 5,
    initial: "A",
    color: "bg-yellow-600",
  },
  {
    name: "Patrícia Lima",
    time: "há 1 semana",
    text: "Atendimento impecável desde o primeiro contato. Saí muito satisfeita com o serviço na minha moto.",
    stars: 5,
    initial: "P",
    color: "bg-teal-600",
  },
];

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function StarRow({ count, size = 18 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-600 fill-gray-600"}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="bg-[#0a0a0a] py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-500/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <GoogleLogo />
            Avaliações Google
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
            Mais de{" "}
            <span className="text-yellow-400">140 clientes</span>{" "}
            satisfeitos no Google
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Excelência comprovada por quem já confiou na MW Motos
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-[#141414] border border-white/8 rounded-3xl px-8 py-7 flex flex-col sm:flex-row items-center gap-8 shadow-2xl shadow-black/40 max-w-xl w-full">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2 mb-2">
                <GoogleLogo />
                <span className="text-white/50 text-sm font-semibold tracking-wide">Google Reviews</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-6xl font-black text-white leading-none">4.9</span>
                <div className="pb-1">
                  <StarRow count={5} size={22} />
                  <span className="text-gray-500 text-xs mt-1 block">142 avaliações</span>
                </div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-white/8" />

            <div className="flex flex-col gap-2.5 w-full sm:w-auto sm:min-w-[180px]">
              {[
                { label: "5 estrelas", pct: 91 },
                { label: "4 estrelas", pct: 7 },
                { label: "3 estrelas", pct: 2 },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs w-16 shrink-0">{row.label}</span>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${row.pct}%` }} />
                  </div>
                  <span className="text-gray-500 text-xs w-8 text-right">{row.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-[#141414] border border-white/5 hover:border-yellow-500/20 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 ${review.color} rounded-full flex items-center justify-center shrink-0`}>
                    <span className="text-white font-bold text-sm">{review.initial}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight">{review.name}</div>
                    <div className="text-gray-600 text-xs">{review.time}</div>
                  </div>
                </div>
                <GoogleLogo />
              </div>
              <StarRow count={review.stars} size={14} />
              <p className="text-gray-400 text-sm leading-relaxed flex-1">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-100 text-gray-900 font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5"
          >
            <GoogleLogo />
           Nos avalie no Google
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
