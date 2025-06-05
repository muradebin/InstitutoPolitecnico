import React from 'react';
import campus1 from '../../assets/campus-1.jpg';
import './About.css';

const About = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="container-section">
        <div className="about-header">
          <h2 className="about-title">Sobre Nós</h2>
          <div className="title-underline"></div>
          <p className="about-description">
            Conheça a história e a missão do Instituto Médio Politécnico Heróis da Pátria de Nhamatanda
          </p>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <img
              src={campus1}
              alt="Campus do Instituto"
              className="about-image"
            />
          </div>

          <div className="about-text-content">
            <h3 className="content-title">Nossa Missão</h3>
            <p className="content-text">
              O Instituto Médio Politécnico Heróis da Pátria tem como missão formar profissionais técnicos qualificados e comprometidos com o desenvolvimento de Moçambique, através de um ensino de excelência que combina teoria e prática, preparando os estudantes para os desafios do mercado de trabalho e para contribuir ativamente para o progresso da sociedade moçambicana.
            </p>

            <h3 className="content-title">Nossa Visão</h3>
            <p className="content-text">
              Ser reconhecido como uma instituição de referência na formação técnica e profissional em Moçambique, destacando-se pela qualidade do ensino, pela excelência dos seus formandos e pelo impacto positivo nas comunidades onde atuamos.
            </p>

            <div className="values-grid">
              <div className="value-card blue">
                <h4 className="value-title">Excelência</h4>
                <p className="value-text">Buscamos a excelência em todas as nossas atividades educativas.</p>
              </div>
              <div className="value-card green">
                <h4 className="value-title">Inovação</h4>
                <p className="value-text">Promovemos a inovação e a criatividade no processo de ensino-aprendizagem.</p>
              </div>
              <div className="value-card yellow">
                <h4 className="value-title">Integridade</h4>
                <p className="value-text">Atuamos com ética, transparência e responsabilidade.</p>
              </div>
              <div className="value-card light-blue">
                <h4 className="value-title">Inclusão</h4>
                <p className="value-text">Valorizamos a diversidade e promovemos a inclusão social.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 