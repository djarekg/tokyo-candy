'use server';

import { SearchResultType } from '@/types/search-result-type';
import prisma from '@tc/db/client';
import { cacheLife } from 'next/cache';

export const searchProducts = async (value: string) => {
  'use cache';
  cacheLife('minutes');

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: value,
        mode: 'insensitive',
      },
    },
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  return products.map(({ id, name, description }) => ({
    id,
    type: SearchResultType.product,
    name,
    description,
  }));
};
