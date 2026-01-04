'use client';

import { makeStyles } from '@fluentui/react-components';
import { FormCard, FormInput } from '@tc/components/form';
import type { UserModel } from '@tc/db';
import { type ComponentProps, type FC } from 'react';

type UserDetailProps = ComponentProps<'form'> & {
  user: UserModel;
};

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  cityStateZip: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    inlineSize: '100%',
  },
  zip: {
    inlineSize: '5ch',
  },
});

const UserDetail: FC<UserDetailProps> = ({ className, user, ...props }) => {
  const classes = useStyles();
  const { firstName, lastName, email, streetAddress, streetAddress2, city, stateId, zip } = user;

  return (
    <form
      className={`${classes.form} ${className}`}
      {...props}>
      <FormCard
        title="Contact information"
        layout="grid">
        <FormInput
          name="firstName"
          value={firstName}
          placeholder="First name"
          required
        />
        <FormInput
          name="lastName"
          value={lastName}
          placeholder="Last name"
          required
        />
        <FormInput
          name="email"
          value={email}
          placeholder="Email"
          required
        />
      </FormCard>

      <FormCard title="Address">
        <FormInput
          name="streetAddress"
          value={streetAddress}
          placeholder="Street address"
          required
        />
        <FormInput
          name="streetAddress2"
          value={streetAddress2 || ''}
          placeholder="Street address 2"
        />

        <section className={classes.cityStateZip}>
          <FormInput
            name="city"
            value={city}
            placeholder="City"
            required
          />
          <FormInput
            name="stateId"
            value={stateId}
            placeholder="State"
            required
          />
          <FormInput
            className={classes.zip}
            name="zip"
            value={zip}
            placeholder="Zip"
            required
          />
        </section>
      </FormCard>
    </form>
  );
};

export default UserDetail;
