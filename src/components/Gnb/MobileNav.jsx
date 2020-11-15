import React, { useReducer, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TITLE } from '~/constants';
import {
  Hamburger,
  MovableFaCaretDown,
  ListMenu,
  Home,
  StyledLink,
  Background,
  MobileMenus,
  MobileMenu,
} from './styled';

const TOGGLE_MENU = 'TOGGLE_MENU';
const TOGGLE_SUB_MENU = 'TOGGLE_SUB_MENU';

const initialState = {
  isMenuOpened: false,
  isSubMenuClosed: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU: {
      const isMenuOpened = !state.isMenuOpened;

      return {
        ...state,
        isMenuOpened,
      };
    }
    case TOGGLE_SUB_MENU: {
      const isSubMenuClosed = !state.isSubMenuClosed;

      return {
        ...state,
        isSubMenuClosed,
      };
    }
    default:
      return state;
  }
};

const MobileNav = ({ navLists }) => {
  const catNavList = Object.values(navLists).flat();
  const [{ isMenuOpened, isSubMenuClosed }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const toggleMenu = useCallback(() => {
    dispatch({ type: TOGGLE_MENU });
  }, []);
  const toggleSubMenu = useCallback(() => {
    dispatch({ type: TOGGLE_SUB_MENU });
  }, []);
  useEffect(() => {
    if (isMenuOpened) {
      global.document.body.style.overflow = 'hidden';
    } else {
      global.document.body.style.overflow = 'visible';
    }
  }, [isMenuOpened]);

  return (
    <>
      <MobileMenu isActive={isMenuOpened} isSubActive={isSubMenuClosed}>
        <Background onClick={toggleMenu} isActive={isMenuOpened} />
        <MobileMenus>
          <ul>
            <ListMenu>
              <StyledLink to="/" onClick={toggleMenu}>
                <Home>{TITLE}</Home>
              </StyledLink>
            </ListMenu>
            {catNavList.map(({ name, url, isActive, subMenu }) => {
              if (subMenu) {
                return (
                  <ListMenu key={name}>
                    <StyledLink
                      to={url}
                      className={isActive ? 'active' : ''}
                      onClick={toggleSubMenu}
                    >
                      {`${name} `}
                    </StyledLink>
                    {subMenu.list.length > 0 ? (
                      <MovableFaCaretDown
                        className={isSubMenuClosed ? 'is-active' : ''}
                        onClick={toggleSubMenu}
                      />
                    ) : null}
                    {subMenu.component}
                  </ListMenu>
                );
              }

              return (
                <ListMenu key={name}>
                  <StyledLink
                    to={url}
                    className={isActive ? 'active' : ''}
                    onClick={toggleSubMenu}
                  >
                    {name}
                  </StyledLink>
                </ListMenu>
              );
            })}
          </ul>
        </MobileMenus>
      </MobileMenu>
      <Hamburger
        className={`hamburger hamburger--spin js-hamburger ${
          isMenuOpened ? 'is-active' : ''
        }`}
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
  navLists: PropTypes.shape({}).isRequired,
};

export default MobileNav;
