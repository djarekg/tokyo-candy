'use client';

import { Link, List, ListItem, makeStyles } from '@fluentui/react-components';
import { bundleIcon } from '@fluentui/react-icons';
import { isEmpty } from '@tc/core/utils';
import { lazy, useMemo, type FC } from 'react';
import type { CommandItem } from './command-item';

const Loader = lazy(() => import('#app/loader/loader'));

type CommandListProps = {
  loading?: boolean;
  items: CommandItem[];
};

const MAX_LIST_ITEM_COUNT = 6;
const LIST_MARGIN_BLOCK = 10;
const LINK_BLOCK_SIZE = 40;
const DEFAULT_BLOCK_SIZE = '200px';

const useStyles = makeStyles({
  noRecords: {
    display: 'grid',
    placeContent: 'center',
    fontSize: 'var(--fontSizeBase400)',
    // fontWeight: 'var(--fontWeightSemibold)',
    color: 'var(--colorNeutralForeground3)',
    padding: '1rem',
  },
  loader: {
    blockSize: '200px',
  },
  list: {
    marginBlock: `${LIST_MARGIN_BLOCK}px`,
    maxBlockSize: `calc(${LINK_BLOCK_SIZE}px * 6 - 6px)`,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.7rem',
    inlineSize: 'calc(100% - 1rem)',
    blockSize: `${LINK_BLOCK_SIZE}px`,
    paddingInline: '0.5rem',
    fontSize: 'var(--fontSizeBas300)',
    textDecoration: 'none',
    color: 'inherit',
    borderStartEndRadius: 'var(--borderRadiusMedium)',
    borderEndEndRadius: 'var(--borderRadiusMedium)',

    '&:hover': {
      textDecoration: 'none',
      background: 'var(--colorNeutralBackground1Hover)',
    },
  },
});

/**
 * Command List component to display search results or loading state.
 *
 * @param {CommandListProps} props - The component props.
 */
const CommandList: FC<CommandListProps> = ({ loading, items }) => {
  const classes = useStyles();

  // Calculate block size based on item count, item height, and margin.
  const calculateBlockSize = useMemo(
    () => (itemCount: number) => {
      return itemCount > 0 && itemCount < MAX_LIST_ITEM_COUNT
        ? `${LINK_BLOCK_SIZE * itemCount + LIST_MARGIN_BLOCK * itemCount + 10}px`
        : DEFAULT_BLOCK_SIZE;
    },
    []
  );

  if (loading) {
    const blockSize = calculateBlockSize(items?.length ?? 0);
    return <Loader blockSize={blockSize} />;
  }

  if (isEmpty(items)) {
    return <div className={classes.noRecords}>Search has no results</div>;
  }

  return (
    <List
      navigationMode="composite"
      className={classes.list}>
      {items.map(({ key, label, filledIcon, regularIcon, href }) => {
        const Icon = bundleIcon(filledIcon, regularIcon);

        return (
          <ListItem
            key={key}
            value={key}
            aria-label={label}>
            <Link
              role="gridcell"
              className={classes.link}
              href={href}>
              {Icon && <Icon fontSize={21} />}
              {label}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CommandList;
