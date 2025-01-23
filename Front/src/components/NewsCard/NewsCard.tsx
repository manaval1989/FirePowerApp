import React from "react";
import "./NewsCard.css";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
  date,
}) => {
  return (
    <div className="news-card">
      <div className="news-image">
        <img src={image} alt={title} />
      </div>
      <div className="news-content">
        <h3>{title}</h3>
        <p className="news-description">{description}</p>
        <span className="news-date">{date}</span>
      </div>
    </div>
  );
};

export default NewsCard;
