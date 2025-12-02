'use client';

import { makeStyles } from '@fluentui/react-components';
import type { UserModel } from '@tc/db';
import type { ComponentProps, FC } from 'react';
import UserCard from './user-card';

type UserListProps = ComponentProps<'div'> & {
  users: UserModel[];
};

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    // gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    alignItems: 'start',
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

const UserList: FC<UserListProps> = ({ users, ...props }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.container}
      {...props}>
      {users.map(user => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default UserList;
