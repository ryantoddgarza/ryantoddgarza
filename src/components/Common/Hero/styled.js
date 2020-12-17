import styled from 'styled-components';
import { breakpoint, navbar } from '~/design-system';

export const HeroWrapperOuter = styled.section`
  position: relative;
  padding: 56.25% 0 0;
  width: 100%;
  height: 0;
  ${breakpoint.to('phone')} {
    padding: 178% 0 0;
    padding: calc(100vh - ${navbar.height}) 0 0;
  }
`;

export const HeroWrapperInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
