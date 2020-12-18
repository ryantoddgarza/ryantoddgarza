import styled from 'styled-components';
import { fontSizeFluid, primaryColor, space, transition } from '~/design-system';

export const Header = styled.header`
  padding: ${space.x12} 0;
  text-align: center;

  a {
    font-size: 1rem;
    transition: all ${transition.duration.normal} ${transition.function.default};

    &:hover {
      color: ${primaryColor.default};
    }

    &::after {
      content: ' →';
    }
  }
`;

export const Title = styled.h2`
  margin: ${space.x6} 0 ${space.x4};
  font-size: ${fontSizeFluid(28, 2)};
`;
