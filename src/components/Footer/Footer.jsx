import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Coluna 1: Logo e descrição */}
          <div className="footer-column">
            <div className="footer-logo">
              <img
                src={logo}
                alt="Logotipo do Instituto Médio Politécnico Heróis da Pátria"
                className="logo-image"
              />
              <div className="logo-text">
                <h3 className="logo-title">Instituto Médio Politécnico</h3>
                <p className="logo-subtitle">Heróis da Pátria Nhamatanda</p>
              </div>
            </div>
            <p className="footer-description">
              Formando profissionais de excelência para o futuro de Moçambique
              desde 1995, com compromisso, qualidade e dedicação.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div className="footer-column">
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="quick-links">
              <li><Link to="/" className="footer-link">Início</Link></li>
              <li><Link to="/sobre" className="footer-link">Sobre Nós</Link></li>
              <li><Link to="/reitoria" className="footer-link">Reitoria</Link></li>
              <li><Link to="/cursos" className="footer-link">Cursos</Link></li>
              <li><Link to="/galeria" className="footer-link">Galeria</Link></li>
              <li><Link to="/eventos" className="footer-link">Eventos</Link></li>
              <li><Link to="/admissao" className="footer-link">Admissão</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contacto */}
          <div className="footer-column">
            <h3 className="footer-title">Contacte-nos</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-icon material-symbols-outlined">location_on</span>
                <span className="contact-text">
                  Av. Principal, Nhamatanda, Província de Sofala, Moçambique
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon material-symbols-outlined">call</span>
                <span className="contact-text">+258 23 123 4567</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon material-symbols-outlined">phone_iphone</span>
                <span className="contact-text">+258 84 567 8901</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon material-symbols-outlined">mail</span>
                <span className="contact-text">info@imphn.edu.mz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Instituto Médio Politécnico Heróis da Pátria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
