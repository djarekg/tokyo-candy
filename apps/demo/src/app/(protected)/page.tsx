import styles from './page.module.css';

const Home = () => {
  return (
    <div className={`page ${styles.page}`}>
      <div className={styles.title}>
        <span className={styles.titleAction}>Welcome to&nbsp;</span>
        <span className="appTitleBrand colorBrandGradient">Tokyo Candy</span>
      </div>
    </div>
  );
};

export default Home;
