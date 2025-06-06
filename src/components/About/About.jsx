import React, { useState } from 'react';
import { FaGraduationCap, FaLightbulb, FaHandshake, FaUsers, FaBullseye, FaChalkboardTeacher, FaAward, FaHeart } from 'react-icons/fa';
import campus1 from '../../assets/campus-1.jpg';
import './About.css';

const About = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  const values = [
    {
      id: 1,
      title: 'Excelência',
      text: 'Buscamos a excelência em todas as nossas atividades educativas, formando profissionais de alto nível.',
      icon: <FaAward className="value-icon" />,
      colorClass: 'blue'
    },
    {
      id: 2,
      title: 'Inovação',
      text: 'Promovemos a inovação e a criatividade no processo de ensino-aprendizagem, utilizando metodologias modernas.',
      icon: <FaLightbulb className="value-icon" />,
      colorClass: 'green'
    },
    {
      id: 3,
      title: 'Integridade',
      text: 'Atuamos com ética, transparência e responsabilidade em todas as nossas relações institucionais.',
      icon: <FaHandshake className="value-icon" />,
      colorClass: 'yellow'
    },
    {
      id: 4,
      title: 'Inclusão',
      text: 'Valorizamos a diversidade e promovemos a inclusão social, garantindo oportunidades para todos.',
      icon: <FaHeart className="value-icon" />,
      colorClass: 'light-blue'
    }
  ];

  const highlights = [
    {
      icon: <FaGraduationCap />,
      number: '1000+',
      text: 'Alunos Formados'
    },
    {
      icon: <FaChalkboardTeacher />,
      number: '50+',
      text: 'Professores Qualificados'
    },
    {
      icon: <FaBullseye />,
      number: '95%',
      text: 'Taxa de Empregabilidade'
    },
    {
      icon: <FaUsers />,
      number: '20+',
      text: 'Parcerias Institucionais'
    }
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="container-section">
        <div className="about-header">
          <h2 className="about-title">Sobre Nós</h2>
          <div className="title-underline"></div>
          <p className="about-description">
            Há mais de uma década formando profissionais qualificados e contribuindo para o desenvolvimento de Moçambique
          </p>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <img
              src={campus1}
              alt="Campus do Instituto Médio Politécnico Heróis da Pátria"
              className="about-image"
            />
          </div>

          <div className="about-text-content">
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <div className="highlight-number">{highlight.number}</div>
                  <div className="highlight-text">{highlight.text}</div>
                </div>
              ))}
            </div>

            <h3 className="content-title">Nossa Missão</h3>
            <p className="content-text">
              O Instituto Médio Politécnico Heróis da Pátria tem como missão formar profissionais técnicos qualificados e comprometidos com o desenvolvimento de Moçambique, através de um ensino de excelência que combina teoria e prática, preparando os estudantes para os desafios do mercado de trabalho e para contribuir ativamente para o progresso da sociedade moçambicana.
            </p>

            <h3 className="content-title">Nossa Visão</h3>
            <p className="content-text">
              Ser reconhecido como uma instituição de referência na formação técnica e profissional em Moçambique, destacando-se pela qualidade do ensino, pela excelência dos seus formandos e pelo impacto positivo nas comunidades onde atuamos.
            </p>

            <div className="values-grid">
              {values.map((value) => (
                <div
                  key={value.id}
                  className={`value-card ${value.colorClass}`}
                  onMouseEnter={() => setHoveredValue(value.id)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <h4 className="value-title">
                    {value.icon}
                    {value.title}
                  </h4>
                  <p className="value-text">{value.text}</p>
                  {hoveredValue === value.id && (
                    <div className="value-hover-content">
                      <span className="hover-text">Saiba mais</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 