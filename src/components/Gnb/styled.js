import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';
import { primaryColor, textColor, backgroundColor } from '~/design-system';
import ScopedLink from '~/components/Common/ScopedLink';
import { Container } from '~/components/Common/Container';
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
  background-color: ${backgroundColor.default};
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
  background-color: ${backgroundColor.default};
  font-size: 13px;
  font-weight: 400;
  overflow: hidden;
  transition: max-height 0.4s ease-out 0.1s;

  li {
    padding: 6px 12px;
  }

  a:hover {
    color: ${primaryColor.default};
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
    color: ${textColor.default};
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

export const StyledLink = styled(ScopedLink)`
  @media (max-width: 414px) {
    &[href='/'] {
      display: flex;
      height: 60px;
      align-items: center;
    }
  }

  &.active {
    color: ${primaryColor.default};
  }

  &:hover {
    color: ${primaryColor.default};
  }
`;

export const Background = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${backgroundColor.default};
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
  background-color: ${backgroundColor.default};
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
