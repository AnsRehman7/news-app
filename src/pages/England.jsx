import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

export default function England() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/news', {
          params: {
            topic: 'england',
            type: 'everything',
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-4">Europe - Top Headlines</h1>
      <NewsCard articles={articles} />
    </div>
  );
}
