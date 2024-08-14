import prisma from "../../../utils/connect";
import { NextRequest, NextResponse } from 'next/server';

const POST_PER_PAGE = 3;

const setCorsHeaders = (response: NextResponse) => {
  response.headers.set('Access-Control-Allow-Origin', 'https://odczynniki.com.pl');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  return response;
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page');
  const skip = (parseInt(page as string) - 1) * POST_PER_PAGE;

  try {
    const firstPost = await prisma.post.findFirst({
      orderBy: {
        createdAt: 'desc',
      },
    });

    const paginatedPosts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const posts = [firstPost, ...paginatedPosts];
    const count = await prisma.post.count();

    let response = new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
    response = setCorsHeaders(response);
    return response;
  } catch (error) {
    let response = new NextResponse(
      JSON.stringify({ message: 'Something went wrong while fetching posts routes' }),
      { status: 500 }
    );
    response = setCorsHeaders(response);
    return response;
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body },
    });

    let response = new NextResponse(JSON.stringify(post), { status: 200 });
    response = setCorsHeaders(response);
    return response;
  } catch (error) {
    let response = new NextResponse(
      JSON.stringify({ message: 'Something went wrong while creating post' }),
      { status: 500 }
    );
    response = setCorsHeaders(response);
    return response;
  }
};

// Handle OPTIONS requests (CORS preflight)
export const OPTIONS = () => {
  let response = new NextResponse(null, { status: 204 });
  response = setCorsHeaders(response);
  return response;
};
