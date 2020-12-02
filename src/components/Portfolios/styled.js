import styled from 'styled-components';
import { breakpoint } from '~/design-system';
import SimpleWrapper from '~/components/Common/SimpleWrapper';

export const Wrapper = styled(SimpleWrapper)`
  padding: 70px 0 0;
  ${breakpoint.from('tablet')} {
    padding: 100px 0 0;
  }
`;
