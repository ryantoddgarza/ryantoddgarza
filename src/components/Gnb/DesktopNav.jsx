import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FaCaretDown } from 'react-icons/fa';
import { TITLE, ALBUMS_PATH, PORTFOLIOS_PATH, POSTS_PATH } from '~/constants';
import { List, SubMenu, ListMenu, Home, StyledLink } from './styled';

const DesktopNav = ({
  location: { isMusic, isPortfolio, isPost },
  categories,
  hasPortfolio,
}) => (
  <List>
    <ListMenu>
      <StyledLink to="/">
        <Home>{TITLE}</Home>
      </StyledLink>
    </ListMenu>
    <ListMenu>
      <StyledLink to={`${POSTS_PATH}/1`} className={isPost ? 'active' : ''}>
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
          to={PORTFOLIOS_PATH}
          className={isPortfolio ? 'active' : ''}
        >
          Portfolio
        </StyledLink>
      </ListMenu>
    ) : null}
    <ListMenu>
      <StyledLink to={ALBUMS_PATH} className={isMusic ? 'active' : ''}>
        Music
      </StyledLink>
    </ListMenu>
  </List>
);

DesktopNav.propTypes = {
  location: PropTypes.shape({
    isMusic: PropTypes.bool,
    isPortfolio: PropTypes.bool,
    isPost: PropTypes.bool,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  hasPortfolio: PropTypes.bool.isRequired,
};

DesktopNav.defaultProps = {
  categories: [],
};

export default DesktopNav;
