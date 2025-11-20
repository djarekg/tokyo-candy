import Loader from '@/components/loader/loader';
import User from '@/components/user/user';
import { Suspense } from 'react';
import styles from './page.module.css';

const UserPage = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <div className={styles.page}>
      <Suspense fallback={<Loader />}>
        <User params={params} />
      </Suspense>
    </div>
  );
};

export default UserPage;
