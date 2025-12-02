'use server';

import { getUserById } from '@/lib/api/user';
import type { FC, PropsWithoutRef } from 'react';
import UserTabs from './user-tabs';

type User = {
  params: Promise<{ id: string }>;
};

const User: FC<PropsWithoutRef<User>> = async ({ params }) => {
  const { id } = await params;
  const user = await getUserById(id);

  if (!user) return null;

  return <UserTabs user={user} />;
};

export default User;
