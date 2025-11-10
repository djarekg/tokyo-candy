'use cache';

import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import CandyFilledIcon from '@/components/icons/candy-filled';
import styles from './header.module.css';

const Header: FC<ComponentProps<'header'>> = async () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <CandyFilledIcon size={48} />
      </Link>

      {/* <Signout /> */}
    </header>
  );
};

export default Header;
