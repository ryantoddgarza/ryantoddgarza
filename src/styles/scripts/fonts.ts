import { Inter } from 'next/font/google';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const globalFontVariables: string[] = [sans.variable];
