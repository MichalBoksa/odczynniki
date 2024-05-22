
import { Post, PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import News from '@/components/News'; 

 const getData = async () => {
  const prisma = new PrismaClient;
  try {
    const posts = await prisma.post.findMany();
    // const latestPost = posts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
    return posts[0];
  } 
  catch (err) {
    console.log(err);
    throw new Error('Something went wrong while fetching posts');

  }
  finally {
    await prisma.$disconnect();
  }
};


export default async function NewsPage() {
  const postData = await getData();
  return <News latestPost={postData} />;
}
