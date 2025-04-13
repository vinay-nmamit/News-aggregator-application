import React, { useContext, useState, useEffect } from "react";
import LikeSaveButton from "./LikeSaveButton";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

const generateArticleId = (article) => {
  return btoa(article.url);
};

function NewsCard({ article }) {
  const { username } = useContext(UserContext);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const handleLike = async () => {
    if (!username) {
      console.error("No username found in context. User must be logged in.");
      return;
    }

    const payload = {
      articleId: generateArticleId(article),
      title: article.title,
      description: article.description,
      url: article.url,
      imageUrl: article.urlToImage || null,
      publishedAt: article.publishedAt ? new Date(article.publishedAt).toISOString() : null,
      sourceName: article.source?.name || null
    };

    try {
      await axios.put(`http://localhost:8080/api/users/${username}/like-article`, payload, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log("Article liked successfully.");
    } catch (error) {
      console.error("Error liking article:", error.response ? error.response.data : error.message);
    }
  };

  const handleSave = async () => {
    if (!username) {
      console.error("No username found in context. User must be logged in.");
      return;
    }

    const payload = {
      articleId: generateArticleId(article),
      title: article.title,
      description: article.description,
      url: article.url,
      imageUrl: article.urlToImage || null,
      publishedAt: article.publishedAt ? new Date(article.publishedAt).toISOString() : null,
      sourceName: article.source?.name || null
    };

    try {
      await axios.put(`http://localhost:8080/api/users/${username}/save-article`, payload, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log("Article saved successfully.");
    } catch (error) {
      console.error("Error saving article:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className={`news-card ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <img src={article.urlToImage} alt={article.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <div className="d-flex align-items-center w-100">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark d-block w-100"
          >
            Read More
          </a>
          <LikeSaveButton 
            onLike={handleLike}
            onSave={handleSave}
            articleId={generateArticleId(article)}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
