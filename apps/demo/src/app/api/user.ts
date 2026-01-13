import 'server-only';

import type { UserFilterType } from '@/lib/models/user-filter-type';
import { prisma } from '@tc/db';
import { cacheLife } from 'next/cache';

/**
 * Fetches all users from the database.
 *
 * @returns {Promise<UserModel[]>} A promise that resolves to an array of user records.
 */
export const getUsers = async (filter: UserFilterType) => {
  'use cache';
  cacheLife('minutes');

  if (filter.isActiveOnly) {
    return await prisma.user.findMany({
      where: { isActive: true },
    });
  }

  return await prisma.user.findMany();
};
