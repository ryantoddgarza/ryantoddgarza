import styled from 'styled-components';
import { primaryColor, space } from '~/design-system';
import { fontSizeFluid } from '~/components/Common/fontSize';
import { DURATION_NORMAL, TIMING_BEZIER } from '~/components/Common/constants';

export const Header = styled.header`
  padding: 48px 0;
  text-align: center;

  a {
    font-size: 1rem;
    transition: all ${DURATION_NORMAL} ${TIMING_BEZIER};

    &::after {
      content: ' →';
    }

    &:hover {
      color: ${primaryColor.default};
    }
  }
`;

export const Title = styled.h2`
  margin: ${space.x6} 0;
  font-size: ${fontSizeFluid(28, 2)};
`;
