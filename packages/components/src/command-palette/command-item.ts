import type { ReactNode } from 'react';

export type CommandItem = {
  key: string;
  label: string;
  href: string;
  icon: ReactNode;
};
