import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  debug: true,
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    //     jwt({ token, trigger, session }) {
    //       if (trigger === 'update') token.name = session.user.name;
    //       return token;
    //     },
  },
  //   session: { strategy: 'jwt' },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
