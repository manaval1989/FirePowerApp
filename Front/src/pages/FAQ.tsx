import React from "react";
import "./FAQ.css";

const FAQ: React.FC = () => {
  return (
    <div className="faq-container">
      <h1>PREGUNTAS FRECUENTES</h1>
      <div className="faq-content">
        <div className="faq-item">
          <h3>¿Qué es FIREPOWER?</h3>
          <p>
            FIREPOWER es una plataforma de gestión militar que integra múltiples
            funcionalidades para la administración eficiente de recursos y
            operaciones militares.
          </p>
        </div>
        <div className="faq-item">
          <h3>¿Cómo puedo acceder al sistema?</h3>
          <p>
            El acceso al sistema está restringido a personal militar autorizado.
            Contacte con su unidad para obtener credenciales de acceso.
          </p>
        </div>
        {/* Añadir más preguntas según sea necesario */}
      </div>
    </div>
  );
};

export default FAQ;
