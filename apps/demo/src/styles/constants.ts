import type { BrandVariants } from '@fluentui/react-components';

const brandPalette: BrandVariants = {
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
} as const;

export const color = {
  berry: {
    background3: 'hsla(307, 55%, 49%, 1.00)',
  },
  brand: {
    foreground0: 'hsla(270, 51%, 32%, 1.00)',
    palette: brandPalette,
  },
  neutral: {
    background1: '#0a0a0a',
  },
  secondary: {
    foreground1: 'hsla(216, 100%, 58%, 1.00)',
    foreground2: 'hsla(216, 80%, 48%, 1.00)',
  },
};

export const layout = {
  blockSize: '80px',
};
