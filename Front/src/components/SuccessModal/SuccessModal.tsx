import React from "react";
import "./SuccessModal.css";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Registro Exitoso!</h2>
        <p>Tu cuenta ha sido creada correctamente.</p>
        <button onClick={onClose}>Aceptar</button>
      </div>
    </div>
  );
};

export default SuccessModal;
