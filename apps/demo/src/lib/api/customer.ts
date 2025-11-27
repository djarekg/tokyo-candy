'use server';

import { SearchResultType } from '@/types/search-result-type';
import prisma from '@tc/db/client';
import { cacheLife } from 'next/cache';

export const searchCustomers = async (value: string) => {
  'use cache';
  cacheLife('minutes');

  const customers = await prisma.customer.findMany({
    where: {
      name: {
        contains: value,
        mode: 'insensitive',
      },
    },
    select: {
      id: true,
      name: true,
      city: true,
      state: {
        select: {
          code: true,
        },
      },
    },
  });

  return customers.map(customer => ({
    id: customer.id,
    type: SearchResultType.customer,
    name: customer.name,
    description: `${customer.city}, ${customer.state.code}`,
  }));
};
