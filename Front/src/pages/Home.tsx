import React from "react";
import NewsCard from "../components/NewsCard/NewsCard";
import "./Home.css";

const newsData = [
  {
    image: "/news/training.jpg",
    title: "Nuevo Programa de Entrenamiento",
    description:
      "Implementación de técnicas avanzadas de combate y estrategia militar.",
    date: "15 de Marzo, 2024",
  },
  {
    image: "/news/equipment.jpg",
    title: "Actualización de Equipamiento",
    description: "Incorporación de nueva tecnología y equipamiento táctico.",
    date: "12 de Marzo, 2024",
  },
  {
    image: "/news/mission.jpg",
    title: "Misión Completada con Éxito",
    description: "Equipo Alpha completa ejercicio de simulación táctica.",
    date: "10 de Marzo, 2024",
  },
  {
    image: "/news/recruitment.jpg",
    title: "Nueva Fase de Reclutamiento",
    description: "Apertura del proceso de selección para nuevos candidatos.",
    date: "8 de Marzo, 2024",
  },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>FIREPOWER</h1>
        <p>Bienvenido al sistema de gestión militar</p>
      </div>

      <div className="news-grid">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            image={news.image}
            title={news.title}
            description={news.description}
            date={news.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
