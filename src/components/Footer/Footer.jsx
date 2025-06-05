import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo.jpg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Coluna 1: Logo e descrição */}
          <div className="footer-column">
            <div className="footer-logo">
              <img 
                src={logo} 
                alt="Instituto Médio Politécnico Heróis da Pátria" 
                className="logo-image"
              />
              <div className="logo-text">
                <h3 className="logo-title">Instituto Médio Politécnico</h3>
                <p className="logo-subtitle">Heróis da Pátria</p>
              </div>
            </div>
            <p className="footer-description">
              Formando profissionais de excelência para o futuro de Moçambique desde 1995, com compromisso, qualidade e dedicação.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="social-link">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="social-link">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="social-link">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Coluna 2: Links rápidos */}
          <div className="footer-column">
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="quick-links">
              <li><a href="#" className="footer-link">Início</a></li>
              <li><a href="#" className="footer-link">Sobre Nós</a></li>
              <li><a href="#" className="footer-link">Cursos</a></li>
              <li><a href="#" className="footer-link">Galeria</a></li>
              <li><a href="#" className="footer-link">Contactos</a></li>
              <li><a href="#" className="footer-link">Admissões</a></li>
              <li><a href="#" className="footer-link">Notícias</a></li>
            </ul>
          </div>
          
          {/* Coluna 3: Contacto */}
          <div className="footer-column">
            <h3 className="footer-title">Contacte-nos</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">Av. Principal, Nhamatanda, Província de Sofala, Moçambique</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-text">+258 23 123 4567</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">📱</span>
                <span className="contact-text">+258 84 567 8901</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">info@imphn.edu.mz</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Instituto Médio Politécnico Heróis da Pátria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 