import Google from "next-auth/providers/google"
 
export const authOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),],

        callbacks: {
            async signIn({ user, account, profile }) {
              if (user.email === allowedEmail) {
                return true;
              } else {
                return false; 
              }
            },
          },
        };