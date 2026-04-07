import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <button 
        className="accordion-header" 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={18} color="#2c9bf0" /> : <ChevronDown size={18} color="#6c757d" />}
      </button>
      <div 
        className={`accordion-content ${isOpen ? 'active' : ''}`}
      >
        <p style={{ paddingBottom: '1rem', color: '#4a5568', fontSize: '0.9rem' }}>{answer}</p>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "¿Cómo recupero mi contraseña?",
      answer: "Puedes recuperar tu contraseña haciendo clic en el enlace '¿Olvidaste tu contraseña?' en la pantalla de inicio de sesión. Recibirás un correo con las instrucciones para restablecerla."
    },
    {
      question: "¿Cómo genero un pedido?",
      answer: "Para generar un pedido, dirígete a la sección Pedidos y Facturación -> Nota de Pedido. Selecciona el cliente, los productos y las cantidades deseadas, y luego haz clic en el botón de guardar."
    },
    {
      question: "¿Cómo contacto al administrador?",
      answer: "Si necesitas asistencia técnica avanzada o reportar un error del sistema, puedes utilizar el formulario de esta página o escribir directamente al correo de soporte: supertech.ecuador@gmail.com."
    },
    {
      question: "Eliminar usuario de la APP",
      answer: "Si deseas eliminar tu usuario de la app, por favor llena el formulario con esa necesidad o escribe directamente al correo del administrador de usuarios: supertech.ecuador@gmail.com."
    }
  ];

  return (
    <div className="card">
      <h2 className="card-title">Preguntas Frecuentes (FAQ)</h2>
      
      <div className="accordion">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
