import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>FIREPOWER</h4>
          <nav>
            <Link to="/about">Sobre Nosotros</Link>
            <Link to="/faq">Preguntas Frecuentes</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>ENLACES RÁPIDOS</h4>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/login">Acceder</Link>
            <Link to="/ranking">Ranking Militar</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>CONTACTO</h4>
          <p>Central de Operaciones</p>
          <p>Tel: (555) 123-4567</p>
          <p>Email: info@firepower.mil</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 FIREPOWER - Todos los derechos reservados</p>
        <div className="footer-legal">
          <Link to="/privacy">Privacidad</Link>
          <Link to="/terms">Términos</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
