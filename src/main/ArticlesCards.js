import React from 'react';

function ArticleCard(props) {
  return (
    <div className="article-card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>{props.creationDate}</p>
    </div>
  );
}

export default ArticleCard;