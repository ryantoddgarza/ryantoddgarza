import styled from 'styled-components';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import { breakpoint, primaryColor } from '~/design-system';
import styledTechCard from './styledTechCard';
import { typography } from '~/styles';

export const Wrapper = styled(SimpleWrapper)`
  display: flex;
  flex-direction: column;
  margin: 0 5%;

  ${breakpoint.from('tablet-l')} {
    flex-direction: row;
  }
`;

const Column = styled.section`
  flex: 1;
  padding: 1rem 0;

  ${breakpoint.from('tablet-l')} {
    max-height: calc(100vh - 3rem);
    overflow-y: scroll;
    padding: 1rem;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${primaryColor.default};
    border-radius: 6px;
  }
`;

export const PortfolioDescription = styled(Column)`
  ${typography}

  ol {
    list-style-type: decimal-leading-zero;
  }

  figure {
    margin: 1rem 0;
  }

  .gatsby-resp-image-wrapper,
  .gatsby-resp-iframe-wrapper {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
  }

  ${styledTechCard}
`;

export const PortfolioImages = styled(Column)`
  img {
    width: 100%;
    height: auto;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);

    &:not(:last-child) {
      margin: 0 0 1rem;
    }
  }
`;
