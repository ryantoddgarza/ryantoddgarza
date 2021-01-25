import styled from 'styled-components';
import { fontSizeFluid } from '~/design-system';

export const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  padding: 2rem 0;
  width: 80%;
  font-size: ${fontSizeFluid(48, 16)};
  line-height: 1.5;
  white-space: pre;
`;
