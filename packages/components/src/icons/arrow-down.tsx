import { color } from '#app/styles/constants';
import type { ComponentProps, FC } from 'react';
import type { IconProps } from './icon-props';

type ArrowDownProps = ComponentProps<'svg'> &
  IconProps & {
    fill?: string;
  };

const ArrowDownIcon: FC<ArrowDownProps> = ({
  className,
  size = 24,
  fill = color.secondary.foreground1,
}) => {
  return (
    <svg
      data-icon="arrow-down-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`app-icon app-arrow-down-icon ${className}`}
      fill="currentColor"
      width={`${size}px`}
      height={`${size}px`}>
      <title>Candy Lollipop</title>
      <path
        fill={fill}
        d="M10 17.5L3.5 11H7V3h6v8h3.5z"
      />
    </svg>
  );
};

export default ArrowDownIcon;
