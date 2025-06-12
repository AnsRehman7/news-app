import React from 'react';

export default function NewsCard({ articles }) {
  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <div className="news-card" key={index}>
          <img
            src={article.urlToImage || 'https://via.placeholder.com/400x200'}
            alt="thumbnail"
            className="news-image"
          />
          <div className="news-content">
            <h3 className="news-title">{article.title}</h3>
            <p className="news-description">
              {article.description || 'No description available.'} </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
