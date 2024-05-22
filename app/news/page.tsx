import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import News from '@/components/News'; 

export const getData = async () => {
  try {
    const prisma = new PrismaClient;
    const posts = await prisma.post.findMany();
    const latestPost = posts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
    return latestPost;
  } 
  catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};


export default async function NewsPage() {
  const postData = await getData();
  return <News latestPost={postData} />;
}
