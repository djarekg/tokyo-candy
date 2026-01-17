import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className={`layout ${styles.header}`}>
        <h1>Products</h1>
      </header>
      {children}
    </>
  );
};

export default Layout;
