'use client';

import { makeStyles } from '@fluentui/react-components';
import { FormCard, FormInput } from '@tc/components/form';
import { format } from '@tc/core';
import type { UserModel } from '@tc/db';
import { useMemo, type ComponentProps, type FC } from 'react';

type UserDetailProps = ComponentProps<'form'> & {
  user: UserModel;
};

const AVATAR_URL = process.env.NEXT_PUBLIC_AVATAR_URL!;

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
    inlineSize: '100px',
  },
});

const UserDetail: FC<UserDetailProps> = ({ className, user, ...props }) => {
  const classes = useStyles();
  const {
    firstName,
    lastName,
    email,
    gender,
    imageId,
    streetAddress,
    streetAddress2,
    city,
    stateId,
    zip,
  } = user;
  const avatarUrl = useMemo(
    () => format(AVATAR_URL, gender === 'MALE' ? 'men' : 'women', imageId.toString()),
    [gender, imageId]
  );

  return (
    <form
      className={`${classes.form} ${className}`}
      {...props}>
      <FormCard
        title="Contact information"
        layout="grid"
        icon={
          <img
            src={avatarUrl}
            alt="User Avatar"
            width={46}
            height={46}
          />
        }>
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
