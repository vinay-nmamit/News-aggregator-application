import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewsCard from "../components/NewsCard"; // Ensure the same NewsCard component is used
import "../styles/global.css"; // Uses the same styling as Home & Trending

function CategoryPage() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
            `https://newsapi.org/v2/everything?q=${category}&apiKey=1e2f84889f19483d96df98835b09f9a4`
          );          

        // Filter out articles without images or descriptions
        const validArticles = response.data.articles.filter(
          (article) => article.urlToImage && article.description
        );

        setArticles(validArticles.slice(0, 20)); // Limit to 20 articles
      } catch (error) {
        console.error(`Error fetching ${category} news:`, error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="category-page">
      <h2 className="text-center text-capitalize">{category} News</h2>

      {/* Uses the same container as Home & Trending */}
      <div className="news-container">
        {articles.length > 0 ? (
          articles.map((article, index) => <NewsCard key={index} article={article} />)
        ) : (
          <p className="text-center">No news available</p>
        )}
      </div>
      {/*  */}
    </div>
  );
}

export default CategoryPage;
