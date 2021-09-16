import type { Category } from '../layout';

export interface NavItem {
  name: string;
  url: string;
  submenu?: {
    list: Category[];
  };
}

export interface GnbProps {
  categories?: Category[];
  hasPost: boolean;
  hasAlbum: boolean;
}

export interface NavProps {
  navList: NavItem[];
}

export interface SubmenuProps {
  listItems: Category[];
  expanded?: boolean;
}
