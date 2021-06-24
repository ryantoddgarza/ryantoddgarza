import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import {
  ABOUT_PATH,
  ALBUMS_PATH,
  EMAIL,
  HOME_PATH,
  PORTFOLIOS_PATH,
  POSTS_PATH,
} from '../../constants';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import SubMenu from './SubMenu';
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

  const mainNav = [];

  const constructMainNav = () => {
    const subMenus = {
      postCategories: {
        list: categories,
        component: <SubMenu listItems={categories} />,
      },
    };

    if (hasPost) {
      const postNavData = {
        name: 'Posts',
        url: `${POSTS_PATH}/1`,
        subMenu: subMenus.postCategories,
      };

      mainNav.push(postNavData);
    }

    if (hasPortfolio) {
      const portfolioNavData = {
        name: 'Portfolio',
        url: PORTFOLIOS_PATH,
      };

      mainNav.push(portfolioNavData);
    }

    if (hasAlbum) {
      const albumNavData = {
        name: 'Music',
        url: ALBUMS_PATH,
      };

      mainNav.push(albumNavData);
    }

    const aboutNavData = {
      name: 'About',
      url: ABOUT_PATH,
    };

    mainNav.push(aboutNavData);
  };

  constructMainNav();

  const mobileNavAppend = [
    {
      name: 'Contact',
      url: `mailto:${EMAIL}`,
    },
  ];

  const mobileNavList = [...mainNav, ...mobileNavAppend];
  const desktopNavList = [...mainNav];

  return (
    <StyledGnB className="container">
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
