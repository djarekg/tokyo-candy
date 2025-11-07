'use server';

import { signIn } from '@/lib/auth-client';
import { APIError } from 'better-auth/api';

export async function authenticate(_prevState: string | undefined, formData: FormData) {
  try {
    const email = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();

    if (!email || !password) {
      throw new APIError('BAD_REQUEST');
    }

    const {} = await signIn.email({
      email,
      password,
    });
  } catch (error) {
    if (error instanceof APIError) {
      switch (error.status) {
        case 'BAD_REQUEST':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
