import {
  createDarkTheme,
  createLightTheme,
  tokens as fluentuiTokens,
  type Theme,
} from '@fluentui/react-components';
import { color, layout } from '@/styles/constants';

type AppTheme = Theme & {
  layoutBlockSize: string;
  colorBrandForeground0: string;
  colorSecondaryForeground1: string;
  colorSecondaryForeground2: string;
  colorSecondaryForegroundGradient: string;
};

const lightTheme: AppTheme = {
  ...createLightTheme(color.brand.palette),
  layoutBlockSize: layout.blockSize,
  colorBrandForeground0: color.brand.foreground0,
  colorSecondaryForeground1: color.secondary.foreground1,
  colorSecondaryForeground2: color.secondary.foreground2,
  colorSecondaryForegroundGradient: `
      linear-gradient(to top left, var(--mui-palette-primary-main), var(--mui-palette-primary-dark));
  `,
};

const darkTheme: AppTheme = {
  ...createDarkTheme(color.brand.palette),
  layoutBlockSize: layout.blockSize,
  colorNeutralBackground1: color.neutral.background1,
  colorBrandForeground0: color.brand.foreground0,
  colorSecondaryForeground1: color.secondary.foreground1,
  colorSecondaryForeground2: color.secondary.foreground2,
  colorSecondaryForegroundGradient: `
      linear-gradient(to top left, var(--mui-palette-primary-main), var(--mui-palette-primary-dark));
  `,
};

darkTheme.colorBrandForeground1 = color.brand.palette[80];
darkTheme.colorBrandForeground2 = color.brand.palette[90];

const tokens: Record<keyof AppTheme, string> = {
  ...fluentuiTokens,
  layoutBlockSize: `var(--layoutBlockSize)`,
  colorBrandForeground0: `var(--colorBrandForeground0)`,
  colorSecondaryForeground1: `var(--colorSecondaryForeground1)`,
  colorSecondaryForeground2: `var(--colorSecondaryForeground2)`,
  colorSecondaryForegroundGradient: `var(--colorSecondaryForegroundGradient)`,
};

export { darkTheme, lightTheme, tokens };
