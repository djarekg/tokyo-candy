import { signin } from '@tc/auth/auth';
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
        const { statusCode, userId: id } = await signin({ username, password });

        if (statusCode !== 200) return null;
        return { id, name: username } as User;
      },
    }),
  ],
});
