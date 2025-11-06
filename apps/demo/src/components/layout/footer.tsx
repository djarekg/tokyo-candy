'use cache';

import type { ComponentProps, FC } from 'react';
import styles from './footer.module.css';

const Footer: FC<ComponentProps<'footer'>> = async () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={styles.footer}>
      <span>&copy; {getCurrentYear()} djarekg. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
