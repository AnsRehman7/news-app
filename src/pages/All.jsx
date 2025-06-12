import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

export default function All() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/news?topic=world')
      .then(res => setArticles(res.data.articles))
      .catch(err => console.error('Error fetching world news:', err));
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-4">Top - Headlines</h1>
      <NewsCard articles={articles} />
    </div>
  );
}
