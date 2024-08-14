
// import SingleNewsPage from '@/components/SingleNewsPage'
// import { Post, PostEng } from '@prisma/client';
// import React from 'react'
// import { useLocale } from '@/lang/LocaleContext';

// //const {currentLocale} = useLocale() || {};
// const getData = async (slug:string)  => {
//   try {
//   //   if (currentLocale === 'pl'){
//   //     const data = await fetch(`http://localhost:3002/api/news/${slug}`,{
//   //     cache: "no-store",
//   //   });

//   //   if (!data.ok) {
//   //     throw new Error("Failed");
//   //   }
//   //   const dataJson:Post[]= await data.json();
//   //   return dataJson;
//   // }
//   // else {
//     const data = await fetch(`http://localhost:3002/api/newsEng/${slug}`,{
//       cache: "no-store",
//     });

//     if (!data.ok) {
//       throw new Error("Failed");
//     }
//     const dataJson:PostEng[]= await data.json();
//     return dataJson;

// //  } 
// }
//   catch (err) {
//     throw new Error('Something went wrong while fetching posts page tsx');

//   }

// };

// const page = async ({params}:{params:{slug:string}}) => {
//   const slug = params.slug;
//   const posts =await getData(slug);
//   return (
//     <SingleNewsPage posts={posts}/>
//   )
// }

// export default page

import NewsWrapperSlug from './NewsWrapperSlug';

export default function NewsPageWrapper({ params }: { params: any }) {
  return <NewsWrapperSlug params={params} />;
}
