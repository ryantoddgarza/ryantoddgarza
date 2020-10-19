import React from 'react';
import PropTypes from 'prop-types';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import PostCategoriesSubMenu from './PostCategoriesSubMenu';
import { ALBUMS_PATH, PORTFOLIOS_PATH, POSTS_PATH } from '~/constants';
import { GnbWrapperOuter, GnbWrapperInner } from './styled';

const Gnb = ({ location, categories, hasPortfolio }) => {
  const { pathname } = location;
  const isHome = pathname.replace(/\/$/, '') === '';
  const isMusic = pathname.replace(/\/$/, '').startsWith(ALBUMS_PATH);
  const isPortfolio = pathname.replace(/\/$/, '').startsWith(PORTFOLIOS_PATH);
  const isPost = !(isHome || isMusic || isPortfolio);

  const subMenus = {
    postCategories: {
      list: categories,
      component: <PostCategoriesSubMenu listItems={categories} />,
    },
  };

  const mainNav = [
    {
      name: 'Posts',
      url: `${POSTS_PATH}/1`,
      subMenu: subMenus.postCategories,
      isActive: isPost,
    },
    {
      name: 'Portfolio',
      url: PORTFOLIOS_PATH,
      isActive: isPortfolio,
    },
    {
      name: 'Music',
      url: ALBUMS_PATH,
      isActive: isMusic,
    },
  ];

  return (
    <GnbWrapperOuter>
      <GnbWrapperInner>
        <MobileNav
          location={{ isHome, isMusic, isPortfolio, isPost }}
          categories={categories}
          hasPortfolio={hasPortfolio}
        />
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
  hasPortfolio: PropTypes.bool.isRequired,
};

Gnb.defaultProps = {
  categories: [],
};

export default Gnb;
