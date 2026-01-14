'use client';

import UserFilter from '@/components/user/user-filter';
import type { UserFilterType } from '@/lib/models/user-filter-type';
import { useQueryString } from '@tc/core';
import type { ReactNode } from 'react';
import styles from './layout.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
  const [_, setQueryParams] = useQueryString();

  const handleFilterChange = ({ isActiveOnly }: UserFilterType) => {
    setQueryParams({
      isActive: isActiveOnly ? 'true' : undefined,
    });
  };

  return (
    <>
      <header className={`layout ${styles.header}`}>
        <h1>Users</h1>
        <UserFilter onChange={handleFilterChange} />
      </header>
      {children}
    </>
  );
};

export default Layout;
