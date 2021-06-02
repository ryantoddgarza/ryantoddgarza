import styled from 'styled-components';
import {
  breakpoint,
  fontSizeFluid,
  primaryColor,
  space,
  transition,
} from '~/design-system';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  padding: ${space.x12} 0;

  ${breakpoint.from('tablet')} {
    flex-direction: row;
  }

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
  margin-top: ${space.x8};
  margin-bottom: ${space.x4};
  font-size: ${fontSizeFluid(32, 2)};
  line-height: 1;
`;
