import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/global.css";


function Home() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async (query = "latest") => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=1e2f84889f19483d96df98835b09f9a4`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleSearch = () => {
    fetchNews(searchTerm);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Latest News</h1>
        <div className="input-group w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-dark" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="news-container">
        {news.map((article, index) => (
          <div key={index} className="news-card card">
            <img
              src={article.urlToImage || "https://via.placeholder.com/150"}
              className="card-img-top"
              alt={article.title}
            />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">
                {article.description
                  ? article.description.length > 100
                    ? article.description.substring(0, 100) + "..."
                    : article.description
                  : "No description available"}
              </p>

              <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
