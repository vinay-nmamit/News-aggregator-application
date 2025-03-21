import React from "react";

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <img src={article.urlToImage} alt={article.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
