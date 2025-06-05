import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              <img
                className="logo-image"
                src={logo}
                alt="Instituto Médio Politécnico Heróis da Pátria"
              />
              <span className="logo-text">
                Instituto Médio Politécnico<br />Heróis da Pátria
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="desktop-menu">
            <Link to="/" className="nav-link">Início</Link>
            <Link to="/sobre" className="nav-link">Sobre Nós</Link>
            <Link to="/cursos" className="nav-link">Cursos</Link>
            <Link to="/galeria" className="nav-link">Galeria</Link>
            <Link to="/contactos" className="nav-link">Contactos</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-toggle"
            >
              <svg
                className="menu-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-items">
            <Link
              to="/"
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              to="/cursos"
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              Cursos
            </Link>
            <Link
              to="/galeria"
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              Galeria
            </Link>
            <Link
              to="/contactos"
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contactos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 