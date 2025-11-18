'use client';

import { signOutUser } from '@/lib/actions';
import {
  makeStyles,
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
import type { FC, PropsWithoutRef } from 'react';

type UserMenuProps = { userId: string };

const PersonIcon = bundleIcon(PersonFilled, PersonRegular);
const SettingsIcon = bundleIcon(PersonSettingsFilled, PersonSettingsRegular);
const SignOutIcon = bundleIcon(SignOutFilled, SignOutRegular);

const useStyles = makeStyles({
  menuButton: {
    outline: 'none', // Everytime a menu item is clicked, a focus ring appears around the button. this removes it
  },
});

const UserMenu: FC<PropsWithoutRef<UserMenuProps>> = ({ userId }) => {
  const classes = useStyles();

  return (
    <Menu hasIcons>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton
          className={classes.menuButton}
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
