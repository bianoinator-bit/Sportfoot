import { Clock, MessageCircle, Zap } from 'lucide-react';

export default function Booking() {
  return (
    <section id="agendar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Formulário */}
          <div className="lg:w-3/5 bg-white p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-8">RESERVE AGORA</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Seu nome" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="seu@email.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="(11) 90000-0000" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">O que deseja reservar?</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" required>
                    <option value="">Selecione...</option>
                    <option value="society">Campo Society</option>
                    <option value="areia">Quadra de Areia</option>
                    <option value="churrasqueira">Churrasqueira</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Horário</label>
                  <input type="time" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nº Pessoas</label>
                  <input type="number" min="2" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Ex: 10" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem Adicional (Opcional)</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Alguma observação?"></textarea>
              </div>

              <button type="submit" className="w-full bg-accent1 text-neutral font-bold text-lg py-4 rounded-lg hover:bg-accent2 transition-colors duration-300 shadow-md">
                SOLICITAR RESERVA
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Receberemos sua solicitação e confirmaremos via WhatsApp.
              </p>
            </form>
          </div>

          {/* Informações */}
          <div className="lg:w-2/5 bg-primary p-8 md:p-12 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8 text-accent1">Por que agendar conosco?</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <Zap className="text-accent2 mr-4 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Resposta Rápida</h4>
                  <p className="text-gray-300">Confirmaremos sua reserva em até 2 horas durante o horário comercial.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageCircle className="text-accent2 mr-4 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Via WhatsApp</h4>
                  <p className="text-gray-300">Toda a comunicação é feita de forma rápida e prática pelo nosso WhatsApp: (11) 99490-9351.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-accent2 mr-4 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-2">Flexibilidade</h4>
                  <p className="text-gray-300">Horários variados todos os dias da semana para se adequar à sua rotina.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
