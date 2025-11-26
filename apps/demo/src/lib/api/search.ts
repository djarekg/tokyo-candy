'use server';

import { cacheLife } from 'next/cache';
import { searchCustomers } from './customer';
import { searchCustomerContacts } from './customer-contact';
import { searchProducts } from './product';
import { searchUsers } from './user';

/**
 * Search across users, customers, customer contacts, and products.
 *
 * @param {string} value - The search term.
 * @returns {Promise<Array>} - The search results.
 */
export const getSearch = async (value: string) => {
  'use cache';
  cacheLife('minutes');

  const [users, customers, customerContacts, products] = await Promise.all([
    searchUsers(value),
    searchCustomers(value),
    searchCustomerContacts(value),
    searchProducts(value),
  ]);

  const results = [...users, ...customers, ...customerContacts, ...products];

  return results.length ? results : null;
};
