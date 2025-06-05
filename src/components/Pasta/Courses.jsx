import React from 'react';
import { FaStethoscope, FaAppleAlt, FaBaby, FaHospital, FaUniversity } from 'react-icons/fa';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Técnico de Enfermagem Geral',
      icon: <FaStethoscope className="text-4xl text-azul-royal" />,
      description: 'Formação completa em cuidados de enfermagem, com ênfase em procedimentos clínicos, administração de medicamentos e assistência ao paciente.',
      color: 'bg-azul-royal/10'
    },
    {
      id: 2,
      title: 'Técnico de Nutrição',
      icon: <FaAppleAlt className="text-4xl text-verde" />,
      description: 'Capacitação em avaliação nutricional, elaboração de dietas terapêuticas e educação alimentar para promoção da saúde comunitária.',
      color: 'bg-verde/10'
    },
    {
      id: 3,
      title: 'Técnico de Saúde Materno Infantil',
      icon: <FaBaby className="text-4xl text-amarelo" />,
      description: 'Formação especializada em cuidados pré-natais, assistência ao parto e acompanhamento do desenvolvimento infantil nos primeiros anos de vida.',
      color: 'bg-amarelo/10'
    },
    {
      id: 4,
      title: 'Técnico de Medicina Geral',
      icon: <FaHospital className="text-4xl text-azul-claro" />,
      description: 'Preparação técnica para atuar em unidades de saúde, com foco em diagnóstico básico, primeiros socorros e procedimentos ambulatoriais.',
      color: 'bg-azul-claro/10'
    },
    {
      id: 5,
      title: 'Técnico de Administração Pública e Gestão Autárquica',
      icon: <FaUniversity className="text-4xl text-texto-escuro" />,
      description: 'Formação em gestão pública, legislação administrativa e processos de governança local para atuação em órgãos públicos e autarquias.',
      color: 'bg-texto-escuro/10'
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-texto-escuro mb-4">Cursos Oferecidos</h2>
          <div className="w-24 h-1 bg-amarelo mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossa oferta formativa e prepare-se para uma carreira de sucesso
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`card p-6 ${course.color} border border-gray-200 hover:border-azul-royal transition-all duration-300`}
            >
              <div className="mb-4">{course.icon}</div>
              <h3 className="text-xl font-bold text-texto-escuro mb-3">{course.title}</h3>
              <p className="text-gray-700 mb-6">{course.description}</p>
              <button className="btn-outline text-sm">Saiba Mais</button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Todos os cursos têm duração de 3 anos e incluem estágio profissional
          </p>
          <button className="btn-primary">
            Processo de Admissão
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
