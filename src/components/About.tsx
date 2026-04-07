import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    { text: "Ambiente Aconchegante", color: "text-primary" },
    { text: "Profissionais Qualificados", color: "text-secondary" },
    { text: "Infraestrutura de Qualidade", color: "text-neutral" }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="bg-gradient-to-r from-primary to-secondary py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">SOBRE A SPORTFOOT SOCIETY</h2>
          <div className="w-24 h-1 bg-accent1 mx-auto"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-primary mb-6">Seu Novo Espaço Favorito em Itupeva</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              A Sportfoot Society nasceu da paixão pelo esporte e do desejo de criar um ambiente perfeito para a prática esportiva e o convívio social. Localizados a apenas 12 minutos do centro de Itupeva, oferecemos uma estrutura moderna e completa para você, seus amigos e sua família.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Seja para aquele futebol sagrado da semana, uma partida de beach tennis no fim de tarde, ou apenas para curtir um happy hour com bebidas geladas assistindo ao seu time do coração, aqui é o seu lugar.
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                  <CheckCircle2 className="text-accent1 mr-4" size={24} />
                  <span className={`font-bold text-lg ${item.color}`}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop" 
                alt="Ambiente Sportfoot Society" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 border-4 border-accent1 rounded-2xl pointer-events-none m-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
