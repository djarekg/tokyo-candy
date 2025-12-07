import { Skeleton, SkeletonItem, makeStyles } from '@fluentui/react-components';
import { randomInRange } from '@tc/core/utils';
import { type FC } from 'react';

const MAX_LIST_ITEM_COUNT = 6;
const LIST_MARGIN_BLOCK = 10;
const LINK_BLOCK_SIZE = 40;

const useStyles = makeStyles({
  list: {
    marginBlock: `${LIST_MARGIN_BLOCK}px`,
    maxBlockSize: `calc(${LINK_BLOCK_SIZE}px * 6 - 6px)`,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  skeleton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.7rem',
    blockSize: `${LINK_BLOCK_SIZE}px`,
    paddingInline: '0.5rem',
    borderStartEndRadius: 'var(--borderRadiusMedium)',
    borderEndEndRadius: 'var(--borderRadiusMedium)',
    background: 'var(--colorNeutralBackground1)',
  },
});

type CommandListLoaderProps = {
  itemCount?: number;
};

const CommandListLoader: FC<CommandListLoaderProps> = ({ itemCount = MAX_LIST_ITEM_COUNT }) => {
  const classes = useStyles();
  const rows = Array.from(
    { length: Math.max(1, Math.min(itemCount, MAX_LIST_ITEM_COUNT)) },
    (_, index) => index
  );

  return (
    <div
      className={classes.list}
      aria-live="polite"
      aria-busy="true">
      {rows.map(index => (
        <Skeleton
          aria-label="Loading results"
          key={index}
          className={classes.skeleton}>
          <SkeletonItem
            shape="circle"
            size={20}
          />
          <SkeletonItem
            size={16}
            style={{ inlineSize: `${randomInRange(150, 300)}px` }}
          />
        </Skeleton>
      ))}
    </div>
  );
};

export default CommandListLoader;
