import React, { Fragment, useReducer, useCallback, useEffect } from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { MdExpandMore } from 'react-icons/md';
import Submenu from './Submenu';
import { NavProps } from './types';

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

const MobileNav: FunctionComponent<NavProps> = ({ navList }: NavProps) => {
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

  const hideBodyOverflow = (test: boolean) => {
    global.document.body.style.overflow = test ? 'hidden' : 'visible';
  };

  useEffect(() => {
    hideBodyOverflow(isMenuOpen);
  }, [isMenuOpen]);

  const getMenuStateClasses = () => {
    const classes = [isMenuOpen ? 'is-open' : 'is-closed'];
    return classes.join(' ');
  };

  const getNavItemClasses = (modifiers = []) => {
    const classes = ['nav-item', ...modifiers];
    return classes.join(' ');
  };

  const getExpandIconClasses = (expanded = false) => {
    const classes = ['chevron'];

    if (expanded) {
      classes.push('expanded');
    }

    return classes.join(' ');
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

export default MobileNav;
