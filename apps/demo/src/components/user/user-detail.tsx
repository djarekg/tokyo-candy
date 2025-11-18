'use client';

import FormInput from '@/components/form-input/form-input';
import { makeStyles } from '@fluentui/react-components';
import type { UserModel } from '@tc/db';
import type { ComponentProps } from 'react';

type UserDetailProps = ComponentProps<'form'> & {
  user: UserModel | null;
};

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
});

const UserDetail = ({ className, user, ...props }: UserDetailProps) => {
  const classes = useStyles();

  return (
    <form
      className={`${classes.form} ${className}`}
      {...props}>
      <FormInput
        name="firstName"
        value={user?.firstName}
        placeholder="First name"
        required
      />
      <FormInput
        name="lastName"
        value={user?.lastName}
        placeholder="Last name"
        required
      />
      <FormInput
        name="email"
        value={user?.email}
        placeholder="Email"
        required
      />
    </form>
  );
};

export default UserDetail;
