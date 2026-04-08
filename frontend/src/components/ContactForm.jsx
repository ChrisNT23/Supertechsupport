import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado correctamente');
  };

  return (
    <div className="card">
      <h2 className="card-title">Formulario de Contacto</h2>
      <p className="instruction">Si tienes alguna duda o inconveniente, completa el formulario:</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-input"
            placeholder="Tu nombre completo"
            required
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="ejemplo@correo.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="asunto">Asunto *</label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            className="form-input"
            placeholder="Motivo de tu mensaje"
            required
            value={formData.asunto}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje *</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className="form-textarea"
            rows="5"
            placeholder="Cuéntanos en qué podemos ayudarte..."
            required
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">
          <Send size={18} />
          Enviar Mensaje
        </button>
      </form>

      <div className="separator"></div>

      <div className="direct-contact-section">
        <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Contacto Directo</h3>
        <div className="direct-contact">
          <Mail className="icon" size={20} />
          <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>supertch.ecuador@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
