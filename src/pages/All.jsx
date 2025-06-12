import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

export default function All() {
  const [articles, setArticles] = useState([]);
  const API_KEY = '0b231c21fbbd4fd4add15bfe1ac2926a';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=world&apiKey=${API_KEY}`
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
