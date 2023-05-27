import type { ReactNode } from 'react';

export interface ListProps {
  nodes: ReactNode[];
  ordered?: boolean;
  size?: string;
  theme?: string;
}
