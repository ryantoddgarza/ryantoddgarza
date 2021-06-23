import styled from 'styled-components';
import { breakpoint, primaryColor, space, transition } from '~/design-system';

export const SocialInformation = styled.div`
  grid-area: social;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 ${space.x6};
  font-size: 20px;
  ${breakpoint.from('tablet')} {
    margin: 0;
  }

  a {
    display: inline-flex;
    margin-top: 8px;
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
