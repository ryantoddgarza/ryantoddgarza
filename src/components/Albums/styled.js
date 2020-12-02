import styled from 'styled-components';
import { breakpoint } from '~/design-system';
import { Container } from '~/components/Common/Container';

export const Wrapper = styled(Container)`
  position: relative;
  padding: 70px 0 0;
  ${breakpoint.from('tablet')} {
    padding: 100px 0 0;
  }
`;
