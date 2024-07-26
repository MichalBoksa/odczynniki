
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import prisma from "./connect";

const allowedEmail = process.env.ALLOWED_EMAIL;

const secret = process.env.SECRET;
export const authOptions:AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  secret: secret,
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

