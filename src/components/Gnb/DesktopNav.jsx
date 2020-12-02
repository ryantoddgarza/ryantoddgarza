import React from 'react';
import PropTypes from 'prop-types';
import { MdExpandMore } from 'react-icons/md';
import { NavList, NavListItem, StyledLink } from './styled';

const DesktopNav = ({ navLists }) => {
  const catNavList = Object.values(navLists).flat();

  return (
    <NavList>
      {catNavList.map(({ name, url, isActive, subMenu }) => (
        <NavListItem key={name}>
          <StyledLink to={url} className={isActive ? 'active' : ''}>
            {subMenu ? `${name} ` : name}
          </StyledLink>
          {subMenu ? <MdExpandMore /> : null}
          {subMenu ? subMenu.component : null}
        </NavListItem>
      ))}
    </NavList>
  );
};

DesktopNav.propTypes = {
  navLists: PropTypes.shape({}).isRequired,
};

export default DesktopNav;
