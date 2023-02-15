import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ArticleCard from './ArticleCard';
import Footer from './Footer';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="App">
      <Navbar siteName="My Site" />
      <div className="card-container">
        {articles.map(article => (
          <ArticleCard key={article.id} title={article.title} content={article.content} date={article.date} />
        ))}
      </div>
      <Footer email="info@mysite.com" phone="555-555-5555" />
    </div>
  );
}

export default App;