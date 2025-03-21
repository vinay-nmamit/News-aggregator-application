import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/global.css";

function Trending() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchTrendingNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=trending&sortBy=publishedAt&apiKey=1e2f84889f19483d96df98835b09f9a4`
        );                
        
        // Filter out articles without images or descriptions
        const validArticles = response.data.articles.filter(
          (article) => article.urlToImage && article.description
        );
  
        setArticles(validArticles.slice(0, 20)); // Ensure at most 20 articles are displayed
      } catch (error) {
        console.error("Error fetching trending news:", error);
      }
    };
  
    fetchTrendingNews();
  }, []);
  

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Trending News</h1>
      <div className="news-container">
        {articles.map((article, index) => (
          <div className="card news-card" key={index}>
            {article.urlToImage && (
              <img src={article.urlToImage} className="card-img-top" alt="news" />
            )}
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">
                {article.description
                  ? article.description.length > 100
                    ? article.description.substring(0, 100) + "..."
                    : article.description
                  : "No description available"}
              </p>
              <a href={article.url} target="_blank" className="btn btn-dark">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
