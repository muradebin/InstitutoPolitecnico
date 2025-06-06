import React from 'react';
import './Rectory.css';
import marcelo from '../../assets/marcelo.jpg';
import murade from '../../assets/murade.jpg';
import marcelo1 from '../../assets/marcelo1.jpg';

const Rectory = () => {
  const reitoria = [
    {
      id: 1,
      nome: "Eng. Marcelo Tesai Faife",
      cargo: "Diretor Geral",
      imagem: marcelo,
      descricao: "Doutor em Educação com mais de 20 anos de experiência em gestão escolar."
    },
    {
      id: 2,
      nome: "Eng. Murade Lobo",
      cargo: "Vice-Diretor Pedagógico",
      imagem: murade,
      descricao: "Especialista em Pedagogia e Gestão Educacional."
    },
    {
      id: 3,
      nome: "Dr. Tesai",
      cargo: "Diretor Administrativo",
      imagem: marcelo1,
      descricao: "Mestre em Administração Escolar e Gestão Financeira."
    }
  ];

  return (
    <section className="rectory-section">
      <div className="container">
        <h2 className="section-title">Nossa Reitoria</h2>
        <p className="section-description">
          Conheça os membros da reitoria do Instituto Médio Politécnico Heróis da Pátria
        </p>
        
        <div className="rectory-members">
          {reitoria.map((membro) => (
            <div key={membro.id} className="member-card">
              <div className="member-image">
                <img src={membro.imagem} alt={membro.nome} />
              </div>
              <div className="member-info">
                <h3>{membro.nome}</h3>
                <h4>{membro.cargo}</h4>
                <p>{membro.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rectory; 