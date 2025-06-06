import React, { useState } from 'react';
import { FaStethoscope, FaAppleAlt, FaBaby, FaHospital, FaUniversity, FaClock, FaUsers, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const navigate = useNavigate();
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Técnico de Enfermagem Geral',
      icon: <FaStethoscope className="course-icon blue" />,
      description: 'Formação completa em cuidados de enfermagem, com ênfase em procedimentos clínicos, administração de medicamentos e assistência ao paciente.',
      colorClass: 'blue-bg',
      duration: '3 anos',
      vacancies: 40,
      employmentRate: '95%',
      highlights: [
        'Estágio em hospitais parceiros',
        'Laboratório de práticas moderno',
        'Certificação reconhecida nacionalmente'
      ]
    },
    {
      id: 2,
      title: 'Técnico de Nutrição',
      icon: <FaAppleAlt className="course-icon green" />,
      description: 'Capacitação em avaliação nutricional, elaboração de dietas terapêuticas e educação alimentar para promoção da saúde comunitária.',
      colorClass: 'green-bg',
      duration: '3 anos',
      vacancies: 35,
      employmentRate: '92%',
      highlights: [
        'Laboratório de análise de alimentos',
        'Projetos de educação nutricional',
        'Parcerias com clínicas e hospitais'
      ]
    },
    {
      id: 3,
      title: 'Técnico de Saúde Materno Infantil',
      icon: <FaBaby className="course-icon yellow" />,
      description: 'Formação especializada em cuidados pré-natais, assistência ao parto e acompanhamento do desenvolvimento infantil nos primeiros anos de vida.',
      colorClass: 'yellow-bg',
      duration: '3 anos',
      vacancies: 30,
      employmentRate: '94%',
      highlights: [
        'Práticas em maternidades',
        'Acompanhamento de gestantes',
        'Especialização em pediatria básica'
      ]
    },
    {
      id: 4,
      title: 'Técnico de Medicina Geral',
      icon: <FaHospital className="course-icon light-blue" />,
      description: 'Preparação técnica para atuar em unidades de saúde, com foco em diagnóstico básico, primeiros socorros e procedimentos ambulatoriais.',
      colorClass: 'light-blue-bg',
      duration: '3 anos',
      vacancies: 45,
      employmentRate: '96%',
      highlights: [
        'Práticas em centros de saúde',
        'Treinamento em emergências',
        'Equipamentos de última geração'
      ]
    },
    {
      id: 5,
      title: 'Técnico de Administração Pública',
      icon: <FaUniversity className="course-icon dark" />,
      description: 'Formação em gestão pública, legislação administrativa e processos de governança local para atuação em órgãos públicos e autarquias.',
      colorClass: 'dark-bg',
      duration: '2.5 anos',
      vacancies: 40,
      employmentRate: '90%',
      highlights: [
        'Estágio em órgãos públicos',
        'Projetos de gestão pública',
        'Visitas técnicas institucionais'
      ]
    }
  ];

  const handleAdmissaoClick = () => {
    navigate('/admissao');
  };

  const handleCourseHover = (courseId) => {
    setHoveredCourse(courseId);
  };

  return (
    <section id="cursos" className="courses-section">
      <div className="container-section">
        <div className="courses-header">
          <h2 className="courses-title">Cursos Oferecidos</h2>
          <p className="courses-description">
            Forme-se em uma das áreas mais promissoras da saúde e administração pública.
            Nossos cursos são reconhecidos nacionalmente e contam com infraestrutura moderna e corpo docente altamente qualificado.
          </p>
        </div>
        
        <div className="courses-grid">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`course-card ${course.colorClass}`}
              onMouseEnter={() => handleCourseHover(course.id)}
              onMouseLeave={() => handleCourseHover(null)}
            >
              <div className="course-icon-wrapper">{course.icon}</div>
              <h3 className="course-card-title">{course.title}</h3>
              <p className="course-card-description">{course.description}</p>
              
              <div className="course-info">
                <div className="info-item">
                  <FaClock />
                  <span>Duração</span>
                  <span>{course.duration}</span>
                </div>
                <div className="info-item">
                  <FaUsers />
                  <span>Vagas</span>
                  <span>{course.vacancies}</span>
                </div>
                <div className="info-item">
                  <FaBriefcase />
                  <span>Emprego</span>
                  <span>{course.employmentRate}</span>
                </div>
              </div>

              {hoveredCourse === course.id && (
                <div className="course-highlights">
                  <h4>Destaques do Curso:</h4>
                  <ul>
                    {course.highlights.map((highlight, index) => (
                      <li key={index}>
                        <FaGraduationCap /> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <button className="btn-outline">Saiba Mais</button>
            </div>
          ))}
        </div>
        
        <div className="courses-footer">
          <p className="courses-footer-text">
            Todos os cursos incluem estágio profissional e práticas em laboratórios modernos.
            Oferecemos bolsas de estudo e programas de monitoria para alunos destacados.
          </p>
          <button className="btn-primary" onClick={handleAdmissaoClick}>
            Processo de Admissão
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
