import styled from 'styled-components';
import { textColor } from '~/design-system';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${textColor.default};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};

  main {
    flex: 1 0 auto;
  }

  @media print {
    & > nav,
    & > footer {
      display: none;
    }

    & > main {
      & > section {
        padding: 0;
      }
    }

    button {
      display: none;
    }
  }
`;
