import React, { useRef, useEffect } from "react";
import "./Home.css";

interface YouTubePlayer {
  playVideo(): void;
  pauseVideo(): void;
}

const Home: React.FC = () => {
  const playerRef = useRef<YouTubePlayer | null>(null);

  const handleMouseEnter = (): void => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const handleMouseLeave = (): void => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function () {
      playerRef.current = new window.YT.Player("player", {
        videoId: "8bZDBFHsyXw",
        playerVars: {
          autoplay: 0,
          controls: 0,
          mute: 1,
          rel: 0,
          modestbranding: 1,
        },
      });
    };

    return () => {
      window.onYouTubeIframeAPIReady = function () {};
    };
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">FIREPOWER</h1>
      <p className="home-subtitle">Bienvenido al sistema de gestión militar</p>

      <div className="cards-grid">
        <div className="card">
          <div
            className="media-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/src/assets/training.jpg"
              alt="Nuevo Programa de Entrenamiento"
              className="card-image"
            />
            <div className="video-container">
              <div id="player"></div>
            </div>
          </div>
          <h2>NUEVO PROGRAMA DE ENTRENAMIENTO</h2>
          <p>
            Implementación de técnicas avanzadas de combate y estrategia
            militar.
          </p>
          <span>15 de Marzo, 2024</span>
        </div>

        <div className="card">
          <img
            src="/src/assets/adquisition.webp"
            alt="Actualización de Equipamiento"
          />
          <h2>ACTUALIZACIÓN DE EQUIPAMIENTO</h2>
          <p>Nuevas adquisiciones y mejoras en el arsenal disponible.</p>
          <span>15 de Marzo, 2024</span>
        </div>
        <div className="card">
          <img
            src="/src/assets/FA50.webp"
            alt="Nuevo Programa de Entrenamiento"
          />
          <h2>NUEVO PROGRAMA DE ENTRENAMIENTO AEREO</h2>
          <p>
            Implementación de técnicas avanzadas de entrenamiento y estrategia .
          </p>
          <span>15 de Marzo, 2024</span>
        </div>

        <div className="card">
          <img src="/path-to-image" alt="Actualización de Equipamiento" />
          <h2>ACTUALIZACIÓN DE EQUIPAMIENTO MARINA</h2>
          <p>Nuevas adquisiciones y mejoras en el arsenal disponible.</p>
          <span>15 de Marzo, 2024</span>
        </div>
        <div className="card">
          <img src="/path-to-image" alt="Nuevo Programa de Entrenamiento" />
          <h2>NUEVO PROGRAMA DE ENTRENAMIENTO</h2>
          <p>
            Implementación de técnicas avanzadas de combate y estrategia
            militar.
          </p>
          <span>15 de Marzo, 2024</span>
        </div>

        <div className="card">
          <img src="/path-to-image" alt="Actualización de Equipamiento" />
          <h2>ACTUALIZACIÓN DE EQUIPAMIENTO</h2>
          <p>Nuevas adquisiciones y mejoras en el arsenal disponible.</p>
          <span>15 de Marzo, 2024</span>
        </div>
        <div className="card">
          <img src="/path-to-image" alt="Nuevo Programa de Entrenamiento" />
          <h2>NUEVO PROGRAMA DE ENTRENAMIENTO</h2>
          <p>
            Implementación de técnicas avanzadas de combate y estrategia
            militar.
          </p>
          <span>15 de Marzo, 2024</span>
        </div>
        <div className="card">
          <img src="/path-to-image" alt="Nuevo Programa de Entrenamiento" />
          <h2>NUEVO PROGRAMA DE ENTRENAMIENTO</h2>
          <p>
            Implementación de técnicas avanzadas de combate y estrategia
            militar.
          </p>
          <span>15 de Marzo, 2024</span>
        </div>

        <div className="card">
          <img src="/path-to-image" alt="Actualización de Equipamiento" />
          <h2>ACTUALIZACIÓN DE EQUIPAMIENTO</h2>
          <p>Nuevas adquisiciones y mejoras en el arsenal disponible.</p>
          <span>15 de Marzo, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
