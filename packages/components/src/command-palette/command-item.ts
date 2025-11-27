import type { FluentIcon } from '@fluentui/react-icons';

export type CommandItem = {
  key: string;
  label: string;
  href: string;
  filledIcon: FluentIcon;
  regularIcon: FluentIcon;
  // Icon: ReturnType<typeof bundleIcon>;
  // icon: ComponentType<SVGProps<SVGSVGElement>>;
};
