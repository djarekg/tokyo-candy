import {
  BoxFilled,
  BoxRegular,
  BuildingPeopleFilled,
  BuildingPeopleRegular,
  HomeFilled,
  HomeRegular,
  PeopleFilled,
  PeopleRegular,
} from '@fluentui/react-icons';
import type { CommandItem } from '@tc/components/command-palette/index';

export const defaultItems: CommandItem[] = [
  {
    key: 'home',
    label: 'Home',
    href: '/',
    filledIcon: HomeFilled,
    regularIcon: HomeRegular,
  },
  {
    key: 'users',
    label: 'Users',
    href: '/users',
    filledIcon: PeopleFilled,
    regularIcon: PeopleRegular,
  },
  {
    key: 'customers',
    label: 'Customers',
    href: '/customers',
    filledIcon: BuildingPeopleFilled,
    regularIcon: BuildingPeopleRegular,
  },
  {
    key: 'products',
    label: 'Products',
    href: '/products',
    filledIcon: BoxFilled,
    regularIcon: BoxRegular,
  },
];
