import prisma from "../../../utils/connect";
import { NextRequest, NextResponse } from 'next/server';


export const GET = async (req:NextRequest) => {
    const {searchParams} = new URL(req.url);
    const page = searchParams.get('page');

    const POST_PER_PAGE = 3;

const skip = (parseInt(page as string) - 1) * POST_PER_PAGE;
try {
  const firstPost = await prisma.postEng.findFirst({
    orderBy: {
      createdAt: 'desc',
    },});
  
    const paginatedPosts = await prisma.postEng.findMany({
    take: POST_PER_PAGE,
    skip,
    orderBy: {
      createdAt: 'desc',
    }
  });

  const posts = [firstPost, ...paginatedPosts];
  const count = await prisma.postEng.count();

  return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
}
catch (error) {
  return new NextResponse(
    JSON.stringify({ message: 'Something went wrong while fetching posts routes' }),
    { status: 500 }
  );
}

};

export const POST = async (req: NextRequest ) => {
  try {
    const body = await req.json();
    const post = await prisma.postEng.create({
      data: { ...body },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong while creating post' }),
      { status: 500 }
    );
  }
}
