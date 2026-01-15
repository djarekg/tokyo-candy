'use client';

import { makeStyles } from '@fluentui/react-components';
import { tokens } from '@tc/components';
import { isNullOrEmpty } from '@tc/core';
import { usePathname } from 'next/navigation';
import type { ComponentProps, FC } from 'react';

type SiteTitleProps = ComponentProps<'div'>;

const useStyles = makeStyles({
  titleBrand: {
    display: 'flex',
    alignItems: 'center',
    blockSize: '40px',
    fontSize: '1.8rem',
    fontWeight: tokens.fontWeightSemibold,
  },
});

const SiteTitle: FC<SiteTitleProps> = ({ className, ...props }) => {
  const classes = useStyles();
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <div
      className={`${classes.titleBrand} colorBrandGradient tc-reduce-motion ${isNullOrEmpty(className) ? '' : className}`}
      {...props}>
      Tokyo Candy
    </div>
  );
};

export default SiteTitle;
