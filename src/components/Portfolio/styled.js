import styled from 'styled-components';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import { breakpoint, primaryColor, heading, space } from '~/design-system';
import styledTechCard from './styledTechCard';

export const Wrapper = styled(SimpleWrapper)`
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0 0;

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }

  & > section {
    ${breakpoint.from('tablet-l')} {
      float: left;
      width: 50%;
      max-height: calc(100vh - 100px);
      overflow-y: scroll;
    }

    ::-webkit-scrollbar {
      width: 4px;
      height: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${primaryColor.default};
      border-radius: 6px;
    }
  }
`;

export const PortfolioDescription = styled.section`
  padding: 0 ${space.x4} ${space.x4} 0;
  font-size: 14px;
  line-height: 1.6em;
  ${breakpoint.to('phone')} {
    margin: 0 0 16px;
    padding: 0 0 16px;
  }

  h1 {
    margin: 0 0 ${space.x6};
    font-size: ${heading.lvl1.size.desktop};
    line-height: 1;
  }

  h2 {
    margin: 24px 0 10px;
    font-size: ${heading.lvl2.size.desktop};
  }

  h3 {
    margin: 24px 0 10px;
    font-size: ${heading.lvl3.size.desktop};
  }

  p {
    margin: ${space.x4} 0 0;
  }

  ol,
  ul {
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 3em;
  }

  ol {
    list-style: decimal-leading-zero;
  }

  ul {
    list-style: disc;
  }

  em,
  i {
    font-style: italic;
  }

  strong,
  b {
    font-weight: 600;
  }

  a {
    color: ${primaryColor.default};
  }

  ${styledTechCard}
`;

export const PortfolioImages = styled.section`
  img {
    padding: 0 ${space.x4} ${space.x4};
    width: 100%;
    height: auto;
    ${breakpoint.to('phone')} {
      float: left;
      margin: 0 0 ${space.x2};
      padding: 0;
      &:last-child {
        margin: 0 0 ${space.x4};
      }
    }
  }
`;
