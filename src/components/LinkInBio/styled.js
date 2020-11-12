import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, textColor } from '~/design-system';
import {
  BLACK_COLOR,
  WHITE_COLOR,
  DURATION_NORMAL,
  TIMING_BEZIER,
} from '~/components/Common/constants';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${textColor.default};
    background-color: ${WHITE_COLOR};
  }

  footer {
    padding: 1rem 0;
  }
`;

export const LinkInBioWrapper = styled.section`
  max-width: 640px;
  margin: 0 auto;
  padding: 1rem;
`;

export const StyledButton = styled.div`
  margin: 0 0 1rem;
  padding: 1rem;
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
    background-color: ${BLACK_COLOR};

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
    padding: 0.25rem;
    transition: all ${DURATION_NORMAL} ${TIMING_BEZIER};

    &:not(:last-of-type) {
      margin-right: 1rem;
    }

    &:hover,
    &:active {
      color: ${primaryColor.default};
    }
  }
`;
