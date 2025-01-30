import React, { useEffect } from "react";
import "./RainEffect.css";

const RainEffect: React.FC = () => {
  useEffect(() => {
    const createLightning = () => {
      const layout = document.querySelector(".layout") as HTMLElement;
      if (layout) {
        layout.classList.add("lightning");
        setTimeout(() => {
          layout.classList.remove("lightning");
        }, 1000);
      }
    };

    const triggerLightning = () => {
      const minDelay = 15000;
      const maxDelay = 45000;
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;

      setTimeout(() => {
        createLightning();
        triggerLightning();
      }, delay);
    };

    triggerLightning();

    return () => {
      const layout = document.querySelector(".layout");
      if (layout) {
        layout.classList.remove("lightning");
      }
    };
  }, []);

  const generatePosition = () => {
    // Genera posiciones con más probabilidad alrededor del contenedor
    const rand = Math.random();
    if (rand < 0.7) {
      // 70% de las gotas alrededor del contenedor
      // Distribuye las gotas en los laterales del contenedor
      return rand < 0.35
        ? 5 + Math.random() * 20 // Lado izquierdo
        : 75 + Math.random() * 20; // Lado derecho
    }
    // 30% restante distribuido por toda la pantalla
    return Math.random() * 100;
  };

  const renderRainLayer = (
    layerClass: string,
    count: number,
    config: {
      minDuration: number;
      maxDuration: number;
      maxDelay: number;
      width: number;
      height: number;
      opacity: number;
    }
  ) => (
    <div className={`rain-container ${layerClass}`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={`${layerClass}-${i}`}
          className="rain-drop"
          style={{
            left: `${generatePosition()}%`,
            animationDelay: `${Math.random() * config.maxDelay}s`,
            animationDuration: `${
              config.minDuration +
              Math.random() * (config.maxDuration - config.minDuration)
            }s`,
            width: `${config.width}px`,
            height: `${config.height}px`,
            opacity: config.opacity,
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      {renderRainLayer("far-background", 60, {
        minDuration: 1.2,
        maxDuration: 1.6,
        maxDelay: 4,
        width: 1,
        height: 60,
        opacity: 0.3,
      })}

      {renderRainLayer("mid-background", 50, {
        minDuration: 0.8,
        maxDuration: 1.2,
        maxDelay: 3,
        width: 1.5,
        height: 80,
        opacity: 0.5,
      })}

      {renderRainLayer("background", 40, {
        minDuration: 0.7,
        maxDuration: 1,
        maxDelay: 2,
        width: 2,
        height: 100,
        opacity: 0.6,
      })}

      {renderRainLayer("foreground", 30, {
        minDuration: 0.3,
        maxDuration: 0.5,
        maxDelay: 3,
        width: 3,
        height: 120,
        opacity: 0.8,
      })}
    </>
  );
};

export default RainEffect;
