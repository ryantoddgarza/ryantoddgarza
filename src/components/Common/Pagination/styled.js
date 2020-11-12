import styled from 'styled-components';
import { primaryColor } from '~/design-system';

export const Wrapper = styled.nav`
  margin: 1em 0;
  text-align: center;

  a {
    color: ${primaryColor.default};
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
