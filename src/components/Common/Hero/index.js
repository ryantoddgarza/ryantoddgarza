import React from 'react';
import PropTypes from 'prop-types';
import { HeroWrapperOuter, HeroWrapperInner } from './styled';

const Hero = ({
  isTop,
  children,
}) => (
  <HeroWrapperOuter isTop={isTop}>
    <HeroWrapperInner>
      {children}
    </HeroWrapperInner>
  </HeroWrapperOuter>
);

Hero.propTypes = {
  isTop: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
  ]),
};

Hero.defaultProps = {
  isTop: false,
  children: null,
};

export default Hero;
