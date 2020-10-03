import styled from 'styled-components';
import { PRIMARY_COLOR } from '~/components/Common/constants';

export const Header = styled.header`
  padding: 24px 0;
  text-align: center;

  a {
    font-size: 1rem;

    &::after {
      content: ' →';
    }

    &:hover {
      color: ${PRIMARY_COLOR};
    }
  }
`;

export const Title = styled.h2`
  margin: 16px 0;
  font-size: 3rem;
  font-weight: 500;
`;
