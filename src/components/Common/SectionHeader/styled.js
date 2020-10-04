import styled from 'styled-components';
import { fontSizeFluid } from '~/components/Common/fontSize';
import { PRIMARY_COLOR } from '~/components/Common/constants';

export const Header = styled.header`
  padding: 48px 0;
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
  font-size: ${fontSizeFluid(28, 2)};
`;
