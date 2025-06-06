import React, { useState } from 'react';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import feira from '../../assets/Eventos/feira.png';
import workshop from '../../assets/Eventos/workshop.jpg';
import semana from '../../assets/Eventos/semana.png';
import encontro from '../../assets/Eventos/encontro.jpeg';
import simposio from '../../assets/Eventos/simposio.jpg';
import inovacao from '../../assets/Eventos/inovacao.jpg';
import './Events.css';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const eventos = [
    {
      id: 1,
      titulo: "Feira de Ciências e Tecnologia 2025",
      data: "15 de Maio, 2025",
      horario: "09:00 - 17:00",
      local: "Campus Principal - Auditório Central",
      categoria: "academico",
      imagem: feira,
      descricao: "Apresentação de projetos inovadores desenvolvidos pelos alunos dos cursos técnicos, com premiação para as melhores iniciativas.",
      vagas: 500
    },
    {
      id: 2,
      titulo: "Workshop de Empreendedorismo",
      data: "22 de Junho, 2025",
      horario: "14:00 - 18:00",
      local: "Sala de Conferências",
      categoria: "workshop",
      imagem: workshop,
      descricao: "Aprenda com especialistas como transformar seu conhecimento técnico em oportunidades de negócio.",
      vagas: 150
    },
    {
      id: 3,
      titulo: "Semana da Saúde",
      data: "10-14 de Julho, 2025",
      horario: "08:00 - 16:00",
      local: "Laboratórios de Saúde",
      categoria: "saude",
      imagem: semana,
      descricao: "Ciclo de palestras e atividades práticas sobre inovações na área da saúde e cuidados preventivos.",
      vagas: 300
    },
    {
      id: 4,
      titulo: "Encontro de Ex-Alunos 2025",
      data: "30 de Agosto, 2025",
      horario: "18:00 - 22:00",
      local: "Área de Convivência",
      categoria: "social",
      imagem: encontro,
      descricao: "Celebração anual que reúne ex-alunos para compartilhar experiências e networking.",
      vagas: 400
    },
    {
      id: 5,
      titulo: "Simpósio de Tecnologia Educacional",
      data: "12 de Setembro, 2025",
      horario: "09:00 - 18:00",
      local: "Centro de Convenções",
      categoria: "academico",
      imagem: simposio,
      descricao: "Discussões sobre as últimas tendências em tecnologia educacional e seu impacto no ensino técnico.",
      vagas: 250
    },
    {
      id: 6,
      titulo: "Jornada de Inovação Técnica",
      data: "05 de Outubro, 2025",
      horario: "10:00 - 16:00",
      local: "Laboratórios Integrados",
      categoria: "workshop",
      imagem: inovacao,
      descricao: "Apresentação de novas tecnologias e metodologias aplicadas ao ensino técnico profissionalizante.",
      vagas: 200
    }
  ];

  const filtrarEventos = (categoria) => {
    setActiveFilter(categoria);
  };

  const eventosFiltrados = activeFilter === 'todos' 
    ? eventos 
    : eventos.filter(evento => evento.categoria === activeFilter);

  return (
    <section className="events-section">
      <div className="events-hero">
        <div className="events-hero-content">
          <h1>Eventos do Instituto</h1>
          <p>Confira nossa programação de eventos e participe das atividades</p>
        </div>
      </div>

      <div className="events-container">
        <div className="events-filters">
          <button 
            className={`filter-button ${activeFilter === 'todos' ? 'active' : ''}`}
            onClick={() => filtrarEventos('todos')}
          >
            Todos
          </button>
          <button 
            className={`filter-button ${activeFilter === 'academico' ? 'active' : ''}`}
            onClick={() => filtrarEventos('academico')}
          >
            Acadêmicos
          </button>
          <button 
            className={`filter-button ${activeFilter === 'workshop' ? 'active' : ''}`}
            onClick={() => filtrarEventos('workshop')}
          >
            Workshops
          </button>
          <button 
            className={`filter-button ${activeFilter === 'saude' ? 'active' : ''}`}
            onClick={() => filtrarEventos('saude')}
          >
            Saúde
          </button>
          <button 
            className={`filter-button ${activeFilter === 'social' ? 'active' : ''}`}
            onClick={() => filtrarEventos('social')}
          >
            Sociais
          </button>
        </div>

        <div className="events-grid">
          {eventosFiltrados.map((evento) => (
            <div key={evento.id} className="event-card">
              <div className="event-image">
                <img src={evento.imagem} alt={evento.titulo} />
                <div className="event-category">{evento.categoria}</div>
              </div>
              <div className="event-content">
                <h3 className="event-title">{evento.titulo}</h3>
                <p className="event-description">{evento.descricao}</p>
                <div className="event-details">
                  <div className="detail-item">
                    <FaCalendar className="detail-icon" />
                    <span>{evento.data}</span>
                  </div>
                  <div className="detail-item">
                    <FaClock className="detail-icon" />
                    <span>{evento.horario}</span>
                  </div>
                  <div className="detail-item">
                    <FaMapMarkerAlt className="detail-icon" />
                    <span>{evento.local}</span>
                  </div>
                  <div className="detail-item">
                    <FaUsers className="detail-icon" />
                    <span>{evento.vagas} vagas</span>
                  </div>
                </div>
                <button className="event-button">Inscrever-se</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events; 