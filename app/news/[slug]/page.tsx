
import SingleNewsPage from '@/components/SingleNewsPage'
import { Post } from '@prisma/client';
import React from 'react'

const getData = async (slug:string)  => {
  try {
    
    const data = await fetch(`http://localhost:3001/api/news/${slug}`,{
      cache: "no-store",
    });
    if (!data.ok) {
      throw new Error("Failed");
    }
    const dataJson:Post[]= await data.json();
    return dataJson;

  } 
  catch (err) {
    console.log(err);
    throw new Error('Something went wrong while fetching posts page tsx');

  }
};

const page = async ({params}:{params:{slug:string}}) => {
  const slug = params.slug;
  const posts =await getData(slug);
  return (
    <SingleNewsPage posts={posts}/>
  )
}

export default page