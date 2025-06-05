import React from 'react';
import campus1 from '../assets/campus-1.jpg';
import campus2 from '../assets/campus-2.jpg';
import heroBg from '../assets/hero-bg.jpg';

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
    <section id="galeria" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-texto-escuro mb-4">Galeria de Fotos</h2>
          <div className="w-24 h-1 bg-amarelo mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossas instalações e atividades através de imagens
          </p>
        </div>
        
        {/* Filtros de categoria (funcionalidade a ser implementada no futuro) */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-4 py-2 bg-azul-royal text-white rounded-md">Todas</button>
          <button className="px-4 py-2 bg-gray-200 text-texto-escuro rounded-md hover:bg-gray-300">Instalações</button>
          <button className="px-4 py-2 bg-gray-200 text-texto-escuro rounded-md hover:bg-gray-300">Académico</button>
          <button className="px-4 py-2 bg-gray-200 text-texto-escuro rounded-md hover:bg-gray-300">Eventos</button>
        </div>
        
        {/* Grid de imagens estilo masonry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg shadow-md group"
              style={{ height: image.id % 2 === 0 ? '300px' : '250px' }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-bold">{image.alt}</h4>
                <p className="text-white/80 text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="btn-outline">
            Ver Mais Fotos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
