'use server';

import { getUserById } from '@/lib/api/user';
import { AvatarIcon } from '@tc/components/icons';
import { type ComponentPropsWithoutRef, type FC } from 'react';
import styles from './user-header.module.css';

type UserHeaderProps = ComponentPropsWithoutRef<'div'> & {
  params: Promise<{ id: string }>;
};

const UserHeader: FC<UserHeaderProps> = async ({ params }) => {
  const { id } = await params;
  const user = await getUserById(id);

  if (!user) return null;

  return (
    <header className={styles.header}>
      <AvatarIcon size={28} />
      {user.firstName} {user.lastName}
    </header>
  );
};

export default UserHeader;
