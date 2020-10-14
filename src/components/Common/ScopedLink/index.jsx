import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const ScopedLink = ({ children, to }) => {
  const isExternal = to.includes('//');

  return isExternal ? (
    <a href={to} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  ) : (
    <GatsbyLink to={to}>{children}</GatsbyLink>
  );
};

ScopedLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default ScopedLink;
