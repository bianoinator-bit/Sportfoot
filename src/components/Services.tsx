export default function Services() {
  const services = [
    {
      title: "ESCOLA DE FUTEBOL",
      image: "https://images.unsplash.com/photo-1518605368461-1e1252220a77?q=80&w=2070&auto=format&fit=crop",
      description: "Aulas para crianças e jovens de 4 a 15 anos com metodologia focada no desenvolvimento esportivo e cidadão. Inclui treino para goleiros.",
      badge: "MATRÍCULAS ABERTAS",
      badgeBg: "bg-accent1",
      titleColor: "text-primary",
      btnColor: "bg-secondary text-white hover:bg-primary"
    },
    {
      title: "QUADRAS DE AREIA",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop",
      description: "Duas quadras tamanho oficial para vôlei, futvôlei, beach tennis e treino funcional com infraestrutura completa.",
      badge: "TAMANHO OFICIAL",
      badgeBg: "bg-accent2",
      titleColor: "text-secondary",
      btnColor: "bg-primary text-white hover:bg-secondary"
    },
    {
      title: "FOOTBAR",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
      description: "Happy hour, bebidas geladas, TV com as melhores partidas, música ambiente, resenha agradável e locação de churrasqueiras para o seu evento.",
      badge: "HAPPY HOUR",
      badgeBg: "bg-accent1",
      titleColor: "text-neutral",
      btnColor: "bg-secondary text-white hover:bg-primary"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">NOSSOS SERVIÇOS</h2>
          <div className="w-24 h-1 bg-accent1 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 ${service.badgeBg} text-neutral font-bold text-xs px-3 py-1 rounded-full shadow-md`}>
                  {service.badge}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className={`text-2xl font-black ${service.titleColor} mb-4`}>{service.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href={service.title === "ESCOLA DE FUTEBOL" ? "#form-aula-experimental" : "#agendar"} 
                  className={`inline-block text-center w-full py-3 rounded-lg font-bold transition-colors duration-300 ${service.btnColor}`}
                >
                  {service.title === "FOOTBAR" ? "MAIS INFO" : "AGENDAR"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
