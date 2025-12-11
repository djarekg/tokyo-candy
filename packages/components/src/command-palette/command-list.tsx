'use client';

import CommandListLoader from '#app/command-palette/command-list-loader';
import { Link, List, ListItem, makeStyles } from '@fluentui/react-components';
import { bundleIcon } from '@fluentui/react-icons';
import { isEmpty } from '@tc/core/utils';
import { type FC } from 'react';
import type { CommandItem } from './command-item';

type CommandListProps = {
  loading?: boolean;
  items: CommandItem[];
};

const LIST_MARGIN_BLOCK = 10;
const LINK_BLOCK_SIZE = 40;

const useStyles = makeStyles({
  noRecords: {
    display: 'grid',
    placeContent: 'center',
    fontSize: 'var(--fontSizeBase400)',
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

      '& a': {
        textDecorationLine: 'none',
      },
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

  if (loading) {
    return <CommandListLoader itemCount={items.length ?? 0} />;
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
