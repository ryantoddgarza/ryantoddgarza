import styled from 'styled-components';
import {
  backgroundColor,
  primaryColor,
  space,
  textColor,
} from '~/design-system';
import { breakpoint } from '~/components/Common/breakpoints';
import { fontSizeFluid } from '~/components/Common/fontSize';
import {
  DURATION_NORMAL,
  DURATION_SLOW,
  TIMING_BEZIER,
} from '~/components/Common/constants';

const PortfolioCard = styled.article`
  display: inline-block;
  position: relative;
  float: left;
  padding: 56.25% 0 0;
  width: 100%;
  height: 0;
  background-color: ${backgroundColor.darker};
  overflow: hidden;
  ${breakpoint('from-tablet')} {
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

    h3::after {
      width: 33%;
      background-color: ${primaryColor.default};
    }
  }

  a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    transition: all ${DURATION_NORMAL} ${TIMING_BEZIER};
  }

  & div {
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    max-width: calc(288px + 10vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${space.x4};
    color: ${textColor.onDark};
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

  p {
    display: none;
    font-size: 0.875rem;
    line-height: 1.4;
    margin-bottom: ${space.x4};
    ${breakpoint('mobile-lg')} {
      display: block;
    }
    ${breakpoint('tablet')} {
      display: none;
    }
    ${breakpoint('from-tablet-lg')} {
      display: block;
    }
  }

  em {
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;

    &:hover {
      color: ${primaryColor.default};
    }
  }

  h3 {
    font-size: ${fontSizeFluid(20)};

    &::after {
      display: block;
      content: '';
      width: 32px;
      height: 2px;
      margin: 1em 0;
      background-color: ${textColor.disabled};
      transition: width ${DURATION_SLOW} ${TIMING_BEZIER},
        background-color ${DURATION_NORMAL} ${TIMING_BEZIER};
    }
  }
`;

export default PortfolioCard;
