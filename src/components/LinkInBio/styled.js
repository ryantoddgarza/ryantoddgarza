import styled, { createGlobalStyle } from 'styled-components';
import {
  backgroundColor,
  primaryColor,
  space,
  textColor,
} from '~/design-system';
import {
  BLACK_COLOR,
  DURATION_NORMAL,
  TIMING_BEZIER,
} from '~/components/Common/constants';

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
  border: 1px solid ${BLACK_COLOR};
  font-weight: 500;
  transition: all ${DURATION_NORMAL} ${TIMING_BEZIER};
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
