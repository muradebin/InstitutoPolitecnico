import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-verde shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src={logo}
                alt="Instituto Médio Politécnico Heróis da Pátria"
              />
              <span className="ml-3 text-white font-bold text-lg hidden md:block">
                Instituto Médio Politécnico<br />Heróis da Pátria
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="nav-link font-medium">Início</Link>
            <Link to="/sobre" className="nav-link font-medium">Sobre Nós</Link>
            <Link to="/cursos" className="nav-link font-medium">Cursos</Link>
            <Link to="/galeria" className="nav-link font-medium">Galeria</Link>
            <Link to="/contactos" className="nav-link font-medium">Contactos</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amarelo-suave focus:outline-none"
            >
              <svg
                className="h-6 w-6"
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
        <div className="md:hidden bg-verde-claro">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="nav-link block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className="nav-link block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              to="/cursos"
              className="nav-link block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Cursos
            </Link>
            <Link
              to="/galeria"
              className="nav-link block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Galeria
            </Link>
            <Link
              to="/contactos"
              className="nav-link block px-3 py-2 rounded-md text-base font-medium"
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
