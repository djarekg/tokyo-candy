'use server';

import { SearchResultType } from '@/types/search-result-type';
import prisma from '@tc/db/client';
import { cacheLife } from 'next/cache';

export const getUserById = async (id: string) => {
  'use cache';
  cacheLife('hours');

  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  return user;
};

export const searchUsers = async (value: string) => {
  'use cache';
  cacheLife('minutes');

  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          firstName: {
            contains: value,
            mode: 'insensitive',
          },
        },
        {
          lastName: {
            contains: value,
            mode: 'insensitive',
          },
        },
      ],
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      city: true,
      state: {
        select: {
          code: true,
        },
      },
    },
  });

  return users.map(user => ({
    id: user.id,
    type: SearchResultType.user,
    name: `${user.firstName} ${user.lastName}`,
    description: `${user.city}, ${user.state.code}`,
  }));
};
