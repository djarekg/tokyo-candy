'use client';

import { Link, List, ListItem, makeStyles } from '@fluentui/react-components';
import { tokens } from '@tc/components';
import { isNullOrEmpty } from '@tc/core';

type SiteMenuProps = {
  className?: string;
};

const useStyles = makeStyles({
  list: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    '& a': {
      fontSize: tokens.fontSizeBase400,
    },
  },
});

const SiteMenu = ({ className }: SiteMenuProps) => {
  const classes = useStyles();

  return (
    <div className={isNullOrEmpty(className) ? '' : className}>
      <List
        navigationMode="composite"
        className={classes.list}>
        <ListItem>
          <Link
            role="gridcell"
            href="/users">
            Users
          </Link>
        </ListItem>
        <ListItem>
          <Link
            role="gridcell"
            href="/customers">
            Customers
          </Link>
        </ListItem>
        <ListItem>
          <Link
            role="gridcell"
            href="/products">
            Products
          </Link>
        </ListItem>
      </List>
    </div>
  );
};

export default SiteMenu;
