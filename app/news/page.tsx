import { Post, PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import News from '@/components/News'; 

interface NewsProps {
  posts: Post[];
  page: number;
}


 const getData = async ({page}: {page: any}) => {
  try {
    const posts = await fetch(`http://localhost:3000/api/posts?page=${page}`,{
      cache: "no-store",
    });
    // const latestPost = posts.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
    if (!posts.ok) {
      throw new Error("Failed");
    }
    const data = await posts.json();
    const postsCasted: Post[] = data.posts;
    // console.log("postsCasted" +posts);
    return postsCasted;
    
   // return posts;
  } 
  catch (err) {
    console.log(err);
    throw new Error('Something went wrong while fetching posts');

  }
};


export default async function NewsPage({searchParams}: {searchParams: any}) {

  const page = parseInt(searchParams.page) || 1
  const testPost:Post[] = await getData({page});
 // console.log("testPost" + JSON.stringify(testPost));
  const postData: { posts: Post[]; page: number } ={
    posts:testPost,
    page:page
  } 
  return <News posts={testPost} page={page} />
}
