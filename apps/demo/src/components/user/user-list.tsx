'use client';

import UserCard from '@/components/user/user-card';
import { makeStyles } from '@fluentui/react-components';
import { tokens } from '@tc/components';
import type { UserModel } from '@tc/db';
import { useRouter } from 'next/navigation';
import { type FC } from 'react';

type UserListProps = {
  users: UserModel[];
};

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: tokens.spacingHorizontalL,
    alignItems: 'start',
    opacity: 1,
    transition: `opacity 500ms ease-in-out 5s`,

    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
  '@starting-style': {
    '.container': {
      opacity: 0,
    },
  },
});

const UserList: FC<UserListProps> = ({ users }) => {
  const classes = useStyles();
  const router = useRouter();

  const handleUserClick = (user: UserModel) => {
    router.push(`/users/${user.id}`);
  };

  return (
    <div className={`${classes.container} container}`}>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onClick={handleUserClick}
        />
      ))}
    </div>
  );
};

export default UserList;
