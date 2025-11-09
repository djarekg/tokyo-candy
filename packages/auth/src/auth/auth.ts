import prisma from '@tc/db/client';
import { compareHash } from '#app/crypto/hash';
import type { AuthStatus } from '#app/types/auth-status.js';

export type SigninArgs = {
  /**
   * The user's email.
   */
  email: string;
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
export const signin = async ({ email, password }: SigninArgs): Promise<AuthStatus> => {
  const user = await prisma.user.findFirst({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      userCredential: {
        select: {
          password: true,
          role: true,
        },
      },
    },
    where: {
      email,
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
      roleId: user.userCredential?.role,
      name: `${user.firstName} ${user.lastName}`,
    };
  }

  return {
    statusCode: 401, // UNAUTHORIZED
  };
};
