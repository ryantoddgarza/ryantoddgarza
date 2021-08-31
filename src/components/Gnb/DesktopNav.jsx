import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { MdExpandMore } from 'react-icons/md';
import Submenu from './Submenu';

const DesktopNav = ({ navList }) => {
  const getNavItemClasses = (modifiers = null) => {
    const navItemClasses = ['nav-item', ...modifiers];
    return navItemClasses.join(' ');
  };

  return (
    <nav>
      <ul className="nav-list">
        {navList.map(({ name, url, submenu }) => (
          <li
            key={name}
            className={getNavItemClasses([submenu && 'nav-item--collapsible'])}
          >
            <Link className="nav-link" activeClassName="active" to={url}>
              {name}
            </Link>
            {submenu && (
              <>
                <MdExpandMore className="chevron" />
                <Submenu listItems={submenu.list} />
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

DesktopNav.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default DesktopNav;
