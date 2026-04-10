import { CheckCircle } from "lucide-react";

const HIGHLIGHTS = [
  "Manutenção e preparação de motos de todas cc",
  "Equipe técnica com certificações especializadas",
  "Diagnóstico moderno com equipamentos de última geração",
  "Peças originais e de alta qualidade",
  "Atendimento transparente e orçamento justo",
  "Garantia em todos os serviços realizados",
];

export default function About() {
  return (
    <section id="sobre" className="bg-[#0f0f0f] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://i.imgur.com/nbT6Ajz.png"
                alt="Oficina MW Motos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 rounded-2xl p-6 shadow-2xl">
              <div className="text-4xl font-black text-white">17+</div>
              <div className="text-red-200 text-sm font-medium uppercase tracking-wide">Anos de mercado</div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-red-600/30 rounded-2xl" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Sobre nós
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Paixão por{" "}
              <span className="text-red-500">motos</span>{" "}
              desde o início
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              A <strong className="text-white">MW Motos </strong> é uma empresa especializada em
              manutenção e preparação de motos, com forte atuação em motos de todas as cilindradas.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Com mais de 17 anos de experiência, nos consolidamos como referência técnica na região,
              sempre priorizando a qualidade, a confiança e o atendimento  que cada cliente
              merece.
              Mantemos vivo o sonho de quem escolheu a liberdade em duas rodas.
            </p>

            <ul className="grid grid-cols-1 gap-3">
              {HIGHLIGHTS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
