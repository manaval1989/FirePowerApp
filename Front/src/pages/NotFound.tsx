import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>PÁGINA NO ENCONTRADA</h2>
      <p>La página que estás buscando no existe o ha sido movida.</p>
      <Link to="/" className="back-home">
        VOLVER AL INICIO
      </Link>
    </div>
  );
};

export default NotFound;
