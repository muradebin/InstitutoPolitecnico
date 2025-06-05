import React from 'react';
import { FaStethoscope, FaAppleAlt, FaBaby, FaHospital, FaUniversity } from 'react-icons/fa';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Técnico de Enfermagem Geral',
      icon: <FaStethoscope className="course-icon blue" />,
      description: 'Formação completa em cuidados de enfermagem, com ênfase em procedimentos clínicos, administração de medicamentos e assistência ao paciente.',
      colorClass: 'blue-bg'
    },
    {
      id: 2,
      title: 'Técnico de Nutrição',
      icon: <FaAppleAlt className="course-icon green" />,
      description: 'Capacitação em avaliação nutricional, elaboração de dietas terapêuticas e educação alimentar para promoção da saúde comunitária.',
      colorClass: 'green-bg'
    },
    {
      id: 3,
      title: 'Técnico de Saúde Materno Infantil',
      icon: <FaBaby className="course-icon yellow" />,
      description: 'Formação especializada em cuidados pré-natais, assistência ao parto e acompanhamento do desenvolvimento infantil nos primeiros anos de vida.',
      colorClass: 'yellow-bg'
    },
    {
      id: 4,
      title: 'Técnico de Medicina Geral',
      icon: <FaHospital className="course-icon light-blue" />,
      description: 'Preparação técnica para atuar em unidades de saúde, com foco em diagnóstico básico, primeiros socorros e procedimentos ambulatoriais.',
      colorClass: 'light-blue-bg'
    },
    {
      id: 5,
      title: 'Técnico de Administração Pública e Gestão Autárquica',
      icon: <FaUniversity className="course-icon dark" />,
      description: 'Formação em gestão pública, legislação administrativa e processos de governança local para atuação em órgãos públicos e autarquias.',
      colorClass: 'dark-bg'
    }
  ];

  return (
    <section id="cursos" className="courses-section">
      <div className="container-section">
        <div className="courses-header">
          <h2 className="courses-title">Cursos Oferecidos</h2>
          <div className="title-underline"></div>
          <p className="courses-description">
            Conheça nossa oferta formativa e prepare-se para uma carreira de sucesso
          </p>
        </div>
        
        <div className="courses-grid">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`course-card ${course.colorClass}`}
            >
              <div className="course-icon-wrapper">{course.icon}</div>
              <h3 className="course-card-title">{course.title}</h3>
              <p className="course-card-description">{course.description}</p>
              <button className="btn-outline">Saiba Mais</button>
            </div>
          ))}
        </div>
        
        <div className="courses-footer">
          <p className="courses-footer-text">
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