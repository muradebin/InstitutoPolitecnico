import React from 'react';
import { Link } from 'react-router-dom';  // Importa o Link
import heroBg from '../../assets/hero-bg.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      {/* Background Image */}
      <div className="hero-background" />
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Instituto Médio Politécnico<br />Heróis da Pátria Nhamatanda
        </h1>
        <p className="hero-subtitle">
          Formando profissionais de excelência para o futuro de Moçambique
        </p>
        <div className="hero-buttons">
          <Link to="/cursos" className="hero-button primary">
            Conheça Nossos Cursos
          </Link>
          <button className="hero-button secondary">
            Saiba Mais
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <svg 
          className="scroll-icon" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
