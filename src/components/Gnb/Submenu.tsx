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
  const getSubmenuClasses = (modifiers: string[]) => {
    const classes = ['submenu', ...modifiers];
    return classes.filter((c) => c !== '').join(' ');
  };

  return (
    <div className={getSubmenuClasses([expanded ? 'expanded' : ''])}>
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
