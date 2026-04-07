import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      text: "Melhor quadra de Itupeva! O gramado é excelente e o barzinho depois do jogo é sensacional.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      text: "As quadras de areia são perfeitas para o beach tennis. Ambiente super familiar e agradável.",
      rating: 5
    },
    {
      name: "João Pedro",
      text: "Atendimento nota 10. Sempre jogamos futsal aqui e a estrutura não deixa a desejar em nada.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">O Que Dizem Nossos Clientes</h2>
          <div className="w-24 h-1 bg-accent1 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl border-l-4 border-accent1 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-accent2 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
              <p className="font-bold text-neutral">{testimonial.name}</p>
              <p className="text-sm text-gray-500">Avaliação do Google</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
