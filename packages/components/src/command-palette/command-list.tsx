'use client';

import { List, ListItem, makeStyles, type ComponentProps } from '@fluentui/react-components';
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
});

const CommandList: FC<ComponentProps<CommandListProps>> = ({ items }) => {
  const classes = useStyles();

  if (isEmpty(items)) {
    return <div className={classes.noRecords}>Search has no results</div>;
  }

  return (
    <List navigationMode="items">
      {items.map(item => (
        <ListItem
          key={item.key}
          aria-label={item.label}>
          {item.label}
        </ListItem>
      ))}
    </List>
  );
};

export default CommandList;
