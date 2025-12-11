'use client';

import UserCard from '@/components/user/user-card';
import { makeStyles } from '@fluentui/react-components';
import type { UserModel } from '@tc/db';
import { type FC } from 'react';

type UserListProps = {
  users: UserModel[];
};

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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

const UserList: FC<UserListProps> = ({ users }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
};

export default UserList;
