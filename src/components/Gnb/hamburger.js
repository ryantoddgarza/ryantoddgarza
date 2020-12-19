import { css } from 'styled-components';
import { rem, textColor } from '~/design-system';

const hb = {
  width: 28,
  weight: 3,
  gap: 8,
};

export default css`
  .hamburger {
    font: inherit;
    display: inline-block;
    overflow: visible;
    margin: 0;
    cursor: pointer;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
    text-transform: none;
    color: inherit;
    border: 0;
    background-color: transparent;
  }
  .hamburger:hover {
    opacity: 0.7;
  }
  .hamburger-box {
    position: relative;
    display: inline-block;
    width: ${rem(hb.width)};
    height: ${rem(hb.weight + hb.gap * 2)};
  }
  .hamburger-inner {
    top: 50%;
    display: block;
    margin-top: -${rem(hb.weight / 3)};
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition-duration: 0.22s;
  }
  .hamburger-inner,
  .hamburger-inner:after,
  .hamburger-inner:before {
    position: absolute;
    width: ${rem(hb.width)};
    height: ${rem(hb.weight)};
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    background-color: ${textColor.default};
  }
  .hamburger-inner:after,
  .hamburger-inner:before {
    display: block;
    content: '';
  }
  .hamburger-inner:before {
    top: -${rem(hb.gap)};
    transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
  }
  .hamburger-inner:after {
    bottom: -${rem(hb.gap)};
    transition: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .is-active .hamburger-inner {
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: rotate(225deg);
  }
  .is-active .hamburger-inner:before {
    top: 0;
    transition: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    opacity: 0;
  }
  .is-active .hamburger-inner:after {
    bottom: 0;
    transition: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
    transform: rotate(-90deg);
  }
`;
