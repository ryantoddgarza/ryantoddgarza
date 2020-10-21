import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { SubMenu } from './styled';

const PostCategoriesSubMenu = ({ listItems }) => (
  <SubMenu>
    <div>
      {listItems.map(({ key, length }) => {
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
);

PostCategoriesSubMenu.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PostCategoriesSubMenu;
