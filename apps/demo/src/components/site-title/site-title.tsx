'use client';

import { makeStyles } from '@fluentui/react-components';
import { tokens } from '@tc/components';
import { usePathname } from 'next/navigation';

const useStyles = makeStyles({
  titleBrand: {
    display: 'flex',
    alignItems: 'center',
    blockSize: '40px',
    fontSize: '1.8rem',
    fontWeight: tokens.fontWeightSemibold,
  },
});

const SiteTitle = () => {
  const classes = useStyles();
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <div className={`${classes.titleBrand} colorBrandGradient tc-reduce-motion`}>Tokyo Candy</div>
  );
};

export default SiteTitle;
