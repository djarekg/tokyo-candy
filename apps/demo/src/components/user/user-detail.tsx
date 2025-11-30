'use client';

import { makeStyles } from '@fluentui/react-components';
import { FormCard, FormInput } from '@tc/components/form';
import { ContactIcon } from '@tc/components/icons';
import { tokens } from '@tc/components/styles';
import type { UserModel } from '@tc/db';
import type { ComponentProps, FC } from 'react';

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

const UserDetail: FC<UserDetailProps> = ({ className, user, ...props }) => {
  const classes = useStyles();

  return (
    <form
      className={`${classes.form} ${className}`}
      {...props}>
      <FormCard
        title="Contact information"
        layout="grid"
        icon={
          <ContactIcon
            size={36}
            strokeWidth={1}
            strokeColor={tokens.colorNeutralCardBackground}
            fill={tokens.colorNeutralForegroundOnBrand}
          />
        }>
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
      </FormCard>
    </form>
  );
};

export default UserDetail;
