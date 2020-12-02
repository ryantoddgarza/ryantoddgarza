import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { NavMenu, NavMenuItem } from './styled';

const SubMenu = ({ listItems }) => (
  <NavMenu>
    {listItems.map(({ key, length }) => {
      if (key === '__ALL__') {
        return null;
      }

      return (
        <NavMenuItem key={key}>
          <Link to={`/categories/${key}/1`}>
            {key}
            &nbsp;
            <small>{`(${length})`}</small>
          </Link>
        </NavMenuItem>
      );
    })}
  </NavMenu>
);

SubMenu.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default SubMenu;
