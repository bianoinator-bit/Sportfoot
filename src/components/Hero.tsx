export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
          BEM-VINDO À <span className="text-accent1">SPORTFOOT SOCIETY</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 font-medium drop-shadow-md">
          A Melhor Escola de Futebol e Campo Society de Itupeva
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#agendar" 
            className="w-full sm:w-auto px-8 py-4 bg-accent1 text-neutral font-bold text-lg rounded-full hover:bg-accent2 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            AGENDE SUA QUADRA
          </a>
          <a 
            href="#sobre" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-secondary text-white font-bold text-lg rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
          >
            SAIBA MAIS
          </a>
        </div>
      </div>
    </section>
  );
}
