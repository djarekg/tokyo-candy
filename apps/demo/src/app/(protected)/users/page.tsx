'use server';

import { getUsers } from '@/app/api/user';
import UserList from '@/components/user/user-list';
import { Suspense, type FC } from 'react';
import Loading from './loading';
import styles from './page.module.css';

const Users: FC = async () => {
  const users = await getUsers();

  return (
    <Suspense fallback={<Loading />}>
      <div className={`${styles.page} page`}>
        <UserList users={users} />
      </div>
    </Suspense>
  );
};

// imagine safelyGetRandomNumber is a function that handles synchronizing the random number chosen between SSR and hydration to avoid hydration errors

export default Users;
