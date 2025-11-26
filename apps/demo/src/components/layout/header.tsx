'use server';

import { auth } from '@/auth';
import UserMenu from '@/components/auth/user-menu';
import Search from '@/components/search/search';
import CandyLollipopIcon from '@tc/components/icons/candy-lollipop';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import styles from './header.module.css';

const Header: FC<ComponentProps<'header'>> = async () => {
  const session = await auth();

  if (!session) return null;

  return (
    <header className={styles.header}>
      <Link href="/">
        <CandyLollipopIcon
          size={48}
          className={styles.link}
        />
      </Link>
      <Search />
      <UserMenu userId={session.user.id} />
    </header>
  );
};

export default Header;
