import React, { useReducer, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Hamburger,
  MovableCaretDown,
  NavList,
  NavListItem,
  StyledLink,
  Background,
  MobileMenus,
  MobileMenu,
} from './styled';

const TOGGLE_MENU = 'TOGGLE_MENU';
const TOGGLE_SUB_MENU = 'TOGGLE_SUB_MENU';

const initialState = {
  isMenuOpen: false,
  isSubmenuOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      const isMenuOpen = !state.isMenuOpen;

      return {
        ...state,
        isMenuOpen,
      };
    }
    case TOGGLE_SUB_MENU: {
      const isSubmenuOpen = !state.isSubmenuOpen;

      return {
        ...state,
        isSubmenuOpen,
      };
    }
    default:
      return state;
  }
};

const MobileNav = ({ navList }) => {
  const [{ isMenuOpen, isSubmenuOpen }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const toggleMenu = useCallback(() => {
    dispatch({ type: TOGGLE_MENU });
  }, []);
  const toggleSubmenu = useCallback(() => {
    dispatch({ type: TOGGLE_SUB_MENU });
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      global.document.body.style.overflow = 'hidden';
    } else {
      global.document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen]);

  return (
    <>
      <MobileMenu isActive={isMenuOpen} isSubActive={isSubmenuOpen}>
        <Background onClick={toggleMenu} isActive={isMenuOpen} />
        <MobileMenus>
          <nav>
            <NavList>
              {navList.map(({ name, url, isActive, subMenu }) => (
                <NavListItem key={name}>
                  <StyledLink to={url} className={isActive && 'active'}>
                    {subMenu ? `${name} ` : name}
                  </StyledLink>
                  {subMenu && (
                    <MovableCaretDown
                      className={isSubmenuOpen && 'is-open'}
                      onClick={toggleSubmenu}
                    />
                  )}
                  {subMenu && subMenu.component}
                </NavListItem>
              ))}
            </NavList>
          </nav>
        </MobileMenus>
      </MobileMenu>
      <Hamburger
        className={`hamburger ${isMenuOpen && 'is-open'}`}
        onClick={toggleMenu}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </Hamburger>
    </>
  );
};

MobileNav.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MobileNav;
