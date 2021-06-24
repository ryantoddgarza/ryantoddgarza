import React from 'react';
import PropTypes from 'prop-types';
import { MdExpandMore } from 'react-icons/md';
import { NavList, NavListItem, StyledLink } from './styled';

const DesktopNav = ({ navList }) => (
  <nav>
    <NavList>
      {navList.map(({ name, url, subMenu }) => (
        <NavListItem key={name}>
          <StyledLink to={url} activeClassName="active">
            {subMenu ? `${name} ` : name}
          </StyledLink>
          {subMenu && <MdExpandMore />}
          {subMenu && subMenu.component}
        </NavListItem>
      ))}
    </NavList>
  </nav>
);

DesktopNav.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default DesktopNav;
