import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import SiteNavbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null); 

  const fetchArticle = useCallback(async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/articles/${id}`);
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.log('Error fetching article:', error);
      setArticle(null); 
    }
  }, [id]);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  function formatDate(date) {
    return date ? format(parseISO(date), 'dd/MM/yyyy kk:mm') : '';
  }

  return (
    <div>
      <SiteNavbar siteName="Crudnews" />
      <div className="container my-4 container-fluid.body-content">
        {article ? ( 
          <div className="card">
            <div className="card-body">
              <h5>{article.title}</h5>
              <small className="text-muted">
                Postado em {formatDate(article.created)}
              </small>
              <p>{article.content}</p>
            </div>
          </div>
        ) : (
          <p>Carregando artigo...</p> 
        )}
      </div>
      <Footer phone="+55 (55)55555-5555" email="crudnews@fake.com" />
    </div>
  );
}

export default ArticlePage;
