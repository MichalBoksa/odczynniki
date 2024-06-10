
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient, User } from '@prisma/client';
import { AuthOptions } from 'next-auth';

const allowedEmail = process.env.ALLOWED_EMAIL;
const prisma = new PrismaClient();
export const authOptions:AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user.email === allowedEmail) {
        return true;
      } else {
        return false;
      }
    },
  },
  
};

