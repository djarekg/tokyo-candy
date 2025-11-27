'use client';

import { Link, List, ListItem, makeStyles, type ComponentProps } from '@fluentui/react-components';
import { bundleIcon } from '@fluentui/react-icons';
import { isEmpty } from '@tc/core/utils';
import type { FC } from 'react';
import type { CommandItem } from './command-item.js';

type CommandListProps = {
  items: CommandItem[];
};

const useStyles = makeStyles({
  noRecords: {
    display: 'grid',
    placeContent: 'center',
    fontSize: 'var(--fontSizeBase400)',
    // fontWeight: 'var(--fontWeightSemibold)',
    color: 'var(--colorNeutralForeground3)',
    padding: '1rem',
  },
  list: {
    marginBlock: '0.7em',
  },
  listItem: {
    boxSizing: 'border-box',
    paddingInline: '1px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.7rem',
    inlineSize: 'calc(100% - 1rem)',
    blockSize: '40px',
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

const CommandList: FC<ComponentProps<CommandListProps>> = ({ items }) => {
  const classes = useStyles();

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
            aria-label={label}
            className={classes.listItem}>
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
