'use client';

import type { UserFilterType } from '@/lib/models/user-filter-type';
import { Switch, type SwitchOnChangeData } from '@fluentui/react-components';
import { useState, type ChangeEvent, type FC } from 'react';

type UserFilterProps = {
  onChange?: (change: UserFilterType) => void;
};

const UserFilter: FC<UserFilterProps> = ({ onChange }) => {
  const [isActiveOnly, setIsActiveOnly] = useState(false);

  const handleSwitchChange = (
    _e: ChangeEvent<HTMLInputElement>,
    { checked }: SwitchOnChangeData
  ) => {
    setIsActiveOnly(checked);
    onChange?.({ isActiveOnly: checked });
  };

  return (
    <Switch
      label="Show Active Users Only"
      checked={isActiveOnly}
      onChange={handleSwitchChange}
    />
  );
};

export default UserFilter;
