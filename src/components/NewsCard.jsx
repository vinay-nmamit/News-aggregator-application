import React, { useContext } from "react";
import LikeSaveButton from "./LikeSaveButton";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

function NewsCard({ article }) {
  const { email } = useContext(UserContext);

  const handleLike = async () => {
    try {
      await axios.put(`http://localhost:8080/api/users/${email}/like-article`, {
        id: article.id,
        title:  article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        source: article.source
      });
    } catch (error) {
      console.error("Error liking article:", error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/api/users/${email}/save-article/${article.id}`);
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };

  return (
    <div className="news-card">
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
            articleId={article.id}
            email={email}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
