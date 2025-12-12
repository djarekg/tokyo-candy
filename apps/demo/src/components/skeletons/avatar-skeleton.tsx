'use client';

import { makeStyles, Skeleton, SkeletonItem } from '@fluentui/react-components';
import { tokens } from '@tc/components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: tokens.spacingVerticalM,
    blockSize: '60px',
    borderRadius: 'var(--borderRadiusMedium)',
    background: 'var(--colorNeutralBackground1)',
    boxShadow: 'var(--shadow4)',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    inlineSize: '90%',
    marginLeft: tokens.spacingVerticalS,
    gap: tokens.spacingHorizontalXS,
  },
});

const AvatarSkeleton = () => {
  const classes = useStyles();

  return (
    <Skeleton className={classes.container}>
      <SkeletonItem
        shape="circle"
        size={36}
        style={{ inlineSize: '36px !important' }}
      />
      <div className={classes.textContainer}>
        <SkeletonItem
          size={16}
          style={{ inlineSize: '35%' }}
        />
        <SkeletonItem
          size={12}
          style={{ inlineSize: '60%' }}
        />
      </div>
    </Skeleton>
  );
};

export default AvatarSkeleton;
