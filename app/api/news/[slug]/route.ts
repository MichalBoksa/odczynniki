import prisma from "../../../../utils/connect";
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, {params}:{params:{slug:string}}) => {
    const slug = params.slug;
    try{
        const post = await prisma.post.findUnique({
            where: {slug} ,
        });

        const recentPosts = await prisma.post.findMany({
            take: 3,
            
          });

          const posts = [post, ...recentPosts];
        return NextResponse.json(posts, { status: 200 });
    }

    catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong while fetching posts' }), { status: 500 });
}
};
