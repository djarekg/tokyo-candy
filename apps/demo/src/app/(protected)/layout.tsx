import Header from '@/components/layout/header';
import { Suspense } from 'react';

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      {children}
    </>
  );
};

export default ProtectedLayout;
