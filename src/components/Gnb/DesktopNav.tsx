import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { MdExpandMore } from 'react-icons/md';
import Submenu from './Submenu';
import { NavProps } from './types';

const DesktopNav: FunctionComponent<NavProps> = ({ navList }: NavProps) => {
  const getNavItemClasses = (modifiers: string[]) => {
    const classes = ['nav-item', ...modifiers];
    return classes.filter((c) => c !== '').join(' ');
  };

  return (
    <nav>
      <ul className="nav-list">
        {navList.map(({ name, url, submenu }) => (
          <li
            key={name}
            className={getNavItemClasses([
              submenu ? 'nav-item--collapsible' : '',
            ])}
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

export default DesktopNav;
