'use server';

import AvatarIcon from '@/components/icons/avatar';
import prisma from '@tc/db/client';

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
      <header>
        <AvatarIcon size={48} />
        {user.firstName} {user.lastName}
      </header>
      {children}
    </div>
  );
};

export default UserLayout;
