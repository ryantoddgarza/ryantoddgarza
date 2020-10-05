import styled from 'styled-components';
import { breakpoint } from '~/components/Common/breakpoints';
import { fontSizeFluid } from '~/components/Common/fontSize';
import { PRIMARY_COLOR } from '~/components/Common/constants';

const PortfolioCard = styled.section`
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
    }

    h4 {
      font-size: 2.2vw;
    }

    h6::after {
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
    transition: all 0.4s ease 0s;
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: calc(288px + 10vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    color: #fff;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    ${breakpoint('from-mobile-lg')} {
      top: 20%;
      padding: 0 16px;
    }
  }

  p {
    font-size: 0.875rem;
    line-height: 1.4;
    margin-bottom: 1em;
    ${breakpoint('tablet')} {
      display: none;
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

  h6 {
    font-size: ${fontSizeFluid(20)};

    &::after {
      display: block;
      content: '';
      width: 32px;
      height: 2px;
      margin: 1em 0;
      background-color: #adadad;
      transition: width 0.6s, background-color 0.2s;
    }
  }

  h4 {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 80%;
    height: 2em;
    line-height: 2em;
    font-size: 2vw;
    text-align: center;
    transition: all 0.4s ease 0s;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default PortfolioCard;
