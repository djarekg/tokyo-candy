'use server';

import AvatarIcon from '@/components/icons/avatar';
import { getUserById } from '@/lib/api/user';
import styles from './layout.module.css';

type UserLayout = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

const UserLayout = async ({ children, params }: UserLayout) => {
  const { id } = await params;
  const user = await getUserById(id);

  if (!user) return null;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <AvatarIcon size={28} />
        {user.firstName} {user.lastName}
      </header>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default UserLayout;
