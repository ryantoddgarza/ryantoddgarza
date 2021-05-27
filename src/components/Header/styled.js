import styled from 'styled-components';
import { backgroundColor } from '~/design-system';

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  font-size: 0.875rem;
  background-color: ${backgroundColor.default};
  border-bottom: 1px solid ${backgroundColor.darker};
  z-index: 3000;
`;
