'use client';

import { Link, List, ListItem, makeStyles } from '@fluentui/react-components';
import { tokens } from '@tc/components';

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
    <List
      navigationMode="composite"
      className={`${classes.list} ${className ?? ''}`}>
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
  );
};

export default SiteMenu;
