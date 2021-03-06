import styled from 'styled-components';
import {
  backgroundColor,
  breakpoint,
  fontSizeFluid,
  primaryColor,
  space,
  textColor,
  transition,
} from '~/design-system';

export const StyledArticle = styled.article`
  display: inline-block;
  position: relative;
  float: left;
  padding: 56.25% 0 0;
  width: 100%;
  height: 0;
  background-color: ${backgroundColor.darker};
  overflow: hidden;
  ${breakpoint.from('tablet')} {
    padding: 28.125% 0 0;
    width: 50%;
  }

  &:nth-child(4n + 2),
  &:nth-child(4n + 3) {
    background-color: ${backgroundColor.light};
  }

  &:hover {
    img {
      width: 110%;
      left: -5%;
    }

    h5::after {
      width: 33%;
      background-color: ${primaryColor.default};
    }
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: auto;
    transition: all ${transition.duration.normal} ${transition.function.default};
  }

  h5 {
    font-size: ${fontSizeFluid(20)};

    &::after {
      display: block;
      content: '';
      width: 32px;
      height: 2px;
      margin: 1em 0;
      background-color: ${textColor.disabled};
      transition: width ${transition.duration.slow}
          ${transition.function.default},
        background-color ${transition.duration.normal}
          ${transition.function.default};
    }
  }
`;

export const CardBody = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  max-width: calc(288px + 10vw);
  padding: ${space.x4};
  color: ${textColor.onDark};
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.3), 0 0 32px rgba(0, 0, 0, 0.2);

  p {
    font-size: 0.875rem;
    line-height: 1.4;
  }

  em {
    display: none;
    margin: 1.5em 0 0;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    ${breakpoint.get('phone-l')} {
      display: inline-block;
    }
    ${breakpoint.from('tablet-l')} {
      display: inline-block;
    }

    &:hover {
      color: ${primaryColor.default};
    }
  }
`;
