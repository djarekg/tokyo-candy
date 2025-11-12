'use client';

import { signOutUser } from '@/lib/actions';
import {
  Menu,
  MenuButton,
  MenuItemLink,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from '@fluentui/react-components';
import {
  bundleIcon,
  PersonFilled,
  PersonRegular,
  PersonSettingsFilled,
  PersonSettingsRegular,
  SignOutFilled,
  SignOutRegular,
} from '@fluentui/react-icons';
import type { ComponentProps, FC } from 'react';

type UserMenuProps = { userId: string } & ComponentProps<'menu'>;

const PersonIcon = bundleIcon(PersonFilled, PersonRegular);
const SettingsIcon = bundleIcon(PersonSettingsFilled, PersonSettingsRegular);
const SignOutIcon = bundleIcon(SignOutFilled, SignOutRegular);

const UserMenu: FC<UserMenuProps> = ({ userId }) => {
  return (
    <Menu hasIcons>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton
          appearance="transparent"
          size="large"
          autoFocus={false}
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
            href="#"
            icon={<SignOutIcon />}
            onClick={() => signOutUser()}>
            Logout
          </MenuItemLink>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export default UserMenu;
