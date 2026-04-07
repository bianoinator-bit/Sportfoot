import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Sobre */}
          <div>
            <a href="#" className="font-bold text-2xl tracking-tighter text-accent1 block mb-4">
              SPORTFOOT<span className="text-white">SOCIETY</span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Seu espaço de lazer, descontração e esportes em Itupeva. Estrutura completa para futsal, esportes de areia e um footbar para o seu happy hour.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/sportfootsociety" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-accent1 hover:bg-accent1 hover:text-neutral transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-accent1 hover:bg-accent1 hover:text-neutral transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-accent1 transition-colors">Home</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-accent1 transition-colors">Sobre Nós</a></li>
              <li><a href="#escola" className="text-gray-400 hover:text-accent1 transition-colors">Escola de Futebol</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-accent1 transition-colors">Serviços</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-accent1 transition-colors">Galeria</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-accent1 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Horários</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Seg & Qua:</span>
                <span className="text-accent1">08h-11h | 15h-23h</span>
              </li>
              <li className="flex justify-between">
                <span>Ter, Qui & Sex:</span>
                <span className="text-accent1">15h-23h</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span className="text-accent1">08h-20h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-accent1">08h-13h</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-accent1 flex-shrink-0 mt-1" />
                <span className="text-sm">Rod. Vice Pref. Hermenegildo Tonoli, 875 - Santa Clara, Itupeva - SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-accent1 flex-shrink-0" />
                <span className="text-sm">(11) 99490-9351</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-accent1 flex-shrink-0" />
                <span className="text-sm">contato@sportfootsociety.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sportfoot Society. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
