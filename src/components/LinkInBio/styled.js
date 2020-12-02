import styled, { createGlobalStyle } from 'styled-components';
import {
  backgroundColor,
  primaryColor,
  space,
  textColor,
  transition,
} from '~/design-system';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${textColor.default};
    background-color: ${backgroundColor.default};
  }

  footer {
    padding: ${space.x4} 0;
  }
`;

export const LinkInBioWrapper = styled.section`
  max-width: 640px;
  margin: 0 auto;
  padding: ${space.x4};
`;

export const StyledButton = styled.div`
  margin: 0 0 ${space.x4};
  padding: ${space.x4};
  text-align: center;
  border: 1px solid ${backgroundColor.dark};
  font-weight: 500;
  transition: all ${transition.duration.normal} ${transition.function.default};
  cursor: pointer;

  &:hover,
  &:active {
    color: ${primaryColor.default};
    border-color: ${primaryColor.default};
  }

  &.featured {
    color: ${textColor.onDark};
    background-color: ${backgroundColor.dark};

    &:hover,
    &:active {
      background-color: ${primaryColor.default};
    }
  }
`;

export const SocialInformation = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;

  a {
    display: inline-flex;
    padding: ${space.x4};
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
