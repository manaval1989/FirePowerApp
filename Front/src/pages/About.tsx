import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>SOBRE NOSOTROS</h1>
      <div className="about-content">
        <p>
          FIREPOWER es un sistema integral de gestión militar diseñado para
          optimizar y modernizar las operaciones de las fuerzas armadas. Nuestra
          plataforma facilita la coordinación, el entrenamiento y la gestión de
          recursos militares.
        </p>
        <section className="mission-section">
          <h2>NUESTRA MISIÓN</h2>
          <p>
            Proporcionar tecnología de vanguardia para mejorar la eficiencia y
            efectividad de las operaciones militares, garantizando la seguridad
            y el éxito de las misiones.
          </p>
        </section>
        <section className="values-section">
          <h2>VALORES</h2>
          <ul>
            <li>Excelencia Operativa</li>
            <li>Innovación Continua</li>
            <li>Seguridad Máxima</li>
            <li>Integridad</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
