import React, { useState } from 'react';
import { Send, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdyb-2HeFb1dlv_mITp4GoSOlgr1vORq9G5ZsaNmFcjRjG7vQ/formResponse";

  const ENTRY_IDS = {
    nombre: "entry.1737394060",
    email: "entry.1037399510",
    asunto: "entry.1586710165",
    mensaje: "entry.1914464784"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const urlParams = new URLSearchParams();
      urlParams.append(ENTRY_IDS.nombre, formData.nombre);
      urlParams.append(ENTRY_IDS.email, formData.email);
      urlParams.append(ENTRY_IDS.asunto, formData.asunto);
      urlParams.append(ENTRY_IDS.mensaje, formData.mensaje);

      // Usamos no-cors porque Google Forms no permite CORS desde dominios externos.
      // La respuesta será opaca (status 0), pero si no hay error de red, el envío es exitoso.
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlParams.toString(),
      });

      setStatus('success');
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });

      // Regresar al estado inicial después de 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error al enviar:', error);
      setStatus('error');
    }
  };

  return (
    <div className="card">
      <h2 className="card-title">Formulario de Contacto</h2>
      <p className="instruction">Si tienes alguna duda o inconveniente, completa el formulario:</p>

      {status === 'success' && (
        <div style={{
          backgroundColor: '#d1fae5',
          color: '#065f46',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <CheckCircle size={20} />
          <span>¡Mensaje enviado con éxito! Nos contactaremos pronto.</span>
        </div>
      )}

      {status === 'error' && (
        <div style={{
          backgroundColor: '#fee2e2',
          color: '#991b1b',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <AlertCircle size={20} />
          <span>Hubo un problema al enviar el mensaje. Por favor intenta de nuevo.</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-input"
            placeholder="Tu nombre completo"
            required
            disabled={status === 'submitting'}
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
            disabled={status === 'submitting'}
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
            disabled={status === 'submitting'}
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
            disabled={status === 'submitting'}
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-submit"
          disabled={status === 'submitting'}
          style={{ opacity: status === 'submitting' ? 0.7 : 1 }}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Enviando...
            </>
          ) : (
            <>
              <Send size={18} />
              Enviar Mensaje
            </>
          )}
        </button>
      </form>

      <div className="separator"></div>

      <div className="direct-contact-section">
        <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Contacto Directo</h3>
        <div className="direct-contact">
          <Mail className="icon" size={20} />
          <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>supertech.ecuador@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
