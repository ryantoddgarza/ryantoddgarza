import React from 'react';
import PropTypes from 'prop-types';
import {
  ABOUT_PATH,
  ALBUMS_PATH,
  CONTACT_PATH,
  POSTS_PATH,
} from '../../constants';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Gnb = ({ categories, hasPost, hasAlbum }) => {
  const mainNav = [
    hasPost && {
      name: 'Posts',
      url: `${POSTS_PATH}/1`,
      submenu: {
        list: categories,
      },
    },
    hasAlbum && {
      name: 'Music',
      url: ALBUMS_PATH,
    },
    {
      name: 'About',
      url: ABOUT_PATH,
    },
  ];

  const mobileNavAppend = [
    {
      name: 'Contact',
      url: CONTACT_PATH,
    },
  ];

  const mobileNavList = [...mainNav, ...mobileNavAppend];
  const desktopNavList = [...mainNav];

  return (
    <>
      <MobileNav navList={mobileNavList} />
      <DesktopNav navList={desktopNavList} />
    </>
  );
};

Gnb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  hasPost: PropTypes.bool.isRequired,
  hasAlbum: PropTypes.bool.isRequired,
};

Gnb.defaultProps = {
  categories: [],
};

export default Gnb;
