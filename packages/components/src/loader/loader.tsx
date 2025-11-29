'use client';

import { makeStyles, Spinner } from '@fluentui/react-components';
import type { ComponentProps, FC } from 'react';

type LoaderProps = ComponentProps<'div'> & {
  blockSize?: string;
};

const useStyles = makeStyles({
  container: {
    display: 'grid',
    placeContent: 'center',
    // blockSize: '100%',
    inlineSize: '100%',
  },
});

const Loader: FC<LoaderProps> = ({ blockSize, ...props }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.container}
      style={{ blockSize: blockSize || '100%' }}
      {...props}>
      <Spinner size="large" />
    </div>
  );
};

export default Loader;
