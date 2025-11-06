import {
  type BrandVariants,
  createDarkTheme,
  createLightTheme,
  tokens as fluentuiTokens,
  type Theme,
} from '@fluentui/react-components';

const tokyocandy: BrandVariants = {
  // 10: '#040107',
  // 20: '#1D102F',
  // 30: '#2E1656',
  // 40: '#3C1A78',
  // 50: '#4A1E9C',
  // 60: '#5921C0',
  // 70: '#6935C6',
  // 80: '#7846CB',
  // 90: '#8757D1',
  // 100: '#9568D6',
  // 110: '#A279DB',
  // 120: '#AF8AE0',
  // 130: '#BB9BE5',
  // 140: '#C8ACEA',
  // 150: '#D4BEEF',
  // 160: '#E0CFF4',
  10: '#020206',
  20: '#131628',
  30: '#1A2348',
  40: '#1D2E62',
  50: '#203A7F',
  60: '#20469C',
  70: '#1D52BA',
  80: '#175FD9',
  90: '#056BF9',
  100: '#4279FF',
  110: '#6487FF',
  120: '#7F96FF',
  130: '#96A5FF',
  140: '#AAB5FF',
  150: '#BEC5FF',
  160: '#D1D5FF',
};

type AppTheme = Theme & {
  layoutBlockSize: string;
  colorBrandForeground0: string;
  colorSecondaryForeground1: string;
  colorSecondaryForeground2: string;
  colorSecondaryForegroundGradient: string;
};

const lightTheme: AppTheme = {
  ...createLightTheme(tokyocandy),
  layoutBlockSize: '80px',
  colorBrandForeground0: 'hsla(270, 51%, 32%, 1.00)',
  colorSecondaryForeground1: 'hsla(216, 100%, 58%, 1.00)',
  colorSecondaryForeground2: 'hsla(216, 80%, 48%, 1.00)',
  colorSecondaryForegroundGradient: `
      linear-gradient(to top left, var(--mui-palette-primary-main), var(--mui-palette-primary-dark));
  `,
};

const darkTheme: AppTheme = {
  ...createDarkTheme(tokyocandy),
  layoutBlockSize: '80px',
  colorNeutralBackground1: '#0a0a0a',
  colorBrandForeground0: 'hsla(270, 51%, 32%, 1.00)',
  colorSecondaryForeground1: 'hsla(216, 100%, 58%, 1.00)',
  colorSecondaryForeground2: 'hsla(216, 80%, 48%, 1.00)',
  colorSecondaryForegroundGradient: `
      linear-gradient(to top left, var(--mui-palette-primary-main), var(--mui-palette-primary-dark));
  `,
};

darkTheme.colorBrandForeground1 = tokyocandy[80];
darkTheme.colorBrandForeground2 = tokyocandy[90];

const tokens: Record<keyof AppTheme, string> = {
  ...fluentuiTokens,
  layoutBlockSize: `var(--layoutBlockSize)`,
  colorBrandForeground0: `var(--colorBrandForeground0)`,
  colorSecondaryForeground1: `var(--colorSecondaryForeground1)`,
  colorSecondaryForeground2: `var(--colorSecondaryForeground2)`,
  colorSecondaryForegroundGradient: `var(--colorSecondaryForegroundGradient)`,
};

export { darkTheme, lightTheme, tokens };
