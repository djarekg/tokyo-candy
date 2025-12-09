'use client';

import { makeStyles, Skeleton, SkeletonItem } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px',
    blockSize: '58px',
    borderRadius: 'var(--borderRadiusMedium)',
    background: 'var(--colorNeutralBackground1)',
    boxShadow: 'var(--shadow8)',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    inlineSize: '90%',
    marginLeft: '8px',
    gap: '4px',
  },
});

const AvatarSkeleton = () => {
  const classes = useStyles();

  return (
    <Skeleton className={classes.container}>
      <SkeletonItem
        shape="circle"
        size={32}
      />
      <div className={classes.textContainer}>
        <SkeletonItem
          size={12}
          style={{ inlineSize: '65%' }}
        />
        <SkeletonItem
          size={8}
          style={{ inlineSize: '30%' }}
        />
      </div>
    </Skeleton>
  );
};

export default AvatarSkeleton;
