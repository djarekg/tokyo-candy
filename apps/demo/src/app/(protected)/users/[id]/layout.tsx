import UserHeader from '@/components/user/user-header';
import type { RouteProps } from '@/types/route-props';
import { Suspense, type FC } from 'react';
import styles from './layout.module.css';

const UserLayout: FC<RouteProps<'id'>> = ({ children, params }) => {
  return (
    <div className={styles.container}>
      <Suspense>
        <UserHeader params={params} />
      </Suspense>
      <div className={styles.wrapper}>
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
};

export default UserLayout;
