'use server';

import { auth } from '@/auth';
import UserMenu from '@/components/auth/user-menu';
import CandyLollipopIcon from '@/components/icons/candy-lollipop';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import styles from './header.module.css';

const Header: FC<ComponentProps<'header'>> = async () => {
  const session = await auth();

  if (!session) return null;

  return (
    <header className={styles.header}>
      <Link href="/">
        <CandyLollipopIcon size={48} />
      </Link>
      <UserMenu />
    </header>
  );
};

export default Header;
