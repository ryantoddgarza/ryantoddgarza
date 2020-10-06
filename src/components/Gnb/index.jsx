import React, { useReducer, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FaCaretDown } from 'react-icons/fa';
import { TITLE, EMAIL } from '~/constants';
import {
  Hamburger,
  MovableFaCaretDown,
  GnbWrapperOuter,
  GnbWrapperInner,
  List,
  SubMenu,
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

const Gnb = ({ location, categories, hasPortfolio }) => {
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

  const { pathname } = location;
  const isPortfolio = pathname.replace(/\/$/, '').startsWith('/portfolios');
  const isHome = pathname.replace(/\/$/, '') === '';
  const isMusic = pathname.replace(/\/$/, '') === '/albums';
  const isPost = !(isPortfolio || isHome || isMusic);

  return (
    <GnbWrapperOuter>
      <GnbWrapperInner>
        <MobileMenu isActive={isMenuOpened} isSubActive={isSubMenuClosed}>
          <Background onClick={toggleMenu} isActive={isMenuOpened} />
          <MobileMenus>
            <ul>
              <ListMenu>
                <StyledLink to="/" onClick={toggleMenu}>
                  <Home>{TITLE}</Home>
                </StyledLink>
              </ListMenu>
              <ListMenu>
                <StyledLink
                  to="/pages/1"
                  className={isPost ? 'active' : ''}
                  onClick={toggleMenu}
                >
                  Posts
                </StyledLink>
                {categories.length > 0 ? (
                  <>
                    &nbsp;
                    <MovableFaCaretDown
                      className={isSubMenuClosed ? 'is-active' : ''}
                      onClick={toggleSubMenu}
                    />
                  </>
                ) : null}
                <SubMenu>
                  <div>
                    {categories.map(({ key, length }) => {
                      if (key === '__ALL__') {
                        return null;
                      }

                      return (
                        <li key={key}>
                          <Link
                            to={`/categories/${key}/1`}
                            onClick={toggleMenu}
                          >
                            {key}
                            &nbsp;
                            <small>{`(${length})`}</small>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </SubMenu>
              </ListMenu>
              {hasPortfolio ? (
                <ListMenu>
                  <StyledLink
                    to="/portfolios"
                    className={isPortfolio ? 'active' : ''}
                    onClick={toggleMenu}
                  >
                    Portfolio
                  </StyledLink>
                </ListMenu>
              ) : null}
              <ListMenu>
                <StyledLink
                  to="/albums"
                  className={isMusic ? 'active' : ''}
                  onClick={toggleMenu}
                >
                  Music
                </StyledLink>
              </ListMenu>
              <ListMenu>
                <StyledLink href={`mailto:${EMAIL}`}>
                  Contact
                </StyledLink>
              </ListMenu>
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
        <List>
          <ListMenu>
            <StyledLink to="/">
              <Home>{TITLE}</Home>
            </StyledLink>
          </ListMenu>
          <ListMenu>
            <StyledLink to="/pages/1" className={isPost ? 'active' : ''}>
              Posts &nbsp;
              {categories.length > 0 ? <FaCaretDown /> : null}
            </StyledLink>
            <SubMenu>
              <div>
                {categories.map(({ key, length }) => {
                  if (key === '__ALL__') {
                    return null;
                  }

                  return (
                    <li key={key}>
                      <Link to={`/categories/${key}/1`}>
                        {key}
                        &nbsp;
                        <small>{`(${length})`}</small>
                      </Link>
                    </li>
                  );
                })}
              </div>
            </SubMenu>
          </ListMenu>
          {hasPortfolio ? (
            <ListMenu>
              <StyledLink
                to="/portfolios"
                className={isPortfolio ? 'active' : ''}
              >
                Portfolio
              </StyledLink>
            </ListMenu>
          ) : null}
          <ListMenu>
            <StyledLink to="/albums" className={isMusic ? 'active' : ''}>
              Music
            </StyledLink>
          </ListMenu>
          <ListMenu>
            <StyledLink href={`mailto:${EMAIL}`}>
              Contact
            </StyledLink>
          </ListMenu>
        </List>
      </GnbWrapperInner>
    </GnbWrapperOuter>
  );
};

Gnb.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  hasPortfolio: PropTypes.bool.isRequired,
};

Gnb.defaultProps = {
  categories: [],
};

export default Gnb;
