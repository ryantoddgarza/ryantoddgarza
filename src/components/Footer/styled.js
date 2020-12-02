import styled from 'styled-components';
import {
  backgroundColor,
  breakpoint,
  primaryColor,
  space,
  textColor,
  transition,
} from '~/design-system';
import { Container } from '~/components/Common/Container';

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
  ${breakpoint.from('tablet')} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'social copyright links';
  }
`;

export const SocialInformation = styled.div`
  grid-area: social;
  display: flex;
  margin: 0 0 ${space.x6};
  font-size: 20px;
  ${breakpoint.from('tablet')} {
    margin: 0;
  }

  a {
    display: inline-flex;
    transition: all ${transition.duration.normal} ${transition.function.default};

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
  ${breakpoint.from('tablet')} {
    text-align: center;
  }
`;

export const Links = styled.div`
  grid-area: links;
  margin: 0 0 ${space.x6};
  transition: all ${transition.duration.normal} ${transition.function.default};
  ${breakpoint.from('tablet')} {
    margin: 0;
    text-align: right;
  }

  ul {
    li {
      &:not(:last-of-type) {
        margin: 0 0 ${space.x4};
      }
      ${breakpoint.from('tablet')} {
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
