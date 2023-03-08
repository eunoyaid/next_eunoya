import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  callbacks: {
    async session({ session, token, user }) {
      session.jwt = token.jwt;
      session.id = token.id;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/${account.provider}/callback?access_token=${account.access_token}`
        );
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return token;
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
