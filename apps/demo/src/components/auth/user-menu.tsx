'use client';

import { Button, Menu, MenuTrigger } from '@fluentui/react-components';
import { PersonRegular } from '@fluentui/react-icons';

const UserMenu = () => {
  return (
    <Menu>
      <MenuTrigger>
        <Button>
          <PersonRegular />
        </Button>
      </MenuTrigger>
    </Menu>
  );
};

export default UserMenu;
