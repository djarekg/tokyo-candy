'use client';

import {
  Button,
  Menu,
  MenuItemLink,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from '@fluentui/react-components';
import {
  bundleIcon,
  PersonCircleFilled,
  PersonCircleRegular,
  PersonSettingsFilled,
  PersonSettingsRegular,
  SignOutFilled,
  SignOutRegular,
} from '@fluentui/react-icons';
import type { ComponentProps, FC } from 'react';

const PersonIcon = bundleIcon(PersonCircleFilled, PersonCircleRegular);
const SettingsIcon = bundleIcon(PersonSettingsFilled, PersonSettingsRegular);
const SignOutIcon = bundleIcon(SignOutFilled, SignOutRegular);

const ProfileMenu: FC<ComponentProps<'menu'>> = () => {
  return (
    <Menu hasIcons>
      <MenuTrigger disableButtonEnhancement>
        <Button
          appearance="transparent"
          size="large"
          icon={<PersonIcon />}
        />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItemLink
            href={`/users/${userId}`}
            icon={<SettingsIcon />}>
            Profile
          </MenuItemLink>
          <MenuItemLink
            href="'/signout'"
            icon={<SignOutIcon />}>
            Logout
          </MenuItemLink>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export default ProfileMenu;
