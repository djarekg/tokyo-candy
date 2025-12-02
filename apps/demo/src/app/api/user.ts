import 'server-only';

import { prisma } from '@tc/db';
import { cacheLife } from 'next/cache';

/**
 * Fetches all users from the database.
 *
 * @returns {Promise<UserModel[]>} A promise that resolves to an array of user records.
 */
export const getUsers = async () => {
  'use cache';
  cacheLife('minutes');

  return await prisma.user.findMany();
};
