import React from 'react';
import type { FunctionComponent } from 'react';
import {
  ABOUT_PATH,
  CODE_PATH,
  CONTACT_PATH,
  MUSIC_PATH,
  POSTS_PATH,
} from '../../constants';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import type { GnbProps, NavItem } from './types';

const Gnb: FunctionComponent<GnbProps> = ({
  categories,
  hasPost,
  hasAlbum,
}: GnbProps) => {
  const NavigationItem = ({ name, url, submenu }: NavItem) => {
    return {
      name,
      url,
      submenu,
    };
  };

  const posts = NavigationItem({
    name: 'Posts',
    url: POSTS_PATH,
    submenu: { list: categories },
  });
  const music = NavigationItem({ name: 'Music', url: MUSIC_PATH });
  const code = NavigationItem({ name: 'Code', url: CODE_PATH });
  const about = NavigationItem({ name: 'About', url: ABOUT_PATH });
  const contact = NavigationItem({ name: 'Contact', url: CONTACT_PATH });

  const mainNav: NavItem[] = [hasPost && posts, code, hasAlbum && music, about];
  const mobileNavAppend: NavItem[] = [contact];

  const mobileNavList = [...mainNav, ...mobileNavAppend];
  const desktopNavList = [...mainNav];

  return (
    <>
      <MobileNav navList={mobileNavList} />
      <DesktopNav navList={desktopNavList} />
    </>
  );
};

Gnb.defaultProps = {
  categories: [],
};

export default Gnb;
