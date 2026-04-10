import { Star } from "lucide-react";

const INSTAGRAM_POSTS = [
  {
      image: "https://i.imgur.com/nVI5U4S.png",
    link: "https://www.instagram.com/p/DW6WufhAEQx/",
  },
  {
    image: "https://i.imgur.com/VkedxLw.png",
    link: "https://www.instagram.com/p/DWCRf8KAIZu/",
  },
  {
    image: "https://i.imgur.com/ouxbEUB.png",
    link: "https://www.instagram.com/p/DUlS6dXgLeL/",
  },
  {
    image: "https://i.imgur.com/WTLKFh2.png",
    link: "https://www.instagram.com/p/DTLlTfbgOMt/",
  },
  {
    image: "https://i.imgur.com/Qe73F0A.png",
    link: "https://www.instagram.com/p/DWY3K0XAB7t/",
  },
  {
    image: "https://i.imgur.com/9S5D5DY.png",
    link: "https://www.instagram.com/p/DQeVNGngHj_/",
  },
  {
    image: "https://i.imgur.com/9cIfXzS.png",
    link: "https://www.instagram.com/p/DUooILggG5i/",
  },
  {
    image: "https://i.imgur.com/fF68xHT.png",
    link: "https://www.instagram.com/p/DWgnGobgGev/",
  },
  {
    image: "https://i.imgur.com/3UM9BTp.png",
    link: "https://www.instagram.com/p/DR7o11PkYof/",
  },
];

const REVIEWS = [
  {
    name: "Carlos M.",
    text: "Melhor oficina da região. Atendimento impecável e serviço de qualidade.",
    stars: 5,
  },
  {
    name: "Rafael S.",
    text: "Minha CB 1000R ficou perfeita após a revisão. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Thiago P.",
    text: "Profissionais competentes e honestos. Minha moto está como nova.",
    stars: 5,
  },
];

export default function SocialProof() {
  return (
    <section className="bg-[#0f0f0f] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Nosso Trabalho
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Mais de{" "}
            <span className="text-red-500">400 motos</span>{" "}
            atendidas com excelência
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Cada moto recebe cuidado técnico especializado e atenção aos detalhes que fazem a diferença.
          </p>
        </div>

        {/* 🔥 GRID DE POSTS (FORMATO ORIGINAL MANTIDO) */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-2 mb-16">
          {INSTAGRAM_POSTS.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={post.image}
                alt={`Post Instagram ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* overlay igual antes */}
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* REVIEWS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 hover:border-red-600/30 transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} size={16} className="text-red-500 fill-red-500" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                  <span className="text-red-500 font-bold text-xs">
                    {review.name[0]}
                  </span>
                </div>

                <span className="text-white font-semibold text-sm">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}