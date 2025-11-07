// import db from '@/lib/db';
// import type { AuthStatus } from '@tc/api';
// import NextAuth, { type User } from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Credentials({
//       credentials: {
//         username: { label: 'Username' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize({ username, password }) {
//         const { statusCode, userId: id }: AuthStatus = await db.auth.signin({ username, password });

//         if (statusCode !== 200) return null;
//         return { id, name: username } as User;
//       },
//     }),
//   ],
//   callbacks: {
//     jwt({ token, trigger, session }) {
//       if (trigger === 'update') token.name = session.user.name;
//       return token;
//     },
//   },
//   // pages: {
//   //   signIn: '/auth/signin',
//   // },
//   basePath: '/auth',
//   session: { strategy: 'jwt' },
// });
import { db, type AuthStatus } from '@tc/api';
import NextAuth, { type User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from './auth.config';

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.email(), password: z.string() })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { username, password } = parsedCredentials.data;
        const { statusCode, userId: id }: AuthStatus = await db.auth.signin({ username, password });

        if (statusCode !== 200) return null;
        return { id, name: username } as User;
      },
    }),
  ],
});
