import { Card, CardHeader, Persona } from '@fluentui/react-components';
import type { UserModel } from '@tc/db';
import type { FC } from 'react';

type UserCardProps = {
  user: UserModel;
};

const UserCard: FC<UserCardProps> = ({ user, ...props }) => {
  return (
    <Card {...props}>
      <CardHeader
        header={
          <Persona
            name={`${user.firstName} ${user.lastName}`}
            secondaryText={user.jobTitle}
          />
        }
      />
    </Card>
  );
};

export default UserCard;
