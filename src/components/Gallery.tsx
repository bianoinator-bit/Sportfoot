import { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('Todos');

  const categories = ['Todos', 'Escola de Futebol', 'Areia', 'Footbar'];

  const images = [
    { src: 'https://images.unsplash.com/photo-1518605368461-1e1252220a77?q=80&w=800&auto=format&fit=crop', category: 'Escola de Futebol', alt: 'Treino Infantil' },
    { src: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=800&auto=format&fit=crop', category: 'Areia', alt: 'Quadra de Areia' },
    { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop', category: 'Footbar', alt: 'Footbar' },
    { src: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop', category: 'Escola de Futebol', alt: 'Escola de Futebol' },
    { src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop', category: 'Footbar', alt: 'Bebidas' },
    { src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop', category: 'Areia', alt: 'Esportes na Areia' },
  ];

  const filteredImages = activeTab === 'Todos' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">NOSSA ESTRUTURA</h2>
          <div className="w-24 h-1 bg-accent1 mx-auto mb-8"></div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                  activeTab === category 
                    ? 'bg-secondary text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl aspect-[4/3] shadow-md cursor-pointer">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-accent1 font-bold text-xl tracking-wider uppercase border-2 border-accent1 px-4 py-2 rounded-lg">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
