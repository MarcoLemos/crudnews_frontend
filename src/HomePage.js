import React, { useCallback, useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import SiteNavbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const getArticles = useCallback(async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/articles`);
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      setError('Error fetching articles');
    }
  }, []);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <div>
      <SiteNavbar siteName="Crudnews" />
      <div className="card-container">
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <ArticleCard articles={articles} />
        )}
      </div>
      <Footer phone="+55 (55)55555-5555" email="crudnews@fake.com" />
    </div>
  );
}

export default HomePage;