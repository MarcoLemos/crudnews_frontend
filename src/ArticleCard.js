import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

function ArticleCard({ articles }) {
  return (
    <Row xs={1} md={2} className="g-4 p-4 container-fluid.body-content">
    {articles.map((article)=> (
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>
            <Link to={`/articles/${article.id}`} style={{ textDecoration: 'none' }}>
              <p  class="text-black">
                {article.title}
              </p>
              </Link>
              </Card.Title>
            <Card.Text>
            <Link to={`/articles/${article.id}`} style={{ textDecoration: 'none' }}>
              <p class="text-black">
                {article.content.slice(0,100)}...
              </p>
              </Link>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <small className="text-muted">
            Postado em {format(parseISO(article.created), 'dd/MM/yyyy kk:mm')}
          </small>
        </Card.Footer>
        </Card>
      </Col>
    ))}
  </Row>
  );
}

export default ArticleCard;