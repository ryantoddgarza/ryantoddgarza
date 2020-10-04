import styled from 'styled-components';
import { Container } from '~/components/Common/Container';

export const Wrapper = styled(Container)`
  position: relative;
  padding: 100px 0 0;

  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }
`;
