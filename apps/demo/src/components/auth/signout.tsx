'use client';

import { type ComponentProps, type FC, useActionState } from 'react';
import { signOutUser } from '@/lib/actions';

const Signout: FC<ComponentProps<'form'>> = () => {
  const [_, formAction, isPending] = useActionState(signOutUser, undefined);

  return (
    <form action={formAction}>
      <button type='submit' aria-disabled={isPending}>
        Sign Out
      </button>
    </form>
  );
};

export default Signout;
