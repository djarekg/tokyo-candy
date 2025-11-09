import { signin } from '@tc/auth/auth';
import NextAuth, { type User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { signInSchema } from '@/lib/zod';
import { authConfig } from './auth.config';

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsedCredentials = signInSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;
        const { statusCode, userId: id, roleId, name } = await signin({ email, password });

        if (statusCode !== 200) return null;
        return { id, email, roleId, name } as User;
      },
    }),
  ],
});
