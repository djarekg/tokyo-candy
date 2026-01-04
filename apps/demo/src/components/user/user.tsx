'use server';

import { getUserById } from '@/lib/api/user';
import type { FC, PropsWithoutRef } from 'react';
import UserAvatar from './user-avatar';
import UserTabs from './user-tabs';
import styles from './user.module.css';

type User = {
  params: Promise<{ id: string }>;
};

const User: FC<PropsWithoutRef<User>> = async ({ params }) => {
  const { id } = await params;
  const user = await getUserById(id);

  if (!user) return null;

  return (
    <div className={styles.container}>
      <UserAvatar
        className={styles.avatar}
        user={user}
      />
      <UserTabs user={user} />
    </div>
  );
};

export default User;
