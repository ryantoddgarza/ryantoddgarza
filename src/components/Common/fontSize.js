export const fontSizeFluid = (size, num = 2, den = 320) =>
  `calc(${size - num}px + ${(num * 100) / den}vw)`;
