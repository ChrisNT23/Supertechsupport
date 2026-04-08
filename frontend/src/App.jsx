import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import FAQAccordion from './components/FAQAccordion';
import PrivacyModal from './components/PrivacyModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      <div className="support-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#2c9bf0' }}>Atención al Cliente InfinityMobile</h1>
        <p style={{ color: '#6c757d', marginTop: '0.5rem' }}>Estamos aquí para ayudarte. Encuentra respuestas o contáctanos directamente.</p>
      </div>

      <div className="support-grid">
        {/* Left Column */}
        <section className="form-section">
          <ContactForm />
        </section>

        {/* Right Column */}
        <section className="faq-section">
          <FAQAccordion />

          <div className="legal-section">
            <div className="legal-card">
              <a
                href="#"
                className="modal-link"
                onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
              >
                Ver Política de Privacidad
              </a>
              <p className="version">InfinityMobile v1.0.0 - Todos los derechos reservados.</p>
            </div>
          </div>
        </section>
      </div>

      <PrivacyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
