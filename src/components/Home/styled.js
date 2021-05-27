import styled from 'styled-components';
import { breakpoint, fontSizeFluid } from '~/design-system';

export const Title = styled.div`
  height: 2.8em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  font-size: ${fontSizeFluid(48, 16)};
  line-height: 1.4;
  white-space: pre;

  ${breakpoint.from('tablet-l')} {
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
`;
