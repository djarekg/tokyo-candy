'use client';

import { Button, Field, Input } from '@fluentui/react-components';
import { type ComponentProps, type FC, useActionState } from 'react';
import { authenticate } from '@/lib/actions';
import styles from './page.module.css';

const Signin: FC<ComponentProps<'form'>> = () => {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.titleAction}>Sign in to&nbsp;</span>
        <span className={`${styles.titleBrand} colorBrandGradient`}>Tokyo Candy</span>
      </div>
      <form action={formAction} className={styles.form}>
        <Field required>
          <Input name='email' placeholder='Email' size='large' />
        </Field>
        <Field required>
          <Input name='password' type='password' placeholder='Password' size='large' />
        </Field>
        <Button type='submit' aria-disabled={isPending} size='large'>
          Sign In
        </Button>
        {errorMessage && <span>{errorMessage}</span>}
      </form>
    </div>
  );
};

export default Signin;
