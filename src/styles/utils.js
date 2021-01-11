import theme from './theme';

const {
  layout: {
    base: { fontSize: baseFontSize, unit: baseUnit },
  },
} = theme;

export const rem = (px) => `${px / baseFontSize}rem`;
export const unit = (n) => n * baseUnit;
