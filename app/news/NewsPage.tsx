import React, { useEffect, useState } from 'react';
import { Post, PostEng } from '@prisma/client';
import News from '@/components/News';

const NewsPage = ({ searchParams, currentLocale }: { searchParams: any; currentLocale: string }) => {
  const [posts, setPosts] = useState<Post[] | PostEng[]>([]);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const page = parseInt(searchParams.page) || 1;

    const fetchData = async () => {
      setLoading(true);
      try {
        let dataJson;
        if (currentLocale === 'pl') {
          const data = await fetch(`http://localhost:3002/api/news?page=${page}`, {
            cache: 'no-store',
          });
          if (!data.ok) {
            throw new Error('Failed to fetch data');
          }
          dataJson = await data.json();
          setPosts(dataJson.posts as Post[]);
        } else {
          const data = await fetch(`http://localhost:3002/api/newsEng?page=${page}`, {
            cache: 'no-store',
          });
          if (!data.ok) {
            throw new Error('Failed to fetch data');
          }
          dataJson = await data.json();
          setPosts(dataJson.posts as PostEng[]);
        }
        setCount(dataJson.count);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams.page, currentLocale]);

  if (loading) {
    return <div>Loading...</div>; // Optional: a loading indicator
  }

  return <News posts={posts} page={parseInt(searchParams.page) || 1} count={count} />;
};

export default NewsPage;
