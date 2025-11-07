import type { Role } from '#app/generated/prisma/enums';

export type AuthStatus = {
  /**
   * HTTP status code indicating the result of the authentication attempt.
   */
  statusCode: number;
  /**
   * The ID of the authenticated user, if authentication was successful.
   */
  userId?: string;
  /**
   * The role of the authenticated user.
   */
  role?: Role;
};
