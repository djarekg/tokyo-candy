'use cache';

import GhostIcon from '@/components/icons/ghost';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import styles from './header.module.css';

const Header: FC<ComponentProps<'header'>> = async () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <GhostIcon
          size={48}
          strokeWidth={1}
          strokeColor="var(--colorNeutralForeground1)"
        />
      </Link>
    </header>
  );
};

export default Header;
