'use cache';

import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import Signout from '@/components/auth/signout';
import GhostIcon from '@/components/icons/ghost';
import styles from './header.module.css';

const Header: FC<ComponentProps<'header'>> = async () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <GhostIcon size={48} strokeWidth={1} strokeColor='var(--colorNeutralForeground1)' />
      </Link>

      <Signout />
    </header>
  );
};

export default Header;
