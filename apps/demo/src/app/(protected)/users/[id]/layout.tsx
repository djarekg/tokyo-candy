'use server';

import AvatarIcon from '@/components/icons/avatar';
import prisma from '@tc/db/client';
import styles from './layout.module.css';

const UserLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return (
    <div>
      <header className={styles.header}>
        <AvatarIcon size={28} />
        {user.firstName} {user.lastName}
      </header>
      {children}
    </div>
  );
};

export default UserLayout;
