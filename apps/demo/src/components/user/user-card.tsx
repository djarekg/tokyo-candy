'use client';

import { Card, CardHeader, Persona } from '@fluentui/react-components';
import { format } from '@tc/core';
import { type UserModel } from '@tc/db';
import { useMemo, type FC } from 'react';

type UserCardProps = {
  index: number; // workaround until imageId is added to UserModel
  user: UserModel;
};

const AVATAR_URL = process.env.NEXT_PUBLIC_AVATAR_URL!;

const UserCard: FC<UserCardProps> = ({ index, user, ...props }) => {
  const { firstName, lastName, jobTitle, gender } = user;
  const avatarUrl = useMemo(
    () => format(AVATAR_URL, gender === 'MALE' ? 'men' : 'women', index.toString()),
    [gender, index]
  );

  return (
    <Card {...props}>
      <CardHeader
        header={
          <Persona
            name={`${firstName} ${lastName}`}
            secondaryText={jobTitle}
            avatar={{
              image: {
                src: avatarUrl,
              },
            }}
          />
        }
      />
    </Card>
  );
};

export default UserCard;
