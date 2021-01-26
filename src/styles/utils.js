import { layout } from './theme';

const {
  base: { fontSize: baseFontSize, unit: baseUnit },
} = layout;

export const rem = (px) => `${px / baseFontSize}rem`;
export const unit = (n) => n * baseUnit;
