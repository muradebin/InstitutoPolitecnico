import React from 'react';
import campus1 from '../../assets/campus-1.jpg';
import campus2 from '../../assets/campus-2.jpg';
import heroBg from '../../assets/hero-bg.jpg';
import './Gallery.css';

const Gallery = () => {
  // Imagens fictícias para a galeria (em produção seriam substituídas por imagens reais do instituto)
  const images = [
    { id: 1, src: campus1, alt: 'Campus principal', category: 'Instalações' },
    { id: 2, src: campus2, alt: 'Biblioteca', category: 'Instalações' },
    { id: 3, src: heroBg, alt: 'Laboratório', category: 'Instalações' },
    { id: 4, src: campus1, alt: 'Sala de aula', category: 'Académico' },
    { id: 5, src: campus2, alt: 'Formatura', category: 'Eventos' },
    { id: 6, src: heroBg, alt: 'Atividades práticas', category: 'Académico' },
  ];

  return (
    <section id="galeria" className="gallery-section">
      <div className="container-section">
        <div className="gallery-header">
          <h2 className="gallery-title">Galeria de Fotos</h2>
          <div className="title-underline"></div>
          <p className="gallery-description">
            Conheça nossas instalações e atividades através de imagens
          </p>
        </div>
        
        {/* Filtros de categoria (funcionalidade a ser implementada no futuro) */}
        <div className="gallery-filters">
          <button className="filter-button active">Todas</button>
          <button className="filter-button">Instalações</button>
          <button className="filter-button">Académico</button>
          <button className="filter-button">Eventos</button>
        </div>
        
        {/* Grid de imagens estilo masonry */}
        <div className="gallery-grid">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              style={{ height: image.id % 2 === 0 ? '300px' : '250px' }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h4 className="gallery-item-title">{image.alt}</h4>
                <p className="gallery-item-category">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-footer">
          <button className="btn-outline">
            Ver Mais Fotos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 