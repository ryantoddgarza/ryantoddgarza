import styled from 'styled-components';
import { PRIMARY_COLOR } from '~/components/Common/constants';

export const Wrapper = styled.nav`
  margin: 1em 0;
  text-align: center;

  a {
    color: ${PRIMARY_COLOR};
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  li {
    display: flex;
    padding: 0 0.4em;
  }
`;
