import { MapPin, Phone, Clock, Map } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Informações */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">VISITE-NOS</h2>
            <div className="w-16 h-1 bg-accent1 mb-8"></div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="text-secondary mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-gray-700">
                  Rod. Vice Pref. Hermenegildo Tonoli, 875<br />
                  Santa Clara, Itupeva - SP<br />
                  13295-454
                </p>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-secondary mr-4 flex-shrink-0" size={24} />
                <a href="tel:+5511994909351" className="text-gray-700 hover:text-secondary transition-colors font-medium">
                  (11) 99490-9351
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 mb-8">
              <div className="bg-primary text-white p-4 font-bold text-center">
                HORÁRIOS DE FUNCIONAMENTO
              </div>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-700">Segunda e Quarta</td>
                    <td className="p-3 text-right text-green-600 font-bold">08h-11h | 15h-23h</td>
                  </tr>
                  <tr className="bg-white border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-700">Terça, Quinta e Sexta</td>
                    <td className="p-3 text-right text-green-600 font-bold">15h-23h</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium text-gray-700">Sábado</td>
                    <td className="p-3 text-right text-green-600 font-bold">08h-20h</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 font-medium text-gray-700">Domingo</td>
                    <td className="p-3 text-right text-green-600 font-bold">08h-13h</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-secondary p-4 mb-8">
              <p className="text-secondary font-medium">A 12 minutos do centro de Itupeva - Fácil acesso</p>
            </div>

            <a 
              href="https://maps.google.com/?q=Rod.+Vice+Pref.+Hermenegildo+Tonoli,+875+-+Santa+Clara,+Itupeva+-+SP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-gray-900 text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors"
            >
              <Map className="mr-2" size={20} />
              ABRIR ROTAS
            </a>
          </div>

          {/* Mapa */}
          <div className="lg:w-2/3 min-h-[400px] rounded-2xl overflow-hidden shadow-lg border-4 border-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.901511219808!2d-47.0396035!3d-23.1517457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf310000000001%3A0x0!2zMjPCsDA5JzA2LjMiUyA0N8KwMDInMjIuNiJX!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Sportfoot Society"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
