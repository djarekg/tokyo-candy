const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="layout">
        <h1>Products</h1>
      </header>
      {children}
    </>
  );
};

export default Layout;
