import styled from 'styled-components';
import { breakpoint } from '~/components/Common/breakpoints';
import { fontSizeFluid } from '~/components/Common/fontSize';
import {
  PRIMARY_COLOR,
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
  background-color: #eee;
  overflow: hidden;
  ${breakpoint('from-tablet')} {
    padding: 28.125% 0 0;
    width: 50%;
  }

  &:nth-child(4n + 2),
  &:nth-child(4n + 3) {
    background-color: #fff;
  }

  &:hover {
    img {
      width: 110%;
      left: -5%;
    }

    h4 {
      font-size: 2.2vw;
    }

    h3::after {
      width: 33%;
      background-color: ${PRIMARY_COLOR};
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
    padding: 16px;
    color: #fff;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

  p {
    display: none;
    font-size: 0.875rem;
    line-height: 1.4;
    margin-bottom: 1em;
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
      color: ${PRIMARY_COLOR};
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
      background-color: #adadad;
      transition: width ${DURATION_SLOW} ${TIMING_BEZIER},
        background-color ${DURATION_NORMAL} ${TIMING_BEZIER};
    }
  }
`;

export default PortfolioCard;
