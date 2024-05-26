
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient, User } from '@prisma/client';

const allowedEmail = process.env.ALLOWED_EMAIL;
const prisma = new PrismaClient();
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn( user: {user:User} ) {
      if (user.user.email === allowedEmail) {
        return true;
      } else {
        return false;
      }
    },
  },
  
};

