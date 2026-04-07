import { Shield, Users, Heart, Target } from 'lucide-react';

export default function SoccerSchool() {
  return (
    <section id="escola" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-accent1 text-neutral font-bold px-4 py-1 rounded-full text-sm mb-6 shadow-sm">
              MATRÍCULAS ABERTAS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Escola de Futebol em Itupeva
            </h2>
            <p className="text-xl text-secondary mb-6 font-semibold">
              Formando talentos e cidadãos de 4 a 15 anos.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Na Sportfoot Society, acreditamos que o esporte é uma ferramenta poderosa para o desenvolvimento humano. Nossa metodologia vai além das quatro linhas: ensinamos disciplina, respeito e trabalho em equipe, proporcionando um ambiente seguro e inspirador para o seu filho crescer com confiança.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mr-4">
                  <Users className="text-secondary" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">Turmas por Faixa Etária</h4>
                  <p className="text-gray-600">Aulas cuidadosamente adaptadas para o desenvolvimento motor, cognitivo e social de crianças e adolescentes (4 a 15 anos).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mr-4">
                  <Shield className="text-secondary" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">Treinamento para Goleiros</h4>
                  <p className="text-gray-600">Sabemos que a posição exige habilidades únicas. Oferecemos preparação específica focada em técnica, reflexo, posicionamento e liderança.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mr-4">
                  <Heart className="text-secondary" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">Acompanhamento Consultivo</h4>
                  <p className="text-gray-600">Mantemos uma comunicação próxima e transparente com os pais, fornecendo feedback constante sobre a evolução dos alunos.</p>
                </div>
              </div>
            </div>

            <a 
              href="#form-aula-experimental" 
              className="inline-flex items-center justify-center bg-secondary text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-primary transition-colors duration-300 shadow-lg w-full sm:w-auto"
            >
              <Target className="mr-2" size={24} />
              AGENDAR AULA EXPERIMENTAL
            </a>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1518605368461-1e1252220a77?q=80&w=2070&auto=format&fit=crop" 
                  alt="Treino de futebol infantil" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop" 
                  alt="Crianças jogando futebol" 
                  className="rounded-2xl w-full h-48 object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=2071&auto=format&fit=crop" 
                  alt="Treinamento de goleiro" 
                  className="rounded-2xl w-full h-48 object-cover shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop" 
                  alt="Quadra de futebol" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Formulário de Aula Experimental */}
        <div id="form-aula-experimental" className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-accent1">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Agende uma Aula Experimental Gratuita</h3>
            <p className="text-gray-600">Preencha os dados abaixo e nossa equipe entrará em contato para confirmar o melhor dia e horário.</p>
          </div>
          <form className="space-y-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome do Responsável</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary outline-none" placeholder="Nome completo" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone / WhatsApp</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary outline-none" placeholder="(11) 90000-0000" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome do Aluno(a)</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary outline-none" placeholder="Nome da criança/jovem" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Idade do Aluno(a)</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary outline-none" required>
                  <option value="">Selecione a idade...</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i + 4}>{i + 4} anos</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tem interesse em treino para goleiro?</label>
              <div className="flex space-x-6">
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="goleiro" value="sim" className="mr-2 w-4 h-4 text-secondary focus:ring-secondary" /> Sim
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="goleiro" value="nao" className="mr-2 w-4 h-4 text-secondary focus:ring-secondary" defaultChecked /> Não
                </label>
              </div>
            </div>
            <div className="text-center pt-6">
              <button type="submit" className="bg-accent1 text-neutral font-bold text-lg px-10 py-4 rounded-xl hover:bg-accent2 transition-colors duration-300 shadow-lg w-full md:w-auto">
                SOLICITAR AGENDAMENTO
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
