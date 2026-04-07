import { Trophy, Sun, Beer } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Trophy size={40} className="text-accent1 mb-4" />,
      title: "Futebol Society",
      description: "Campo de grama sintética de alta qualidade com amortecimento eficaz para a melhor performance.",
      bgColor: "bg-primary",
      titleColor: "text-accent1",
      textColor: "text-white"
    },
    {
      icon: <Sun size={40} className="text-accent2 mb-4" />,
      title: "Quadras de Areia",
      description: "Tamanho oficial para vôlei, futvôlei e beach tennis com areia de alta qualidade.",
      bgColor: "bg-secondary",
      titleColor: "text-accent2",
      textColor: "text-white"
    },
    {
      icon: <Beer size={40} className="text-accent1 mb-4" />,
      title: "Footbar",
      description: "Happy hour, bebidas geladas e TV com as melhores transmissões de partidas.",
      bgColor: "bg-neutral",
      titleColor: "text-accent1",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative z-20 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.bgColor} rounded-2xl p-8 shadow-xl transform hover:-translate-y-2 transition-transform duration-300`}
            >
              {feature.icon}
              <h3 className={`text-2xl font-bold ${feature.titleColor} mb-3`}>
                {feature.title}
              </h3>
              <p className={`${feature.textColor} opacity-90 leading-relaxed`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
