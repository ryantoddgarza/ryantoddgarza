import styled from 'styled-components';
import { primaryColor, space } from '~/design-system';

export const Wrapper = styled.nav`
  margin: ${space.x4} 0;
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
    padding: 0 ${space.x1};
  }
`;
