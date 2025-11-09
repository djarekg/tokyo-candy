'use client';

import { type ComponentProps, type FC, useActionState } from 'react';
import { authenticate } from '@/lib/actions';

const Signin: FC<ComponentProps<'form'>> = () => {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <form action={formAction}>
      <input name='email' type='text' placeholder='Email' />
      <input name='password' type='password' placeholder='Password' />
      <button type='submit' aria-disabled={isPending}>
        Sign In
      </button>
      z{errorMessage && <span>{errorMessage}</span>}
    </form>
  );
};

export default Signin;
