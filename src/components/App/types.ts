import type { ReactNode } from 'react';
import type { Category } from '../layout';

export interface AppProps {
  children: ReactNode;
  categories: Category[];
  hasPost: boolean;
  hasAlbum: boolean;
}
