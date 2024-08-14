import React, { useEffect, useState } from 'react';
import SingleNewsPage from '@/components/SingleNewsPage';
import { Post, PostEng } from '@prisma/client';

const getData = async (slug: string, currentLocale: string): Promise<Post[] | PostEng[]> => {
  try {
    const url =currentLocale === 'pl'
     ? `http://localhost:3002/api/news/${slug}`
     : `http://localhost:3002/api/newsEng/${slug}`;
    const response = await fetch(url, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return currentLocale === 'pl' ? (data as Post[]) : (data as PostEng[]);
  } catch (err) {
    throw new Error('Something went wrong while fetching posts');
  }
};

const NewsPageSlug = ({ params, currentLocale }: { params: { slug: string }; currentLocale: string }) => {
  const [posts, setPosts] = useState<Post[] | PostEng[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(params.slug, currentLocale);
        setPosts(data);
      } catch (err) {
        setError('Something went wrong while fetching posts.');
      }
    };

    fetchData();
  }, [params.slug, currentLocale]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!posts) {
    return <div>Loading...</div>;
  }

  return <SingleNewsPage posts={posts} />;
};

export default NewsPageSlug;
