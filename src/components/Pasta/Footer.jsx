import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-verde text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Coluna 1: Logo e descrição */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={logo} 
                alt="Instituto Médio Politécnico Heróis da Pátria" 
                className="h-16 w-16 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="font-bold text-lg">Instituto Médio Politécnico</h3>
                <p className="text-sm">Heróis da Pátria</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Formando profissionais de excelência para o futuro de Moçambique desde 1995, com compromisso, qualidade e dedicação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amarelo transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-amarelo transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-amarelo transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-amarelo transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Coluna 2: Links rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Início</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Cursos</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contactos</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Admissões</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Notícias</a></li>
            </ul>
          </div>
          
          {/* Coluna 3: Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Contacte-nos</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Av. Principal, Nhamatanda, Província de Sofala, Moçambique</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>+258 23 123 4567</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <span>+258 84 567 8901</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <span>info@imphn.edu.mz</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Instituto Médio Politécnico Heróis da Pátria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
