import React from 'react';
import campus1 from '../assets/campus-1.jpg';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-texto-escuro mb-4">Sobre Nós</h2>
          <div className="w-24 h-1 bg-amarelo mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça a história e a missão do Instituto Médio Politécnico Heróis da Pátria de Nhamatanda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={campus1}
              alt="Campus do Instituto"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-texto-escuro mb-4">Nossa Missão</h3>
            <p className="text-gray-700 mb-6">
              O Instituto Médio Politécnico Heróis da Pátria tem como missão formar profissionais técnicos qualificados e comprometidos com o desenvolvimento de Moçambique, através de um ensino de excelência que combina teoria e prática, preparando os estudantes para os desafios do mercado de trabalho e para contribuir ativamente para o progresso da sociedade moçambicana.
            </p>

            <h3 className="text-2xl font-bold text-texto-escuro mb-4">Nossa Visão</h3>
            <p className="text-gray-700 mb-6">
              Ser reconhecido como uma instituição de referência na formação técnica e profissional em Moçambique, destacando-se pela qualidade do ensino, pela excelência dos seus formandos e pelo impacto positivo nas comunidades onde atuamos.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-azul-royal/10 p-4 rounded-lg">
                <h4 className="font-bold text-azul-royal mb-2">Excelência</h4>
                <p className="text-sm text-gray-700">Buscamos a excelência em todas as nossas atividades educativas.</p>
              </div>
              <div className="bg-verde/10 p-4 rounded-lg">
                <h4 className="font-bold text-verde mb-2">Inovação</h4>
                <p className="text-sm text-gray-700">Promovemos a inovação e a criatividade no processo de ensino-aprendizagem.</p>
              </div>
              <div className="bg-amarelo/10 p-4 rounded-lg">
                <h4 className="font-bold text-texto-escuro mb-2">Integridade</h4>
                <p className="text-sm text-gray-700">Atuamos com ética, transparência e responsabilidade.</p>
              </div>
              <div className="bg-azul-claro/10 p-4 rounded-lg">
                <h4 className="font-bold text-azul-claro mb-2">Inclusão</h4>
                <p className="text-sm text-gray-700">Valorizamos a diversidade e promovemos a inclusão social.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
