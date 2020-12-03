import styled from 'styled-components';
import { breakpoint } from '~/design-system';
import SimpleWrapper from '~/components/Common/SimpleWrapper';

export const Wrapper = styled(SimpleWrapper)`
  padding: 70px 0 0;
  text-align: center;
  ${breakpoint.from('tablet')} {
    padding: 100px 0 0;
  }

  h1 {
    margin: 0 0 2rem;
    font-size: 1.5rem;
  }

  h2 {
    margin: 0 0 1.5rem;
    font-size: 1rem;
  }
`;
