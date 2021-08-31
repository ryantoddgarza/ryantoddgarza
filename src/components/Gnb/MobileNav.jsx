import React, { Fragment, useReducer, useCallback, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { MdExpandMore } from 'react-icons/md';
import Submenu from './Submenu';

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

  const hideBodyOverflow = (test) => {
    global.document.body.style.overflow = test ? 'hidden' : 'visible';
  };

  useEffect(() => {
    hideBodyOverflow(isMenuOpen);
  }, [isMenuOpen]);

  const getMenuStateClasses = () => {
    const menuStateClasses = [isMenuOpen ? 'is-open' : 'is-closed'];
    return menuStateClasses.join(' ');
  };

  const getNavItemClasses = (modifiers = null) => {
    const navItemClasses = ['nav-item', ...modifiers];
    return navItemClasses.join(' ');
  };

  const getExpandIconClasses = (expanded = false) => {
    const expandIconClasses = ['chevron', expanded && 'expanded'];
    return expandIconClasses.join(' ');
  };

  return (
    <>
      <div className={['mobile-menu', getMenuStateClasses()].join(' ')}>
        <div
          className="background-overlay"
          onClick={toggleMenu}
          aria-hidden="true"
        />
        <div className="content">
          <nav>
            <ul className="nav-list">
              {navList.map(({ name, url, submenu }) => (
                <Fragment key={name}>
                  <li
                    key={name}
                    className={getNavItemClasses([
                      submenu && 'nav-item--collapsible',
                    ])}
                  >
                    <Link
                      className="nav-link"
                      activeClassName="active"
                      to={url}
                    >
                      {name}
                    </Link>
                    {submenu && (
                      <MdExpandMore
                        className={getExpandIconClasses(isSubmenuOpen)}
                        onClick={toggleSubmenu}
                      />
                    )}
                  </li>
                  {submenu && (
                    <Submenu
                      listItems={submenu.list}
                      expanded={isSubmenuOpen}
                    />
                  )}
                </Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <button
        className={['menu-toggle', getMenuStateClasses()].join(' ')}
        onClick={toggleMenu}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </button>
    </>
  );
};

MobileNav.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MobileNav;
