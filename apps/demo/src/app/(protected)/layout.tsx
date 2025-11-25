import Header from '@/components/layout/header';
import CommandPalette from '@tc/components/command-palette';
import { Suspense } from 'react';

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      {/* <Suspense>{children}</Suspense> */}
      {children}
      <CommandPalette />
    </>
  );
};

export default ProtectedLayout;
