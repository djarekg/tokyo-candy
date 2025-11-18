'use server';

import prisma from '@tc/db/client';

export const getUserById = async (id: string) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  return user;
};
