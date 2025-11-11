'use server';

import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { auth } from '@/auth';
import CandyLollipopIcon from '@/components/icons/candy-lollipop';
import styles from './header.module.css';

const Header: FC<ComponentProps<'header'>> = async () => {
  const session = await auth();

  if (!session) return null;

  return (
    <header className={styles.header}>
      <Link href='/'>
        <CandyLollipopIcon size={48} />
      </Link>

      {/* <Signout /> */}
    </header>
  );
};

export default Header;
