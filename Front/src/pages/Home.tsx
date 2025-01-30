import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">FIREPOWER</h1>
      <p className="home-subtitle">Bienvenido al sistema de gestión militar</p>

      <div className="cards-grid">
        <Link to="/news/training" className="card">
          <img
            src="/src/assets/training.jpg"
            alt="Nuevo Programa de Entrenamiento"
          />
          <h2>NUEVO PROGRAMA DE ENTRENAMIENTO</h2>
          <p>
            Implementación de técnicas avanzadas de combate y estrategia
            militar.
          </p>
          <span>15 de Marzo, 2024</span>
        </Link>

        <Link to="/news/equipment-marine" className="card">
          <img
            src="/src/assets/guardian30.webp"
            alt="Actualización de Equipamiento"
          />
          <h2>ACTUALIZACIÓN DE EQUIPAMIENTO MARINA</h2>
          <p>Nuevas adquisiciones y mejoras en el arsenal disponible.</p>
          <span>15 de Marzo, 2024</span>
        </Link>

        <Link to="/news/equipment" className="card">
          <img
            src="/src/assets/adquisition.webp"
            alt="Actualización de Equipamiento"
          />
          <h2>ACTUALIZACIÓN DE EQUIPAMIENTO</h2>
          <p>Nuevas adquisiciones y mejoras en el arsenal disponible.</p>
          <span>15 de Marzo, 2024</span>
        </Link>

        <Link to="/news/air-training" className="card">
          <img
            src="/src/assets/FA50.webp"
            alt="Nuevo Programa de Entrenamiento"
          />
          <h2>NUEVO PROGRAMA DE ENTRENAMIENTO AEREO</h2>
          <p>
            Implementación de técnicas avanzadas de entrenamiento y estrategia .
          </p>
          <span>15 de Marzo, 2024</span>
        </Link>

        <Link to="/news/navy-equipment" className="card">
          <img src="/src/assets/f100.jpg" alt="Actualización de Equipamiento" />
          <h2>ACTUALIZACIÓN DE EQUIPAMIENTO MARINA</h2>
          <p>Nuevas adquisiciones y mejoras en el arsenal disponible.</p>
          <span>15 de Marzo, 2024</span>
        </Link>

        <Link to="/news/navy-training" className="card">
          <img
            src="/src/assets/infanteriamarina.jpeg"
            alt="Nuevo Programa de Entrenamiento"
          />
          <h2>NUEVO PROGRAMA DE ENTRENAMIENTO NAVAL</h2>
          <p>
            Implementación de técnicas avanzadas de combate y estrategia
            militar.
          </p>
          <span>15 de Marzo, 2024</span>
        </Link>

        <Link to="/news/armor" className="card">
          <img
            src="/src/assets/PL01.webp"
            alt="Nuevo Programa de Entrenamiento"
          />
          <h2>NUEVO PROGRAMA DE ADQUISIONES INFANTERIA ACORAZADA</h2>
          <p>
            Implementación de técnicas avanzadas de combate y estrategia
            militar.
          </p>
          <span>15 de Marzo, 2024</span>
        </Link>

        <Link to="/news/bripac" className="card">
          <img
            src="/src/assets/BRIPAC.jpg"
            alt="Nuevo Programa de Entrenamiento"
          />
          <h2>NUEVO PROGRAMA DE ENTRENAMIENTO BRIPAC</h2>
          <p>
            Implementación de técnicas avanzadas de combate y estrategia
            militar.
          </p>
          <span>15 de Marzo, 2024</span>
        </Link>

        <Link to="/news/air-wing" className="card">
          <img
            src="/src/assets/EUROFIGHTERLTE.WEBP"
            alt="Actualización de Equipamiento"
          />
          <h2>ACTUALIZACIÓN DE EQUIPAMIENTO ALA 14</h2>
          <p>Nuevas adquisiciones y mejoras en el arsenal disponible.</p>
          <span>15 de Marzo, 2024</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
