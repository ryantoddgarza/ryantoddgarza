import styled from 'styled-components';
import { MdExpandMore } from 'react-icons/md';
import {
  backgroundColor,
  breakpoint,
  navbar,
  primaryColor,
  space,
  textColor,
} from '~/design-system';
import ScopedLink from '~/components/Common/ScopedLink';
import { Container } from '~/components/Common/Container';
import hamburger from './hamburger';

export const GnbWrapperOuter = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  font-size: 0.875rem;
  background-color: ${backgroundColor.default};
  border-bottom: 1px solid ${backgroundColor.darker};
  z-index: 3000;
`;

export const GnbWrapperInner = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  height: ${navbar.height};
  ${breakpoint.to('phone')} {
    ${hamburger}
  }
`;

export const NavList = styled.ul`
  display: none;
  ${breakpoint.from('tablet')} {
    display: block;
  }
`;

export const NavListItem = styled.li`
  position: relative;
  line-height: 3;
  ${breakpoint.from('tablet')} {
    display: inline-block;
    padding: 0 ${space.x4};
  }

  a {
    color: ${textColor.default};

    &:hover {
      color: ${primaryColor.default};
    }
  }

  small {
    font-size: 80%;
  }

  ul {
    max-height: 0;
  }

  &:hover {
    ul {
      max-height: 360px;
    }
  }
`;

export const NavMenu = styled.ul`
  position: static;
  white-space: nowrap;
  background-color: ${backgroundColor.default};
  overflow: hidden;
  transition: max-height 0.4s ease-out 0.1s;
  ${breakpoint.from('tablet')} {
    position: absolute;
    top: ${navbar.height};
  }
`;

export const NavMenuItem = styled(NavListItem)`
  display: block;
  padding: 0 0 0 ${space.x4};
  ${breakpoint.from('tablet')} {
    padding: 0 ${space.x4};
  }
`;

export const HeaderName = styled.h1`
  padding: 0 ${space.x4} 0 0;
  font-weight: 500;
  white-space: nowrap;
`;

export const Hamburger = styled.div`
  position: absolute;
  right: 0;
  z-index: 5000;
  ${breakpoint.from('tablet')} {
    display: none;
  }
`;

export const MovableCaretDown = styled(MdExpandMore)`
  transition: transform 0.4s ease-out 0.1s;
  transform: rotate(180deg);

  &.is-active {
    transform: rotate(0deg);
  }
`;

export const StyledLink = styled(ScopedLink)`
  ${breakpoint.to('phone')} {
    &[href='/'] {
      display: flex;
      height: ${navbar.height};
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
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${backgroundColor.default};
  transition: opacity 0.4s ease-out 0.1s;
  opacity: ${({ isActive }) => (isActive ? '.5' : '0')};
  ${breakpoint.from('tablet')} {
    display: none;
  }
`;

export const MobileMenus = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 ${space.x4};
  width: 80%;
  height: 100vh;
  background-color: ${backgroundColor.default};
  transition: left.4s ease-out 0.1s;
  z-index: 3;
  overflow-y: auto;
  ${breakpoint.from('tablet')} {
    display: none;
    height: 100%;
  }
`;

export const MobileMenu = styled.section`
  position: fixed;
  top: ${navbar.height};
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
  z-index: 99;
  ${breakpoint.from('tablet')} {
    display: none;
  }

  ul,
  div,
  input {
    display: block;
  }

  li > ul {
    max-height: ${({ isSubActive }) => (isSubActive ? '0' : '360px')} !important;
  }

  & > div + div {
    left: ${({ isActive }) => (isActive ? '0' : '-100%')};
  }
`;
