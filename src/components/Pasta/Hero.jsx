import React from 'react';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
          Instituto Médio Politécnico<br />Heróis da Pátria
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
          Formando profissionais de excelência para o futuro de Moçambique
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amarelo text-texto-escuro px-8 py-3 rounded-md font-bold hover:bg-amarelo-suave transition-colors duration-300 shadow-lg">
            Conheça Nossos Cursos
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-texto-escuro transition-colors duration-300 shadow-lg">
            Saiba Mais
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-8 h-8 text-white" 
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
