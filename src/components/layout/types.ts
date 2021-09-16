import type { ReactNode } from 'react';

export interface Category {
  key: string;
  length: number;
}

export interface LayoutProps {
  children: ReactNode;
}
