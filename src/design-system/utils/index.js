export const px = (value) => `${value}px`;

export const rem = (px, baseFontSize = 16) => `${px / baseFontSize}rem`;

export const units = (mult, unit = 8) => rem(unit * mult);
