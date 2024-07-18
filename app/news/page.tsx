import { Post } from '@prisma/client';
import News from '@/components/News'; 

interface NewsProps {
  posts: Post[];
  count: number;
  page: number;
}


 const getData = async ({page}: {page: number}) => {
  try {
    const data = await fetch(`http://localhost:3001/api/news?page=${page}`,{
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


export default async function NewsPage({searchParams}: {searchParams: any}) {

  const page = parseInt(searchParams.page) || 1;
  const {postsCasted,count} = await getData({page});
 
  
  return <News posts={postsCasted} page={page} count={count} />
}
