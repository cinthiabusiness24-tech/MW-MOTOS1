import { Award, Settings, Users, Package } from "lucide-react";

const ITEMS = [
  {
    icon: <Award size={32} />,
    title: "17 Anos de Experiência",
    description:
      "Mais de uma década e meia no mercado, construindo reputação através de resultados reais e clientes satisfeitos.",
  },
  {
    icon: <Settings size={32} />,
    title: "Especialista em Alta Cilindrada",
    description:
      "Conhecimento técnico aprofundado em motos de alta performance, esportivas e premium das principais marcas.",
  },
  {
    icon: <Users size={32} />,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente recebe atenção exclusiva. Entendemos suas necessidades para oferecer a melhor solução.",
  },
  {
    icon: <Package size={32} />,
    title: "Peças e Produtos Selecionados",
    description:
      "Trabalhamos apenas com marcas e fornecedores de confiança, garantindo qualidade em cada produto vendido.",
  },
];

export default function Differentials() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Por que nos escolher
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              O que nos torna{" "}
              <span className="text-red-500">diferentes</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              A MW Motos combina experiência técnica de alto nível com um atendimento próximo e
              honesto. Aqui, sua moto está em boas mãos.
            </p>

            {/* 🔥 IMAGEM ESTILO INSTAGRAM */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                  <img
                    src="https://i.imgur.com/6JKGtzR.png"
                    alt="Equipe MW Motos"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Clientes ativos", value: "200+" },
                { label: "Motos revisadas", value: "400+" },
                { label: "Anos de mercado", value: "17" },
                { label: "Satisfação", value: "100%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#141414] border border-white/5 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-black text-red-500 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* LADO DIREITO */}
          <div className="grid grid-cols-1 gap-4">
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 bg-[#141414] border border-white/5 hover:border-red-600/30 rounded-2xl p-5 transition-all duration-300 group"
              >
                <div className="shrink-0 w-14 h-14 bg-red-600/10 group-hover:bg-red-600/20 border border-red-600/20 rounded-xl flex items-center justify-center text-red-500 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}