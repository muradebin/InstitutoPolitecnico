import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contactos" className="contact-section">
      <div className="container-section">
        <div className="contact-header">
          <h2 className="contact-title">Contactos</h2>
          <div className="title-underline"></div>
          <p className="contact-description">
            Entre em contacto connosco para mais informações sobre os nossos cursos e serviços
          </p>
        </div>
        
        <div className="contact-content">
          {/* Formulário de contacto */}
          <div className="contact-form-container">
            <h3 className="form-title">Envie-nos uma mensagem</h3>
            
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-input"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-input"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="form-input"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="form-textarea"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          {/* Informações de contacto e mapa */}
          <div className="contact-info-container">
            <div className="contact-info">
              <h3 className="info-title">Informações de Contacto</h3>
              
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon-wrapper blue">
                    <FaMapMarkerAlt className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h4 className="info-subtitle">Endereço</h4>
                    <p className="info-text">Av. Principal, Nhamatanda, Província de Sofala, Moçambique</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon-wrapper green">
                    <FaPhone className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h4 className="info-subtitle">Telefone</h4>
                    <p className="info-text">+258 23 123 4567</p>
                    <p className="info-text">+258 84 567 8901</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon-wrapper yellow">
                    <FaEnvelope className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h4 className="info-subtitle">Email</h4>
                    <p className="info-text">info@imphn.edu.mz</p>
                    <p className="info-text">admissoes@imphn.edu.mz</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon-wrapper light-blue">
                    <FaClock className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h4 className="info-subtitle">Horário de Funcionamento</h4>
                    <p className="info-text">Segunda a Sexta: 8:00 - 17:00</p>
                    <p className="info-text">Sábado: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mapa (placeholder) */}
            <div className="map-container">
              <div className="map-placeholder">
                <p className="map-text">Mapa de Localização</p>
                <p className="map-subtext">(Mapa interativo a ser implementado)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 