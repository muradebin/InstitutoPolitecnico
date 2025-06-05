import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contactos" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-texto-escuro mb-4">Contactos</h2>
          <div className="w-24 h-1 bg-amarelo mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entre em contacto connosco para mais informações sobre os nossos cursos e serviços
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário de contacto */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-texto-escuro mb-6">Envie-nos uma mensagem</h3>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azul-royal"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azul-royal"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azul-royal"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-azul-royal"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          {/* Informações de contacto e mapa */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-texto-escuro mb-6">Informações de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-azul-royal/10 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-azul-royal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-texto-escuro">Endereço</h4>
                    <p className="text-gray-700">Av. Principal, Nhamatanda, Província de Sofala, Moçambique</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-verde/10 p-3 rounded-full mr-4">
                    <FaPhone className="text-verde" />
                  </div>
                  <div>
                    <h4 className="font-bold text-texto-escuro">Telefone</h4>
                    <p className="text-gray-700">+258 23 123 4567</p>
                    <p className="text-gray-700">+258 84 567 8901</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amarelo/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-amarelo" />
                  </div>
                  <div>
                    <h4 className="font-bold text-texto-escuro">Email</h4>
                    <p className="text-gray-700">info@imphn.edu.mz</p>
                    <p className="text-gray-700">admissoes@imphn.edu.mz</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-azul-claro/10 p-3 rounded-full mr-4">
                    <FaClock className="text-azul-claro" />
                  </div>
                  <div>
                    <h4 className="font-bold text-texto-escuro">Horário de Funcionamento</h4>
                    <p className="text-gray-700">Segunda a Sexta: 8:00 - 17:00</p>
                    <p className="text-gray-700">Sábado: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mapa (placeholder) */}
            <div className="bg-white p-4 rounded-lg shadow-md h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 mb-2">Mapa de Localização</p>
                <p className="text-sm text-gray-400">(Mapa interativo a ser implementado)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
