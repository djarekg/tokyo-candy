import styles from './page.module.css';

export default function UnprotectedHome() {
  return (
    <div className="page">
      <div className={styles.root}>
        <div className={styles.title}>
          <span className={styles.titleAction}>Sign in to&nbsp;</span>
          <span className={`${styles.titleBrand} colorBrandGradient`}>Tokyo Candy</span>
        </div>
      </div>
    </div>
  );
}
