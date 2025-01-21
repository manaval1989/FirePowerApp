import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>ÁREA RESTRINGIDA</h2>
      <p>La página que buscas no existe.</p>
      <Link to="/" className="return-btn">
        VOLVER A BASE
      </Link>
    </div>
  );
};

export default NotFound;
