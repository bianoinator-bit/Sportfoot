import { Phone, MessageCircle, Instagram, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-accent1 mb-4">FALE CONOSCO</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato por um de nossos canais ou envie uma mensagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Canais de Contato */}
          <div className="lg:col-span-1 space-y-8">
            <a href="tel:+5511994909351" className="flex items-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 group">
              <div className="bg-accent1 p-4 rounded-full mr-6 group-hover:scale-110 transition-transform">
                <Phone className="text-neutral" size={28} />
              </div>
              <div>
                <p className="text-sm text-blue-200 mb-1">Ligue para nós</p>
                <p className="font-bold text-xl">(11) 99490-9351</p>
              </div>
            </a>

            <a href="https://wa.me/5511994909351" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 group">
              <div className="bg-[#25D366] p-4 rounded-full mr-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="text-white" size={28} />
              </div>
              <div>
                <p className="text-sm text-blue-200 mb-1">WhatsApp</p>
                <p className="font-bold text-xl">Envie uma mensagem</p>
              </div>
            </a>

            <a href="https://instagram.com/sportfootsociety" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 group">
              <div className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-4 rounded-full mr-6 group-hover:scale-110 transition-transform">
                <Instagram className="text-white" size={28} />
              </div>
              <div>
                <p className="text-sm text-blue-200 mb-1">Instagram</p>
                <p className="font-bold text-xl">@sportfootsociety</p>
              </div>
            </a>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 md:p-10 shadow-2xl text-gray-800">
            <h3 className="text-2xl font-bold text-primary mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Seu nome" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="seu@email.com" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Como podemos ajudar?" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Sua mensagem..." required></textarea>
              </div>

              <button type="submit" className="w-full bg-accent1 text-neutral font-bold text-lg py-4 rounded-lg hover:bg-accent2 transition-colors duration-300 flex items-center justify-center">
                <Mail className="mr-2" size={20} />
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
