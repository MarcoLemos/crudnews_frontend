import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import SiteNavbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [articles, setArticles] = useState([]);
  
  async function fetchArticles() {
    const response = await fetch('http://localhost:8000/articles');
    const json = await response.json();
    setArticles(json);
  };

  if (articles.length === 0) {
    fetchArticles()
    .catch(console.error);
  }

  return (
    <div>
      <SiteNavbar siteName="Crudnews" />
      <div className="card-container">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            content={article.content}
            creationDate={article.created}
            len={articles.length}
          />
        ))}
      </div>
      <Footer phone="+55 (55)55555-5555" email="crudnews@fake.com" />
    </div>
  );
}

export default App;