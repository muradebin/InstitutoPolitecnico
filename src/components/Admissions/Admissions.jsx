import React, { useState } from 'react';
import { FaGraduationCap, FaMoneyBillWave, FaFileAlt, FaCalendarAlt, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import './Admissions.css';

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('requisitos');

  const requisitos = [
    {
      id: 1,
      titulo: "Documentação Necessária",
      items: [
        "Certificado de conclusão do ensino básico (original e cópia)",
        "Histórico escolar completo (original e cópia)",
        "Documento de identificação válido (BI ou Passaporte)",
        "4 fotografias tipo passe (recentes)",
        "Cartão de vacinas atualizado",
        "Certificado de residência"
      ]
    },
    {
      id: 2,
      titulo: "Requisitos Acadêmicos",
      items: [
        "Conclusão do ensino básico com média mínima de 12 valores",
        "Aprovação em Matemática e Português",
        "Idade entre 14 e 18 anos para novos ingressos",
        "Conhecimentos básicos de informática (preferencial)",
        "Bom domínio da língua portuguesa"
      ]
    },
    {
      id: 3,
      titulo: "Processo de Seleção",
      items: [
        "Teste de admissão em Matemática",
        "Teste de Língua Portuguesa",
        "Entrevista com a coordenação pedagógica",
        "Avaliação do histórico escolar",
        "Teste de aptidão específico (dependendo do curso)"
      ]
    }
  ];

  const propinas = [
    {
      id: 1,
      curso: "Técnico de Enfermagem Geral",
      matricula: 5000,
      mensalidade: 3500,
      duracao: "3 anos",
      material: "Kit básico incluído"
    },
    {
      id: 2,
      curso: "Técnico de Nutrição",
      matricula: 4500,
      mensalidade: 3000,
      duracao: "2.5 anos",
      material: "Kit básico incluído"
    },
    {
      id: 3,
      curso: "Técnico de Saúde Materno Infantil",
      matricula: 5000,
      mensalidade: 3500,
      duracao: "3 anos",
      material: "Kit básico incluído"
    },
    {
      id: 4,
      curso: "Técnico de Medicina Geral",
      matricula: 5500,
      mensalidade: 4000,
      duracao: "3 anos",
      material: "Kit básico incluído"
    },
    {
      id: 5,
      curso: "Técnico de Administração Pública",
      matricula: 4000,
      mensalidade: 2800,
      duracao: "2.5 anos",
      material: "Material didático incluído"
    }
  ];

  return (
    <section className="admissions-section">
      <div className="admissions-hero">
        <div className="admissions-hero-content">
          <h1>Admissões</h1>
          <p>Informações sobre requisitos e propinas para ingressar no instituto</p>
        </div>
      </div>

      <div className="admissions-container">
        <div className="admissions-tabs">
          <button 
            className={`tab-button ${activeTab === 'requisitos' ? 'active' : ''}`}
            onClick={() => setActiveTab('requisitos')}
          >
            <FaGraduationCap className="tab-icon" />
            Requisitos de Admissão
          </button>
          <button 
            className={`tab-button ${activeTab === 'propinas' ? 'active' : ''}`}
            onClick={() => setActiveTab('propinas')}
          >
            <FaMoneyBillWave className="tab-icon" />
            Propinas e Taxas
          </button>
        </div>

        <div className="admissions-content">
          {activeTab === 'requisitos' ? (
            <div className="requisitos-content">
              <div className="info-box">
                <FaInfoCircle className="info-icon" />
                <p>O processo de admissão é realizado anualmente, com inscrições abertas de Janeiro a Março. Recomendamos que os candidatos preparem toda a documentação com antecedência.</p>
              </div>

              {requisitos.map((req) => (
                <div key={req.id} className="requisitos-card">
                  <h3>{req.titulo}</h3>
                  <ul>
                    {req.items.map((item, index) => (
                      <li key={index}>
                        <FaCheckCircle className="check-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="calendario-box">
                <h3>
                  <FaCalendarAlt className="calendar-icon" />
                  Calendário de Admissões 2024
                </h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="date">Janeiro</span>
                    <p>Abertura das inscrições</p>
                  </div>
                  <div className="timeline-item">
                    <span className="date">Março</span>
                    <p>Encerramento das inscrições</p>
                  </div>
                  <div className="timeline-item">
                    <span className="date">Abril</span>
                    <p>Testes de admissão</p>
                  </div>
                  <div className="timeline-item">
                    <span className="date">Maio</span>
                    <p>Resultados e matrículas</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="propinas-content">
              <div className="info-box">
                <FaInfoCircle className="info-icon" />
                <p>As propinas podem ser pagas mensalmente ou em uma única parcela com 10% de desconto. Oferecemos bolsas de estudo para alunos com excelente desempenho acadêmico.</p>
              </div>

              <div className="propinas-table">
                <table>
                  <thead>
                    <tr>
                      <th>Curso</th>
                      <th>Matrícula</th>
                      <th>Mensalidade</th>
                      <th>Duração</th>
                      <th>Material</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propinas.map((prop) => (
                      <tr key={prop.id}>
                        <td>{prop.curso}</td>
                        <td>{prop.matricula} MT</td>
                        <td>{prop.mensalidade} MT</td>
                        <td>{prop.duracao}</td>
                        <td>{prop.material}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="payment-info">
                <h3>Formas de Pagamento</h3>
                <div className="payment-grid">
                  <div className="payment-card">
                    <h4>Pagamento Único</h4>
                    <p>Desconto de 10% no pagamento anual</p>
                  </div>
                  <div className="payment-card">
                    <h4>Pagamento Mensal</h4>
                    <p>Até o dia 10 de cada mês</p>
                  </div>
                  <div className="payment-card">
                    <h4>Bolsas de Estudo</h4>
                    <p>Disponíveis para alunos qualificados</p>
                  </div>
                  <div className="payment-card">
                    <h4>Descontos Especiais</h4>
                    <p>Para irmãos e grupos</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Admissions; 