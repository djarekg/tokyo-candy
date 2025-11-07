'use client';

import { authenticate } from '@/lib/actions';
import { useActionState, type ComponentProps, type FC } from 'react';

const Signin: FC<ComponentProps<'form'>> = () => {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <form action={formAction}>
      <input
        name="username"
        type="text"
        placeholder="Username"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
      />
      <button
        type="submit"
        aria-disabled={isPending}>
        Sign In
      </button>
      {errorMessage && <span>{errorMessage}</span>}
    </form>
  );
};

export default Signin;
