'use client';

import AvatarSkeleton from '@/components/skeletons/avatar-skeleton';
import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    alignItems: 'start',
    padding: '2rem',

    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {Array.from({ length: 28 }, (_, index) => (
        <AvatarSkeleton key={index} />
      ))}
    </div>
  );
};

export default Loading;
