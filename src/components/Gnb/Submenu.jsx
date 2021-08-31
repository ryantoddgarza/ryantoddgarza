import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Submenu = ({ listItems, expanded }) => {
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
            <Link className="nav-link" to={`/categories/${key}/1`}>
              {key}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

Submenu.propTypes = {
  expanded: PropTypes.bool,
  listItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Submenu.defaultProps = {
  expanded: false,
};

export default Submenu;
