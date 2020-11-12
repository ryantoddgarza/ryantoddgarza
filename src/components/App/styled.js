import styled from 'styled-components';
import { textColor, backgroundColor } from '~/design-system';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${textColor.default};
  background-color: ${backgroundColor.default};

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
