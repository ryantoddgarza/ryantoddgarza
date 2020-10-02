import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaCaretDown } from 'react-icons/fa';
import { Container } from '~/components/Common/Container';
import { PRIMARY_COLOR } from '~/components/Common/constants';
import hamburger from './hamburger';

export const Hamburger = styled.div`
  position: absolute;
  display: none;
  right: 0;
  z-index: 5000;

  @media (max-width: 414px) {
    display: block;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }

  & > div {
    float: left;
  }
`;

export const MovableFaCaretDown = styled(FaCaretDown)`
  transition: transform 0.4s ease-out 0.1s;
  transform: rotate(180deg);

  &.is-active {
    transform: rotate(0deg);
  }
`;

export const GnbWrapperOuter = styled.div`
  position: fixed;
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  z-index: 3000;
`;

export const GnbWrapperInner = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;

  @media (max-width: 414px) {
    height: 60px;

    ${hamburger}
  }
`;

export const List = styled.ul`
  @media (max-width: 414px) {
    display: none;
  }
`;

export const SubMenu = styled.ul`
  position: absolute;
  top: 40px;
  line-height: 1.8em;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  font-size: 13px;
  font-weight: 400;
  overflow: hidden;
  transition: max-height 0.4s ease-out 0.1s;

  li {
    padding: 6px 12px;
  }

  a:hover {
    color: ${PRIMARY_COLOR};
  }
`;

export const ListMenu = styled.li`
  display: inline-block;
  position: relative;
  padding-right: 2em;
  font-weight: 400;

  @media (max-width: 414px) {
    display: none;
  }

  a {
    color: ${({ theme: { color } }) => color};
  }

  ul {
    max-height: 0;
    white-space: nowrap;
  }

  &:hover {
    ul {
      max-height: 360px;
    }
  }

  small {
    font-size: 11px;
  }
`;

export const Home = styled.h1`
  font-weight: 500;
`;

export const StyledLink = styled(Link)`
  @media (max-width: 414px) {
    &[href='/'] {
      display: flex;
      height: 60px;
      align-items: center;
    }
  }

  &.active {
    color: ${PRIMARY_COLOR};
  }

  &:hover {
    color: ${PRIMARY_COLOR};
  }
`;

export const Background = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { color } }) => color};
  transition: opacity 0.4s ease-out 0.1s;
  opacity: ${({ isActive }) => (isActive ? '.5' : '0')};

  @media (max-width: 414px) {
    display: block;
  }
`;

export const MobileMenus = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 16px;
  width: 80%;
  height: 100%;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  transition: left.4s ease-out 0.1s;
  z-index: 3;
  overflow-y: auto;

  @media (max-width: 414px) {
    display: block;
    height: 100vh;
  }
`;

export const MobileMenu = styled.section`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;

  @media (max-width: 414px) {
    display: block;
    line-height: 60px;
    pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};

    ul,
    li,
    div,
    input {
      display: block;
    }
  }

  li {
    padding: 0;
    width: 100%;

    & > ul {
      position: static;
      max-height: ${({ isSubActive }) =>
        isSubActive ? '0' : '360px'} !important;

      li {
        @media (max-width: 414px) {
          padding: 0 0 0 16px;
        }
      }
    }
  }

  & > div + div {
    left: ${({ isActive }) => (isActive ? '0' : '-100%')};
    box-shadow: ${({ isActive }) =>
      isActive ? '0 2px 4px rgba(0,0,0,0.2)' : '0 0 0'};
    box-shadow: ${({ isActive }) =>
      isActive
        ? '0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)'
        : '0 0 0'};
  }
`;

export const ToggleWrapper = styled.label`
  position: absolute;
  right: 0;
  z-index: 3;

  @media (max-width: 414px) {
    left: 0;
    right: auto;
  }

  .react-toggle {
    touch-action: pan-x;

    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #f0f0f0;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #e6e6e6;
  }

  .react-toggle--checked .react-toggle-track {
    background-color: #2e2e2e;
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    background-color: #454545;
  }

  .react-toggle-track-check {
    display: flex;
    align-items: center;
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    display: flex;
    align-items: center;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fafafa;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
  }

  .react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 3px 2px #0099e0;
    -moz-box-shadow: 0px 0px 3px 2px #0099e0;
    box-shadow: 0px 0px 2px 3px #0099e0;
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 5px 5px #0099e0;
    -moz-box-shadow: 0px 0px 5px 5px #0099e0;
    box-shadow: 0px 0px 5px 5px #0099e0;
  }
`;
