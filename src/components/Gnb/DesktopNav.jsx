import React from 'react';
import PropTypes from 'prop-types';
import { FaCaretDown } from 'react-icons/fa';
import { TITLE } from '~/constants';
import { List, ListMenu, Home, StyledLink } from './styled';

const DesktopNav = ({ navLists: { mainNav } }) => (
  <List>
    <ListMenu>
      <StyledLink to="/">
        <Home>{TITLE}</Home>
      </StyledLink>
    </ListMenu>
    {mainNav.map(({ name, url, isActive, subMenu }) => {
      if (subMenu) {
        return (
          <ListMenu key={name}>
            <StyledLink to={url} className={isActive ? 'active' : ''}>
              {`${name} `}
              {subMenu.list.length > 0 ? <FaCaretDown /> : null}
            </StyledLink>
            {subMenu.component}
          </ListMenu>
        );
      }

      return (
        <ListMenu key={name}>
          <StyledLink to={url} className={isActive ? 'active' : ''}>
            {name}
          </StyledLink>
        </ListMenu>
      );
    })}
  </List>
);

DesktopNav.propTypes = {
  navLists: PropTypes.shape({
    mainNav: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default DesktopNav;
