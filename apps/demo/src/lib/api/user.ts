'use server';

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
