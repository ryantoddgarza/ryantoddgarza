import styled from 'styled-components';
import { textColor } from '~/design-system';

export const Wrapper = styled.section`
  margin: 1em 0;

  a {
    color: ${textColor.default};
  }

  span,
  img {
    display: inline-block;
    vertical-align: middle;
  }

  img {
    margin: 0 4px 0 0;
    border-radius: 50%;
  }

  small {
    color: ${textColor.light};
    font-size: 90%;
  }
`;
