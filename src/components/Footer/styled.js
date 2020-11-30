import styled from 'styled-components';
import {
  backgroundColor,
  primaryColor,
  space,
  textColor,
} from '~/design-system';
import { Container } from '~/components/Common/Container';
import { DURATION_NORMAL, TIMING_BEZIER } from '~/components/Common/constants';

export const FooterWrapperOuter = styled.div`
  font-size: 0.75rem;
  color: ${textColor.light};
  background-color: ${backgroundColor.darker};
`;

export const FooterWrapperInner = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'links' 'social' 'copyright';
  align-items: end;
  padding: ${space.x8} 0;
  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'social copyright links';
  }
`;

export const SocialInformation = styled.div`
  grid-area: social;
  display: flex;
  margin: 0 0 ${space.x6};
  font-size: 20px;
  @media (min-width: 769px) {
    margin: 0;
  }

  a {
    display: inline-flex;
    transition: all ${DURATION_NORMAL} ${TIMING_BEZIER};

    &:not(:last-of-type) {
      margin-right: ${space.x4};
    }

    &:hover,
    &:active {
      color: ${primaryColor.default};
    }
  }
`;

export const Copyright = styled.div`
  grid-area: copyright;
  @media (min-width: 769px) {
    text-align: center;
  }
`;

export const Links = styled.div`
  grid-area: links;
  margin: 0 0 ${space.x6};
  transition: all ${DURATION_NORMAL} ${TIMING_BEZIER};
  @media (min-width: 769px) {
    margin: 0;
    text-align: right;
  }

  ul {
    li {
      &:not(:last-of-type) {
        margin: 0 0 ${space.x4};
      }
      @media (min-width: 769px) {
        display: inline-block;
        &:not(:last-of-type) {
          margin: 0 ${space.x3} 0 0;
        }
      }
    }
  }

  a:hover,
  a:active {
    color: ${primaryColor.default};
  }
`;
