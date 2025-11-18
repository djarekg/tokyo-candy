'use client';

import type { UserModel } from '@tc/db';

type UserSettingsProps = {
  user: UserModel;
};

const UserSettings = ({ user }: UserSettingsProps) => {
  return <div>{user.id}</div>;
};

export default UserSettings;
