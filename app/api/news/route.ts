import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react'

const prisma = new PrismaClient();
export const GET = async (req:NextRequest) => {
    const {searchParams} = new URL(req.url);
    const page = searchParams.get('page');

    const POST_PER_PAGE = 3;

//     const query = {
//         take: POST_PER_PAGE,
//         skip: (parseInt(page as string) - 1) * POST_PER_PAGE,
//     }

//     try {
//       const [posts,count] = await prisma.$transaction([
//         prisma.post.findMany(query),
//         prisma.post.count()]) ;   
//       return new NextResponse(JSON.stringify({ posts,count }), { status: 200 });
// } catch (error) {
//     console.log(error);
//     return new NextResponse(JSON.stringify({ message: 'Something went wrong while fetching posts routes' }), { status: 500 });
// }

const skip = (parseInt(page as string) - 1) * POST_PER_PAGE;
try {
  const firstPost = await prisma.post.findFirst({
    orderBy: {
      createdAt: 'asc',
    },});
  
    const paginatedPosts = await prisma.post.findMany({
    take: POST_PER_PAGE,
    skip,
    orderBy: {
      createdAt: 'asc',
    }
  });

  const posts = [firstPost, ...paginatedPosts];
  const count = await prisma.post.count();

  return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
}
catch (error) {
  console.log(error);
  return new NextResponse(
    JSON.stringify({ message: 'Something went wrong while fetching posts routes' }),
    { status: 500 }
  );
}

};
