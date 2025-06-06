
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/logo.jpg';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Topbar azul escura */}
//       <div className="topbar">
//         <div className="topbar-left">
//           <a href="#">SOBRE IMPHPN</a>
//           <a href="#">RECLAMAÇÕES E SUGESTÕES</a>
//           <a href="#">FAQ</a>
//           <a href="#">CONTACTOS</a>
//         </div>
//         <div className="topbar-right">
//           <a href="#"><i className="fab fa-facebook-f"></i></a>
//           <a href="#"><i className="fab fa-linkedin-in"></i></a>
//           <a href="#"><i className="fab fa-skype"></i></a>
//         </div>
//       </div>

//       {/* Navbar principal */}
//       <nav className="navbar">
//         <div className="navbar-container">
//           <div className="navbar-content">
//             <div className="navbar-logo">
//               <Link to="/" className="logo-link">
//                 <img
//                   className="logo-image"
//                   src={logo}
//                   alt="Instituto Médio Politécnico Heróis da Pátria Nhamatanda"
//                 />
//                 <span className="logo-text">
//                   Instituto Médio Politécnico<br />Heróis da Pátria Nhamatanda
//                 </span>
//               </Link>
//             </div>

//             {/* Desktop menu */}
//             <div className="desktop-menu">
//               <Link to="/" className="nav-link">Início</Link>
//               <Link to="/sobre" className="nav-link">Sobre Nós</Link>
//               <Link to="/reitoria" className="nav-link">Reitoria</Link>
//               <Link to="/cursos" className="nav-link">Cursos</Link>
//               <Link to="/galeria" className="nav-link">Galeria</Link>
//               <Link to="/eventos" className="nav-link">Eventos</Link>
//               <Link to="/contactos" className="nav-link">Contactos</Link>
//             </div>

//             {/* Mobile menu button */}
//             <div className="mobile-menu-button">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="menu-toggle"
//               >
//                 <svg
//                   className="menu-icon"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   {isOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="mobile-menu">
//             <div className="mobile-menu-items">
//               <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Início</Link>
//               <Link to="/sobre" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Sobre Nós</Link>
//               <Link to="/reitoria" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Reitoria</Link>
//               <Link to="/cursos" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Cursos</Link>
//               <Link to="/galeria" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Galeria</Link>
//               <Link to="/contactos" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contactos</Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <a href="#">SOBRE IMPHPN</a>
          <a href="#">RECLAMAÇÕES E SUGESTÕES</a>
          <a href="#">FAQ</a>
          <a href="#">CONTACTOS</a>
        </div>
        <div className="topbar-right">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-skype"></i></a>
        </div>
      </div>

      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo">
              <Link to="/" className="logo-link">
                <img className="logo-image" src={logo} alt="Logo" />
                <span className="logo-text">
                  Instituto Médio Politécnico<br />Heróis da Pátria Nhamatanda
                </span>
              </Link>
            </div>

            <div className="desktop-menu">
              <Link to="/" className="nav-link">Início</Link>
              <Link to="/cursos" className="nav-link">Cursos</Link>
              <Link to="/eventos" className="nav-link">Eventos</Link>
              <Link to="/admissao" className="nav-link">Propinas e Admissão</Link>
              <Link to="/reitoria" className="nav-link">Reitoria</Link>
              <Link to="/galeria" className="nav-link">Galeria</Link>
              <Link to="/sobre" className="nav-link">Sobre Nós</Link>
              <Link to="/contactos" className="nav-link">Contactos</Link>
            </div>

            <div className="mobile-menu-button">
              <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
                <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-items">
              <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Início</Link>
              <Link to="/cursos" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Cursos</Link>
              <Link to="/eventos" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Eventos</Link>
              <Link to="/admissao" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Propinas e Admissão</Link>
              <Link to="/reitoria" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Reitoria</Link>
              <Link to="/galeria" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Galeria</Link>
              <Link to="/sobre" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Sobre Nós</Link>
              <Link to="/contactos" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contactos</Link>
            </div>
          </div>
        )}
      </nav>
      
    </>
  );
};

export default Navbar;
