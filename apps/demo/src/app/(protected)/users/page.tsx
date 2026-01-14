'use server';

import { getUsers } from '@/app/api/user';
import UserList from '@/components/user/user-list';
import { Suspense } from 'react';
import Loading from './loading';

const Users = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { isActive } = await searchParams;
  const users = await getUsers({ isActiveOnly: isActive === 'true' });

  return (
    <Suspense fallback={<Loading />}>
      <div className="page">
        <UserList users={users} />
      </div>
    </Suspense>
  );
};

export default Users;
