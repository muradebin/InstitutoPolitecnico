import React, { useState, useEffect, useRef } from 'react';
import { FaUserGraduate, FaUsers, FaAward, FaChalkboardTeacher } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      icon: <FaUsers className="stats-icon" />,
      number: 1500,
      title: "Estudantes Inscritos",
      description: "Atualmente matriculados em nossos cursos",
      suffix: "+"
    },
    {
      id: 2,
      icon: <FaUserGraduate className="stats-icon" />,
      number: 5000,
      title: "Alunos Graduados",
      description: "Profissionais formados desde 1995",
      suffix: "+"
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher className="stats-icon" />,
      number: 50,
      title: "Professores Qualificados",
      description: "Corpo docente especializado",
      suffix: ""
    },
    {
      id: 4,
      icon: <FaAward className="stats-icon" />,
      number: 95,
      title: "Taxa de Empregabilidade",
      description: "Dos nossos graduados em 2023",
      suffix: "%"
    }
  ];

  // Componente que anima a contagem dos números
  const CountUpAnimation = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      } else {
        setCount(0); // Reseta quando não está visível (opcional)
      }
    }, [isVisible, end, duration]);

    return <span className="stats-number">{count}{suffix}</span>;
  };

  // Observer para detectar quando a seção aparece na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }  // dispara assim que qualquer parte aparecer
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-overlay"></div>
      <div className="stats-container">
        <div className="stats-header">
          <h2>Nossos Números</h2>
          <p>Excelência em educação técnica e profissional</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stats-card">
              <div className="stats-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stats-content">
                <CountUpAnimation 
                  end={stat.number} 
                  suffix={stat.suffix}
                />
                <h3>{stat.title}</h3>
                <p>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
