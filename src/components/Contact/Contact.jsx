import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaUser, 
  FaPaperPlane,
  FaWhatsapp,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      link: 'https://wa.me/258841234567'
    },
    {
      icon: <FaFacebook />,
      label: 'Facebook',
      link: 'https://facebook.com/imphn'
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      link: 'https://instagram.com/imphn'
    }
  ];

  return (
    <section id="contactos" className="contact-section">
      <div className="container-section">
        <div className="contact-header">
          <h2 className="contact-title">Contactos</h2>
          <div className="title-underline"></div>
          <p className="contact-description">
            Entre em contacto connosco para esclarecer suas dúvidas sobre nossos cursos, processo de admissão ou qualquer outra informação
          </p>
        </div>

        <div className="contact-content">
          {/* FORMULÁRIO DE CONTACTO */}
          <div className="contact-form-container">
            <h3 className="form-title">
              <FaPaperPlane className="title-icon" />
              Envie-nos uma mensagem
            </h3>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label 
                  htmlFor="name" 
                  className={`form-label ${focusedField === 'name' ? 'focused' : ''}`}
                >
                  <FaUser className="input-icon" />
                  Nome Completo
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <div className="form-group">
                <label 
                  htmlFor="email" 
                  className={`form-label ${focusedField === 'email' ? 'focused' : ''}`}
                >
                  <FaEnvelope className="input-icon" />
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="seu.email@exemplo.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <div className="form-group">
                <label 
                  htmlFor="subject" 
                  className={`form-label ${focusedField === 'subject' ? 'focused' : ''}`}
                >
                  Assunto
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Assunto da mensagem"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <div className="form-group">
                <label 
                  htmlFor="message" 
                  className={`form-label ${focusedField === 'message' ? 'focused' : ''}`}
                >
                  Mensagem
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows="5" 
                  className="form-textarea"
                  placeholder="Escreva sua mensagem aqui..."
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                <FaPaperPlane className="button-icon" />
              </button>
            </form>
          </div>

          {/* INFORMAÇÕES DE CONTACTO */}
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
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="info-link"
                    >
                      Ver no mapa
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper green">
                    <FaPhone className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h4 className="info-subtitle">Telefone</h4>
                    <p className="info-text">
                      <a href="tel:+25823123456" className="info-link">+258 23 123 4567</a>
                    </p>
                    <p className="info-text">
                      <a href="tel:+258845678901" className="info-link">+258 84 567 8901</a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-wrapper yellow">
                    <FaEnvelope className="info-icon" />
                  </div>
                  <div className="info-content">
                    <h4 className="info-subtitle">Email</h4>
                    <p className="info-text">
                      <a href="mailto:info@imphn.edu.mz" className="info-link">info@imphn.edu.mz</a>
                    </p>
                    <p className="info-text">
                      <a href="mailto:admissoes@imphn.edu.mz" className="info-link">admissoes@imphn.edu.mz</a>
                    </p>
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

              <div className="social-links">
                <h4 className="social-title">Siga-nos nas Redes Sociais</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-link"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <FaMapMarkerAlt className="map-icon" />
                <p className="map-text">Mapa de Localização</p>
                <p className="map-subtext">Clique para ver no Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
