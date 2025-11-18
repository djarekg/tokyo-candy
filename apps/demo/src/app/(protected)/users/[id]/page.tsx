'use server';

import Loader from '@/components/loader/loader';
import UserTabs from '@/components/user/user-tabs';
import { getUserById } from '@/lib/api/user';
import { Suspense } from 'react';
import styles from './page.module.css';

const User = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await getUserById(id);

  if (!user) return null;

  return (
    <div className={styles.page}>
      <Suspense fallback={<Loader />}>
        <UserTabs user={user} />
      </Suspense>
    </div>
  );
};

export default User;
