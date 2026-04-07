import React from 'react';
import { X } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Política de Privacidad</h2>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={onClose}>
            <X size={24} color="#6c757d" />
          </button>
        </div>
        
        <div className="modal-body">
          <div className="policy-sec">
            <h3>1. Recopilación de Información</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>
              Recopilamos información personal como su nombre y correo electrónico de forma voluntaria a través de nuestro formulario de contacto para poder atender sus solicitudes.
            </p>
          </div>

          <div className="policy-sec">
            <h3>2. Uso de Datos</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>
              Los datos proporcionados serán utilizados exclusivamente para gestionar sus consultas, brindar soporte técnico y mejorar la calidad de nuestra atención.
            </p>
          </div>

          <div className="policy-sec">
            <h3>3. Protección de Privacidad</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>
              Nos comprometemos a no compartir, vender ni distribuir sus datos personales a terceros sin su consentimiento expreso, salvo que sea requerido por ley.
            </p>
          </div>

          <div className="policy-sec">
            <h3>4. Seguridad</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>
              Implementamos medidas técnicas y organizativas adecuadas para proteger su información personal contra pérdida, uso indebido o acceso no autorizado.
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-close" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
