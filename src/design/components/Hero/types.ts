import type { ReactNode } from 'react';

export interface HeroProps {
  heading: string;
  copy: string;
  children?: ReactNode;
}
