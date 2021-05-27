import React from 'react';
import PropTypes from 'prop-types';
import { HeroWrapperOuter, HeroWrapperInner } from './styled';

const Hero = ({ children }) => (
  <HeroWrapperOuter>
    <HeroWrapperInner>{children}</HeroWrapperInner>
  </HeroWrapperOuter>
);

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
};

Hero.defaultProps = {
  children: null,
};

export default Hero;
