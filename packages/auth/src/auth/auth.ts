import { compareHash } from '#app/crypto/hash';
import type { AuthStatus } from '#app/types/auth-status.js';
import prisma from '@tc/db/client';

export type SigninArgs = {
  /**
   * The user's username (email).
   */
  username: string;
  /**
   * The user's password.
   */
  password: string;
};

/**
 * Signs in a user with the given username and password.
 * @param {SigninArgs} args - The sign-in arguments containing username and password.
 * @returns {Promise<AuthStatus>} An object containing the status code and user data if successful.
 */
export const signin = async ({ username, password }: SigninArgs): Promise<AuthStatus> => {
  const user = await prisma.user.findFirst({
    select: {
      id: true,
      userCredential: {
        select: {
          password: true,
          role: true,
        },
      },
    },
    where: {
      email: username,
    },
  });

  if (!user) {
    return {
      statusCode: 404, // NOT FOUND
    };
  }

  // Validate password against stored hash
  const hashPassword = user.userCredential?.password ?? '';
  const isValid = compareHash(password, hashPassword);

  if (isValid) {
    return {
      statusCode: 200,
      userId: user.id,
    };
  }

  return {
    statusCode: 401, // UNAUTHORIZED
  };
};
