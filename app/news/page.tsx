import { Post } from '@prisma/client';
import News from '@/components/News'; 

interface NewsProps {
  posts: Post[];
  count: number;
  page: number;
}


 const getData = async ({page}: {page: number}) => {
  try {
    const data = await fetch(`http://localhost:3002/api/news?page=${page}`,{
      cache: "no-store",
    });
    if (!data.ok) {
      throw new Error("Failed");
    }
    const dataJson = await data.json();
    const postsCasted: Post[] = dataJson.posts;
    const count:number = dataJson.count;
    return {postsCasted, count};
  } 
  catch (err) {
    console.log(err);
    throw new Error('Something went wrong while fetching posts');

  }
};


const getEngData = async ({page}: {page: number}) => {
  try {
    const dataEng = await fetch(`http://localhost:3002/api/newsEng?page=${page}`,{
      cache: "no-store",
    });
    if (!dataEng.ok) {
      throw new Error("Failed");
    }
    const dataEngJson = await dataEng.json();
    const postsEngCasted: Post[] = dataEngJson.posts;
    const countEng:number = dataEngJson.count;
    return {postsEngCasted, countEng};
  } 
  catch (err) {
    console.log(err);
    throw new Error('Something went wrong while fetching posts');

  }
};


export default async function NewsPage({searchParams}: {searchParams: any}) {

  const page = parseInt(searchParams.page) || 1;
  const {postsEngCasted,countEng} = await getEngData({page});
  const {postsCasted,count} = await getData({page});
 
  
  return <News posts={postsCasted} page={page} count={count} postsEng={postsEngCasted} countEng={countEng} />
}