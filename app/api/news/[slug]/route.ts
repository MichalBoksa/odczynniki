import prisma from "../../../../utils/connect";
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: { slug: string } }) => {
    const slug = params.slug;

    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', 'https://odczynniki.com.pl');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');
    headers.set('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
        return new NextResponse(null, { headers, status: 204 });
    }

    try {
        const post = await prisma.post.findUnique({
            where: { slug },
        });

        const recentPosts = await prisma.post.findMany({
            take: 3,
        });

        const posts = [post, ...recentPosts];
        return new NextResponse(JSON.stringify(posts), { headers, status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: 'Something went wrong while fetching posts' }), { headers, status: 500 });
    }
};
