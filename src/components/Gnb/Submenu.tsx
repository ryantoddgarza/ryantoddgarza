import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { CATEGORIES_PATH } from '../../constants';
import titleCase from '../../utils/titleCase';
import type { SubmenuProps } from './types';

const Submenu: FunctionComponent<SubmenuProps> = ({
  listItems,
  expanded,
}: SubmenuProps) => {
  const getSubmenuClasses = () => {
    const submenuClasses = ['submenu', expanded && 'expanded'];
    return submenuClasses.join(' ');
  };

  return (
    <div className={getSubmenuClasses()}>
      {listItems.map(({ key }) => {
        if (key === '__ALL__') {
          return null;
        }

        return (
          <div className="submenu-item" key={key}>
            <Link className="nav-link" to={`${CATEGORIES_PATH}/${key}`}>
              {titleCase(key)}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

Submenu.defaultProps = {
  expanded: false,
};

export default Submenu;
