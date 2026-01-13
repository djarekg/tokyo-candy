import { color as constantColor } from '#app/styles/constants';
import type { ComponentProps, FC } from 'react';
import type { IconProps } from './icon-props';

type FilterProps = ComponentProps<'svg'> &
  IconProps & {
    color?: string;
  };

const FilterIcon: FC<FilterProps> = ({
  className,
  size = 24,
  color = constantColor.brand.foreground0,
}) => {
  return (
    <svg
      data-icon="filter-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`app-icon app-filter-icon ${className}`}
      fill={color}
      width={`${size}px`}
      height={`${size}px`}>
      <title>Candy Lollipop</title>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"
      />
    </svg>
  );
};

export default FilterIcon;
