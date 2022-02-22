import type { ReactNode } from 'react';

export interface TitledSectionProps {
  children: ReactNode;
  title: string;
  link?: {
    name: string;
    url: string;
  };
}
