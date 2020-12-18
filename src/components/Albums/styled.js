import styled from 'styled-components';
import { Container } from '~/components/Common/Container';

export const Wrapper = styled(Container)`
  position: relative;
  padding: 3rem 0 0;

  & > article {
    margin: 0 0 3rem;
  }
`;
