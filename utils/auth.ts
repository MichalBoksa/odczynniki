import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';

const allowedEmail = process.env.ALLOWED_EMAIL;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  // callbacks: {
  //   async signIn({ user }) {
  //     if (user.email === allowedEmail) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  
};

export default NextAuth(authOptions);
