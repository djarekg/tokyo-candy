'use server';

import { SearchResultType } from '@/types/search-result-type';
import prisma from '@tc/db/client';
import { cacheLife } from 'next/cache';

export const searchCustomerContacts = async (value: string) => {
  'use cache';
  cacheLife('minutes');

  const customContacts = await prisma.customerContact.findMany({
    where: {
      OR: [
        {
          firstName: {
            contains: value,
          },
        },
        {
          lastName: {
            contains: value,
          },
        },
        {
          email: {
            contains: value,
          },
        },
        {
          phone: {
            contains: value,
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

  return customContacts.map(contact => ({
    id: contact.id,
    type: SearchResultType.customerContact,
    name: `${contact.firstName} ${contact.lastName}`,
    description: `${contact.city}, ${contact.state.code}`,
  }));
};
