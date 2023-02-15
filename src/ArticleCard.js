import React from 'react';
import Card from 'react-bootstrap/Card';

function ArticleCard({ title, content, creationDate, len }) {
  return (
    <>
    <Card border="light" class="shadow-sm" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title href="#id">{title}</Card.Title>
      <Card.Text href="#id">
        {content.slice(0,150)}...
      </Card.Text>
    </Card.Body>
            <Card.Footer class="bg-white border-0">
          <small className="text-muted">{creationDate}</small>
        </Card.Footer>
  </Card>
  <br />
</>
  );
}

export default ArticleCard;