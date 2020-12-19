import React from 'react';
import PropTypes from 'prop-types';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import SubMenu from './SubMenu';
import {
  ALBUMS_PATH,
  EMAIL,
  HOME_PATH,
  PORTFOLIOS_PATH,
  POSTS_PATH,
  TITLE,
} from '~/constants';
import { GnbWrapperOuter, GnbWrapperInner, HeaderName, StyledLink } from './styled';

const Gnb = ({ location, categories, hasPost, hasPortfolio, hasAlbum }) => {
  const { pathname } = location;
  const isMusic = pathname.replace(/\/$/, '').startsWith(ALBUMS_PATH);
  const isPortfolio = pathname.replace(/\/$/, '').startsWith(PORTFOLIOS_PATH);
  const isPost = pathname.replace(/\/$/, '').startsWith(POSTS_PATH);

  const subMenus = {
    postCategories: {
      list: categories,
      component: <SubMenu listItems={categories} />,
    },
  };

  const mainNav = [];

  if (hasPost) {
    const postNavData = {
      name: 'Posts',
      url: `${POSTS_PATH}/1`,
      subMenu: subMenus.postCategories,
      isActive: isPost,
    };

    mainNav.push(postNavData);
  }

  if (hasPortfolio) {
    const portfolioNavData = {
      name: 'Portfolio',
      url: PORTFOLIOS_PATH,
      isActive: isPortfolio,
    };

    mainNav.push(portfolioNavData);
  }

  if (hasAlbum) {
    const albumNavData = {
      name: 'Music',
      url: ALBUMS_PATH,
      isActive: isMusic,
    };

    mainNav.push(albumNavData);
  }

  const mobileAppendNav = [
    {
      name: 'Contact',
      url: `mailto:${EMAIL}`,
    },
  ];

  return (
    <GnbWrapperOuter>
      <GnbWrapperInner>
        <HeaderName>
          <StyledLink to={HOME_PATH}>{TITLE}</StyledLink>
        </HeaderName>
        <MobileNav navLists={{ mainNav, mobileAppendNav }} />
        <DesktopNav navLists={{ mainNav }} />
      </GnbWrapperInner>
    </GnbWrapperOuter>
  );
};

Gnb.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  hasPost: PropTypes.bool.isRequired,
  hasPortfolio: PropTypes.bool.isRequired,
  hasAlbum: PropTypes.bool.isRequired,
};

Gnb.defaultProps = {
  categories: [],
};

export default Gnb;
