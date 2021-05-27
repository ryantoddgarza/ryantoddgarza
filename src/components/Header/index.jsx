import React from 'react';
import PropTypes from 'prop-types';
import { Header as StyledHeader } from './styled';

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: undefined,
};

export default Header;
