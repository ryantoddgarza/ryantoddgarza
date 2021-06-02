import styled from 'styled-components';
import { navbar } from '~/design-system';

export const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & > main {
    flex: 1;
    padding: ${navbar.height} 0 0;
  }

  @media print {
    & > nav,
    & > footer {
      display: none;
    }

    & > main {
      padding: 0;
      & > section {
        padding: 0;
      }
    }

    button {
      display: none;
    }
  }
`;
