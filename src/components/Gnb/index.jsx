import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { useMatch } from '@reach/router';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import SubMenu from './SubMenu';
import {
  ALBUMS_PATH,
  EMAIL,
  HOME_PATH,
  PORTFOLIOS_PATH,
  POSTS_PATH,
} from '~/constants';
import { Gnb as StyledGnB, HeaderName, StyledLink } from './styled';

const Gnb = ({ categories, hasPost, hasPortfolio, hasAlbum }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle: title
        }
      }
    }
  `);

  const { siteTitle } = site.siteMetadata;

  const isMusic = useMatch(ALBUMS_PATH);
  const isPortfolio = useMatch(PORTFOLIOS_PATH);
  const isPost = useMatch(`${POSTS_PATH}/:page`);

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

  const mobileNavAppend = [
    {
      name: 'Contact',
      url: `mailto:${EMAIL}`,
    },
  ];

  const mobileNavList = [...mainNav, ...mobileNavAppend];
  const desktopNavList = [...mainNav];

  return (
    <StyledGnB>
      <HeaderName>
        <StyledLink to={HOME_PATH}>{siteTitle}</StyledLink>
      </HeaderName>
      <MobileNav navList={mobileNavList} />
      <DesktopNav navList={desktopNavList} />
    </StyledGnB>
  );
};

Gnb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  hasPost: PropTypes.bool.isRequired,
  hasPortfolio: PropTypes.bool.isRequired,
  hasAlbum: PropTypes.bool.isRequired,
};

Gnb.defaultProps = {
  categories: [],
};

export default Gnb;
