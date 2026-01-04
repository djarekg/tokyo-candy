import User from '@/components/user/user';
import styles from './page.module.css';

const UserPage = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <div className={styles.page}>
      <User params={params} />
    </div>
  );
};

export default UserPage;
