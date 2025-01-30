import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewsDetail.css";

interface NewsData {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  fullContent?: string;
  videoId?: string;
}

const newsDatabase: { [key: string]: NewsData } = {
  training: {
    id: "training",
    image: "/src/assets/training.jpg",
    title: "NUEVO PROGRAMA DE ENTRENAMIENTO",
    description:
      "Implementación de técnicas avanzadas de combate y estrategia militar.",
    date: "15 de Marzo, 2024",
    fullContent: `El nuevo programa de entrenamiento representa un salto cualitativo en la preparación de nuestras fuerzas terrestres. Incluye módulos especializados en combate urbano con simulaciones en entornos 3D, técnicas avanzadas de supervivencia en condiciones extremas, y protocolos de coordinación táctica entre unidades mediante sistemas de comunicación de última generación. Los ejercicios prácticos se realizarán en instalaciones especialmente diseñadas que replican escenarios reales de combate, incluyendo edificios modulares, túneles subterráneos y zonas de operaciones nocturnas. Este programa también incorpora entrenamiento en guerra electrónica y ciberdefensa, adaptándose a las amenazas del siglo XXI.`,
    videoId: "8bZDBFHsyXw",
  },
  "equipment-marine": {
    id: "equipment-marine",
    image: "/src/assets/guardian30.webp",
    title: "ACTUALIZACIÓN DE EQUIPAMIENTO MARINA",
    description: "Nuevas adquisiciones y mejoras en el arsenal disponible.",
    date: "15 de Marzo, 2024",
    fullContent: `La Marina ha iniciado un ambicioso programa de modernización que incluye la incorporación de sistemas de defensa de última generación. Entre las nuevas adquisiciones destacan los sistemas de radar AESA de última generación, capacidades de guerra electrónica mejoradas y nuevos sistemas de combate integrado. Los buques están siendo equipados con misiles superficie-aire de medio y largo alcance, sistemas CIWS modernizados y equipos de comunicaciones satelitales de alta capacidad. Además, se han implementado mejoras en los sistemas de propulsión y en la eficiencia energética de las embarcaciones, aumentando su autonomía y reduciendo su huella térmica.`,
  },
  equipment: {
    id: "equipment",
    image: "/src/assets/adquisition.webp",
    title: "ACTUALIZACIÓN DE EQUIPAMIENTO",
    description: "Nuevas adquisiciones y mejoras en el arsenal disponible.",
    date: "15 de Marzo, 2024",
    fullContent:
      "Incorporación de nuevo equipamiento táctico y sistemas de comunicación avanzados para mejorar la efectividad en el campo de batalla.",
  },
  "air-training": {
    id: "air-training",
    image: "/src/assets/FA50.webp",
    title: "NUEVO PROGRAMA DE ENTRENAMIENTO AEREO",
    description:
      "Implementación de técnicas avanzadas de entrenamiento y estrategia.",
    date: "15 de Marzo, 2024",
    fullContent: `El programa de entrenamiento aéreo ha sido completamente renovado para incluir las últimas tácticas y procedimientos de combate aire-aire y aire-superficie. Los pilotos se entrenarán en simuladores de última generación que reproducen fielmente las características de vuelo y combate de las aeronaves más modernas. El programa incluye entrenamiento en guerra electrónica, tácticas de evasión avanzadas, y procedimientos de reabastecimiento en vuelo. Se ha puesto especial énfasis en las operaciones multidominio y en la integración con unidades terrestres y navales. Los ejercicios incluirán escenarios complejos con múltiples amenazas y condiciones meteorológicas adversas.`,
  },
  "navy-equipment": {
    id: "navy-equipment",
    image: "/src/assets/f100.jpg",
    title: "ACTUALIZACIÓN DE EQUIPAMIENTO MARINA",
    description: "Nuevas adquisiciones y mejoras en el arsenal disponible.",
    date: "15 de Marzo, 2024",
    fullContent:
      "Modernización de la flota con nuevos sistemas de combate y equipamiento naval de última generación.",
  },
  "navy-training": {
    id: "navy-training",
    image: "/src/assets/infanteriamarina.jpeg",
    title: "NUEVO PROGRAMA DE ENTRENAMIENTO NAVAL",
    description:
      "Implementación de técnicas avanzadas de combate y estrategia militar.",
    date: "15 de Marzo, 2024",
    fullContent: `El nuevo programa de entrenamiento naval integra las últimas doctrinas en operaciones anfibias y warfare marítimo. Los ejercicios incluyen operaciones de desembarco con los últimos vehículos anfibios, entrenamiento en guerra antisubmarina y antisuperficie, y operaciones especiales marítimas. Se ha desarrollado un nuevo módulo de entrenamiento para operaciones en aguas litorales y en entornos de alta amenaza. El programa también abarca ejercicios de búsqueda y rescate avanzados, operaciones de interdicción marítima y ejercicios de protección de infraestructuras críticas costeras. Los marineros recibirán formación específica en el uso de los últimos sistemas de combate y sensores.`,
  },
  armor: {
    id: "armor",
    image: "/src/assets/PL01.webp",
    title: "NUEVO PROGRAMA DE ADQUISIONES INFANTERIA ACORAZADA",
    description:
      "Implementación de técnicas avanzadas de combate y estrategia militar.",
    date: "15 de Marzo, 2024",
    fullContent: `La infantería acorazada está experimentando una transformación significativa con la incorporación de nuevos vehículos de combate equipados con los últimos avances en protección activa y pasiva. Los nuevos sistemas incluyen blindaje reactivo de última generación, sistemas de protección activa contra proyectiles antitanque, y suite completa de sensores y sistemas de visión térmica y nocturna. Los vehículos están equipados con sistemas de control de tiro digitalizados, capacidad de operación en red y sistemas de comunicación encriptados. Además, se han mejorado los sistemas de supervivencia de la tripulación y la capacidad de operación en ambientes NBQ.`,
  },
  bripac: {
    id: "bripac",
    image: "/src/assets/BRIPAC.jpg",
    title: "NUEVO PROGRAMA DE ENTRENAMIENTO BRIPAC",
    description:
      "Implementación de técnicas avanzadas de combate y estrategia militar.",
    date: "15 de Marzo, 2024",
    fullContent: `La Brigada Paracaidista ha implementado un revolucionario programa de entrenamiento que incluye nuevas técnicas de salto HALO y HAHO, así como procedimientos actualizados de inserción táctica. El programa incorpora entrenamiento en nuevos sistemas de paracaídas automáticos y manuales, técnicas de aterrizaje avanzadas y procedimientos de reagrupamiento rápido. Se ha puesto especial énfasis en las operaciones nocturnas y en condiciones meteorológicas adversas, así como en la integración con apoyo aéreo cercano y operaciones especiales. El entrenamiento incluye también módulos de supervivencia tras las líneas enemigas y técnicas de evasión y escape.`,
  },
  "air-wing": {
    id: "air-wing",
    image: "/src/assets/EUROFIGHTERLTE.WEBP",
    title: "ACTUALIZACIÓN DE EQUIPAMIENTO ALA 14",
    description: "Nuevas adquisiciones y mejoras en el arsenal disponible.",
    date: "15 de Marzo, 2024",
    fullContent: `El Ala 14 está recibiendo una actualización integral de sus Eurofighter que incluye nuevos radares AESA, capacidades mejoradas de guerra electrónica y sistemas de comunicaciones más avanzados. Las mejoras incluyen la integración de nuevos misiles aire-aire de largo alcance, capacidades de ataque de precisión mejoradas y sistemas de autoprotección actualizados. Los aviones están siendo equipados con nuevos pods de reconocimiento y designación de objetivos, así como con sistemas de enlace de datos tácticos de última generación. Estas actualizaciones permitirán una mejor interoperabilidad con aliados y una mayor capacidad de supervivencia en entornos altamente disputados.`,
  },
};

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const news = id ? newsDatabase[id] : null;

  useEffect(() => {
    // Cargar la API de YouTube
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }, []);

  if (!news) {
    return <div className="news-detail-error">Noticia no encontrada</div>;
  }

  return (
    <div className="news-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <article className="news-detail">
        <img src={news.image} alt={news.title} className="news-detail-image" />
        <div className="news-detail-content">
          <h1>{news.title}</h1>
          <span className="news-detail-date">{news.date}</span>
          <p className="news-detail-description">{news.description}</p>
          {news.fullContent && (
            <div className="news-detail-full-content">
              <p>{news.fullContent}</p>
            </div>
          )}
          {news.videoId && (
            <div className="news-detail-video">
              <h2>Video Relacionado</h2>
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${news.videoId}?rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default NewsDetail;
