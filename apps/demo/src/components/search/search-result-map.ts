import { SearchResultType } from '@/types/search-result-type';
import {
  BoxFilled,
  BoxRegular,
  BuildingPeopleFilled,
  BuildingPeopleRegular,
  type bundleIcon,
  ContactCardFilled,
  ContactCardRegular,
  PersonFilled,
  PersonRegular,
} from '@fluentui/react-icons';

export const searchResultMap: Record<
  SearchResultType,
  {
    href: string;
    filledIcon: ReturnType<typeof bundleIcon>;
    regularIcon: ReturnType<typeof bundleIcon>;
  }
> = {
  [SearchResultType.user]: {
    href: '/users',
    filledIcon: PersonFilled,
    regularIcon: PersonRegular,
  },
  [SearchResultType.customer]: {
    href: '/customers',
    filledIcon: BuildingPeopleFilled,
    regularIcon: BuildingPeopleRegular,
  },
  [SearchResultType.customerContact]: {
    href: '/customer-contacts',
    filledIcon: ContactCardFilled,
    regularIcon: ContactCardRegular,
  },
  [SearchResultType.product]: {
    href: '/products',
    filledIcon: BoxFilled,
    regularIcon: BoxRegular,
  },
};
