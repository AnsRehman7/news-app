import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

export default function India() {
  const [articles, setArticles] = useState([]);
   const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=india&apiKey=${API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  return <div>
    
            <h1 className="text-center text-3xl font-bold my-4">Top - Headlines</h1>
            <NewsCard articles={articles} />;
        </div>
}
