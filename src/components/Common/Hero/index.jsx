import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children }) => <div>{children}</div>;

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
};

Hero.defaultProps = {
  children: undefined,
};

export default Hero;
